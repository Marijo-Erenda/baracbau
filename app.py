from flask import Flask
from routes.health import health_bp


def create_app():
    app = Flask(__name__)

    # ===============================
    # 🔗 Blueprints registrieren
    # ===============================
    app.register_blueprint(health_bp, url_prefix="/api")

    return app


# ===============================
# 🚀 App starten (Customer Backend #1)
# ===============================
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host="127.0.0.1", port=3001)
