#      - Connecting UI elements in frontend (Module0.jsx) to get the data sent by user
# Frontend Elements:
# -	Image Upload - sent to design.py when uploaded
# -	Image type input
# -	Image size input
# -	Image range input
# -	Display – connection made with module0.jsx to display information after processing in backend.py
# -	Submit – when clicked, allow backend.py to send data to integration.py after validity ensured in design.py

from fastapi import APIRouter, File, UploadFile
# import aiohttp
from .design import validate_image
from .backend import process_image
router = APIRouter()

# gets image file from Module0.jsx and sends to design.py - if validation is correct - enables submit button  -> if submit button is clicked send the file to backend.py

@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    validation_result = await validate_image(file.filename)
    return {"validation": validation_result}
    
@router.post("/model-noise-particular-type/submit")
async def submit_image(file: UploadFile = File(...)):
    try:
        module = "module1"
        result = await process_image(module, file)
        return result
    except Exception as e:
        return {"error": str(e)}

@router.post("/generate-modeled-noise-on-image/submit")
async def submit_image(file: UploadFile = File(...)):
    try:
        module = "module3"
        result = await process_image(module, file)
        return result
    except Exception as e:
        return {"error": str(e)}
    
@router.post("/model-noise-from-image/submit")
async def submit_image(file: UploadFile = File(...)):
    try:
        module = "module4"
        result = await process_image(module, file)
        return result
    except Exception as e:
        return {"error": str(e)}
    
@router.post("/generate-noise-on-image/submit")
async def submit_image(file: UploadFile = File(...)):
    try:
        module = "module5"
        result = await process_image(module, file)
        return result
    except Exception as e:
        return {"error": str(e)}
