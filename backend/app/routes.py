from app import app, db, bcrypt, login_manager
from flask import render_template, request, redirect, url_for, flash, session, jsonify
from flask_login import login_user, logout_user, current_user, login_required
from app.models import Usuario, Nota, Actividad, Certificado, Inscripcion
from app.decorators import requiere_rol
from werkzeug.security import generate_password_hash
from flask_cors import CORS

CORS(app, origins="http://localhost:3000", supports_credentials=True)

# Cargar el usuario por ID (necesario para Flask-Login)
@login_manager.user_loader
def load_user(user_id):
    return Usuario.query.get(int(user_id))

# Ruta para la página principal
@app.route("/")
def home():
    return render_template("index.html")  # Página principal pública

# Ruta de inicio de sesión
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("username")
        contrasena = request.form.get("password")
        usuario = Usuario.query.filter_by(email=email).first()

        if not usuario or not usuario.verificar_contrasena(contrasena):
            flash("Credenciales incorrectas", "danger")
        elif not usuario.is_active:
            flash("El usuario está deshabilitado. Contacte al administrador.", "danger")
        else:
            login_user(usuario)
            session["usuario_rol"] = usuario.rol

            next_page = request.args.get('next')  # Redirigir a la página original si existía un 'next'
            if next_page:
                return redirect(next_page)
            elif usuario.rol == "admin":
                return redirect(url_for("vista_admin"))
            else:
                return redirect(url_for("vista_usuario"))

    return render_template("login.html")

# Ruta para cerrar sesión
@app.route("/logout")
@login_required
def logout():
    logout_user()
    session.pop("usuario_rol", None)  # Eliminar el rol de la sesión
    flash("Sesión cerrada exitosamente", "success")
    return redirect(url_for("home"))

# Ruta para administradores
@app.route("/admin")
@login_required
@requiere_rol("admin")
def vista_admin():
    return render_template("admin.html", usuario=current_user)

# Ruta para usuarios regulares
@app.route("/usuario")
@login_required
@requiere_rol("usuario")
def vista_usuario():
    return render_template("usuario.html", usuario=current_user)

# CREAR AL USUARIO DESDE EL PANEL DEL ADMIN

@app.route('/admin/crear_usuario', methods=['GET', 'POST'])
def crear_usuario():
    if request.method == 'POST':
        nombre = request.form['nombre']
        email = request.form['email']
        contrasena = request.form['contrasena']
        rol = request.form['rol']

        # Hashear la contraseña antes de guardarla
        hashed_password = generate_password_hash(contrasena)

        # Crear un nuevo usuario utilizando el modelo
        nuevo_usuario = Usuario(nombre=nombre, email=email, contraseña=hashed_password, rol=rol)

        # Agregar el usuario a la base de datos
        db.session.add(nuevo_usuario)
        db.session.commit()

        return redirect(url_for('vista_admin'))  # Redirige al dashboard de admin

    return render_template('admin/crear_usuario.html')

# Ruta para editar un usuario
@app.route('/admin/editar_usuario/<int:id>', methods=['GET', 'POST'])
@login_required
@requiere_rol('admin')
def editar_usuario(id):
    usuario = Usuario.query.get_or_404(id)
    if request.method == 'POST':
        usuario.nombre = request.form['nombre']
        usuario.email = request.form['email']
        usuario.rol = request.form['rol']
        usuario.is_active = bool(request.form.get('is_active', False))

        db.session.commit()
        flash("Usuario actualizado correctamente", "success")
        return redirect(url_for('vista_admin'))

    return render_template('admin/editar_usuario.html', usuario=usuario)


# Ruta para eliminar un usuario
@app.route('/admin/eliminar_usuario/<int:id>', methods=['POST'])
@login_required
@requiere_rol('admin')
def eliminar_usuario(id):
    usuario = Usuario.query.get_or_404(id)
    db.session.delete(usuario)
    db.session.commit()
    flash("Usuario eliminado correctamente", "success")
    return redirect(url_for('vista_admin'))


# Ruta para listar actividades
@app.route('/admin/actividades', methods=['GET'])
@login_required
@requiere_rol('admin')
def listar_actividades():
    actividades = Actividad.query.all()
    return render_template('admin/actividades.html', actividades=actividades)

# Ruta para crear actividad
@app.route('/admin/crear_actividad', methods=['GET', 'POST'])
@login_required
@requiere_rol('admin')
def crear_actividad():
    if request.method == 'POST':
        nombre = request.form['nombre']
        descripcion = request.form['descripcion']
        fecha = request.form['fecha']

        nueva_actividad = Actividad(nombre=nombre, descripcion=descripcion, fecha=fecha)
        db.session.add(nueva_actividad)
        db.session.commit()
        flash("Actividad creada correctamente", "success")
        return redirect(url_for('listar_actividades'))

    return render_template('admin/crear_actividad.html')

