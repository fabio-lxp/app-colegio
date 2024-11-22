from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_cors import CORS

app = Flask(__name__, static_folder='frontend/build', static_url_path='')  # Configura React como estático
CORS(app)  # Permite CORS para todas las rutas

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost/colegio'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = "tu_clave_secreta"  # Necesaria para Flask-Login

# Inicializar base de datos
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Inicializar Flask-Login
login_manager = LoginManager(app)
login_manager.login_view = "login"
login_manager.login_message = "Por favor, inicia sesión para acceder a esta página."
login_manager.login_message_category = "warning"

# Importar modelos y rutas
from app.models import Usuario
from app import routes

# Sirve React
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path and (app.static_folder / path).exists():
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
