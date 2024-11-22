from flask import abort
from flask_login import current_user

def requiere_rol(rol_requerido):
    def decorador(func):
        def envoltura(*args, **kwargs):
            if not current_user.is_authenticated or current_user.rol != rol_requerido:
                abort(403)  # Retorna un error 403 si no tiene permisos
            return func(*args, **kwargs)
        envoltura.__name__ = func.__name__
        return envoltura
    return decorador
