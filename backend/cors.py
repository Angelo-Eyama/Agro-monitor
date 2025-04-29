
from fastapi.middleware.cors import CORSMiddleware

def configure_cors(app):
    origins = [
        "http://localhost:8000", # Backend
        "http://localhost:5173", # Frontend (Vite)
        "http://localhost:8080", # Frontend (Vue CLI)
        "*",    #⚠️ Allow all origins for development purposes
    ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
