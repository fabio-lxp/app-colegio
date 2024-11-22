from app import app  # Ahora que la aplicación está completamente definida, podemos importarla

# Importar las rutas después de la inicialización de la aplicación
from app import routes

from app import db
from app.models import Usuario

# Crear un administrador por defecto
def crear_admin():
    admin = Usuario.query.filter_by(email='admin@colegio.com').first()
    if not admin:
        admin = Usuario(
            nombre="Administrador",
            email="admin@colegio.com",
            rol="admin"
        )
        admin.set_contrasena("admin123")
        db.session.add(admin)
        db.session.commit()
        print("Administrador creado con éxito.")
    else:
        print("El administrador ya existe.")

if __name__ == "__main__":
    with app.app_context():
        crear_admin()
    app.run(debug=True)
