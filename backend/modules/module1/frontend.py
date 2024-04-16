from fastapi import APIRouter, Form
from .backend import model_noise
router = APIRouter()

@router.post("/model-noise-particular-type/noise-type")
async def noise_type(noise_type: str = Form(...)):
    try:
        noise_arr = []
        await model_noise(noise_type, noise_arr, min, max) 
    except Exception as e:
        return {"error": str(e)}