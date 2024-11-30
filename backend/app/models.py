from datetime import datetime
from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# Modelo de Usuario
class Usuario(db.Model,UserMixin):

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(200), nullable=False)
    rol = db.Column(db.String(50), default='usuario')  # Administrador o Usuario
    is_active = db.Column(db.Boolean, default=True)  # Atributo is_active

    # Relación con las notas
    notas = db.relationship('Nota', backref='usuario', lazy=True)
    # Relación con los certificados
    certificados = db.relationship('Certificado', backref='usuario', lazy=True)

    def __repr__(self):
        return f'<Usuario {self.nombre}>'

    def set_contrasena(self, contrasena):
        """Hashea la contraseña antes de guardarla."""
        self.contraseña = generate_password_hash(contrasena)

    def verificar_contrasena(self, contrasena):
        """Verifica si la contraseña ingresada coincide con la almacenada."""
        return check_password_hash(self.contraseña, contrasena)

# Modelo de Nota
class Nota(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    materia = db.Column(db.String(100), nullable=False)
    nota = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Nota {self.id} - {self.materia} - {self.nota}>'

# Modelo de Certificado
class Certificado(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'), nullable=False)
    nombre = db.Column(db.String(100), nullable=False)  # Se añadió el campo nombre
    fecha_emision = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Certificado {self.nombre} - {self.usuario_id}>'

# Modelo de Inscripción
class Inscripcion(db.Model):
    __tablename__ = 'inscripciones'
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    apellido = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), nullable=False)
    telefono = db.Column(db.String(20))
    direccion = db.Column(db.Text)
    fecha_inscripcion = db.Column(db.DateTime, default=db.func.current_timestamp())

# Modelo de Actividad
class Actividad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    fecha = db.Column(db.DateTime, nullable=False)
    descripcion = db.Column(db.Text, nullable=True)
    tipo = db.Column(db.String(50), nullable=False)  # Ejemplo: "Evento escolar", "Fiesta"

    def __repr__(self):
        return f'<Actividad {self.nombre} - {self.tipo}>'
