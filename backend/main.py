from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.diem_thi import diem_thi_router  # import your route module

app = FastAPI(
    title="Diem Thi API",
    description="API for THPT exam scores",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins='http://localhost:3000',            # list of allowed origins
    allow_credentials=True,
    allow_methods=["*"],              # allow all HTTP methods
    allow_headers=["*"],              # allow all headers
)

# Register your route
app.include_router(diem_thi_router, prefix="/diem-thi", tags=["Diem Thi"])