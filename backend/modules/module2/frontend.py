from fastapi import APIRouter, File, UploadFile, HTTPException, Form

router = APIRouter()

@router.get("/output_image_processing/noise_display")
async def display_processed_noise_arr(processed_noise_arr):
    return {"processed_noise": processed_noise_arr}