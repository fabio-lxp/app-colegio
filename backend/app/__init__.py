from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from app.config import Config
from flask_bcrypt import Bcrypt

# Inicializar la app
app = Flask(__name__)
app.config.from_object(Config)

# Inicializa Bcrypt
bcrypt = Bcrypt(app)

# Configuración de la base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql://{app.config['MYSQL_USER']}:{app.config['MYSQL_PASSWORD']}@{app.config['MYSQL_HOST']}/{app.config['MYSQL_DB']}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Desactivar la notificación de cambios de SQLAlchemy

# Instanciar las extensiones
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login_manager = LoginManager(app)

# Especifica la vista de login cuando no está autenticado
login_manager.login_view = 'login'

# Cargar el usuario por su ID
from app.models import Usuario  # Importar después de instanciar db
@login_manager.user_loader
def load_user(user_id):
    return Usuario.query.get(int(user_id))  # Devuelve el usuario desde la base de datos

# Importar modelos después de la configuración de db y login_manager
from app import models

# Importar rutas al final para evitar problemas de importación circular
from app import routes  
