from fastapi import APIRouter, Form
from .backend import model_noise
router = APIRouter()

@router.post("/model-noise-particular-type/noise-type")
def noise_type(noise_type: str = Form(...)):
    try:
        model_noise(noise_type) 
    except Exception as e:
        raise e