# Ruta para editar actividad
@app.route('/admin/editar_actividad/<int:id>', methods=['GET', 'POST'])
@login_required
@requiere_rol('admin')
def editar_actividad(id):
    actividad = Actividad.query.get_or_404(id)
    if request.method == 'POST':
        actividad.nombre = request.form['nombre']
        actividad.descripcion = request.form['descripcion']
        actividad.fecha = request.form['fecha']
        db.session.commit()
        flash("Actividad actualizada correctamente", "success")
        return redirect(url_for('listar_actividades'))

    return render_template('admin/editar_actividad.html', actividad=actividad)

# Ruta para eliminar actividad
@app.route('/admin/eliminar_actividad/<int:id>', methods=['POST'])
@login_required
@requiere_rol('admin')
def eliminar_actividad(id):
    actividad = Actividad.query.get_or_404(id)
    db.session.delete(actividad)
    db.session.commit()
    flash("Actividad eliminada correctamente", "success")
    return redirect(url_for('listar_actividades'))


# APIS PARA CONECTAR CON EL FRONTEND (React)

# Ruta API para inicio de sesión
@app.route("/api/login", methods=["POST"])
def api_login():
    datos = request.json  # Obtener datos del cuerpo de la solicitud
    email = datos.get("email")
    password = datos.get("password")

    # Buscar el usuario por email
    usuario = Usuario.query.filter_by(email=email).first()

    if usuario and usuario.verificar_contrasena(password):  # Verificar la contraseña
        # Crear una respuesta con los datos del usuario
        respuesta = {
            "mensaje": "Inicio de sesión exitoso",
            "usuario": {
                "id": usuario.id,
                "nombre": usuario.nombre,
                "email": usuario.email,
                "rol": usuario.rol
            }
        }
        return jsonify(respuesta), 200
    else:
        return jsonify({"error": "Credenciales incorrectas"}), 401

# API para crear usuario
@app.route("/api/usuarios", methods=["POST"])
def api_crear_usuario():
    datos = request.json
    nombre = datos.get("nombre")
    email = datos.get("email")
    password = datos.get("password")
    rol = datos.get("rol", "usuario")

    if Usuario.query.filter_by(email=email).first():
        return jsonify({"error": "El email ya está registrado"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
    nuevo_usuario = Usuario(nombre=nombre, email=email, contrasena=hashed_password, rol=rol)
    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify({"mensaje": "Usuario creado exitosamente"}), 201




# Formulario de isncripción 

@app.route('/api/inscribir', methods=['POST'])
def inscribir():
    data = request.json
    try:
        nueva_inscripcion = Inscripcion(
            nombre=data['nombre'],
            apellido=data['apellido'],
            email=data['email'],
            telefono=data.get('telefono'),
            direccion=data.get('direccion')
        )
        db.session.add(nueva_inscripcion)
        db.session.commit()
        return jsonify({"message": "Inscripción exitosa"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# CRUD de Certificados

# Obtener certificados de un usuario
@app.route("/api/certificados/<int:usuario_id>", methods=["GET"])
@login_required
def obtener_certificados(usuario_id):
    certificados = Certificado.query.filter_by(usuario_id=usuario_id).all()
    return jsonify([{
        "id": certificado.id,
        "nombre": certificado.nombre,
        "fecha_emision": certificado.fecha_emision
    } for certificado in certificados])

# Crear certificado para un usuario
@app.route("/api/certificados", methods=["POST"])
@login_required
def crear_certificado():
    datos = request.json
    usuario_id = datos.get("usuario_id")
    nombre = datos.get("nombre")
    fecha_emision = datos.get("fecha_emision")

    # Verifica que el usuario exista
    usuario = Usuario.query.get(usuario_id)
    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    nuevo_certificado = Certificado(usuario_id=usuario_id, nombre=nombre, fecha_emision=fecha_emision)
    db.session.add(nuevo_certificado)
    db.session.commit()

    return jsonify({"mensaje": "Certificado creado exitosamente"}), 201

# Actualizar certificado
@app.route("/api/certificados/<int:id>", methods=["PUT"])
@login_required
def actualizar_certificado(id):
    certificado = Certificado.query.get_or_404(id)
    datos = request.json

    certificado.nombre = datos.get('nombre', certificado.nombre)
    certificado.fecha_emision = datos.get('fecha_emision', certificado.fecha_emision)

    db.session.commit()
    return jsonify({"mensaje": "Certificado actualizado exitosamente"})

# Eliminar certificado
@app.route("/api/certificados/<int:id>", methods=["DELETE"])
@login_required
def eliminar_certificado(id):
    certificado = Certificado.query.get_or_404(id)
    db.session.delete(certificado)
    db.session.commit()

    return jsonify({"mensaje": "Certificado eliminado exitosamente"})
