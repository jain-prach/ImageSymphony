#      - Connecting UI elements in frontend (Module0.jsx) to get the data sent by user
# Frontend Elements:
# -	Image Upload - sent to design.py when uploaded
# -	Image type input
# -	Image size input
# -	Image range input
# -	Display – connection made with module0.jsx to display information after processing in backend.py
# -	Submit – when clicked, allow backend.py to send data to integration.py after validity ensured in design.py

from fastapi import APIRouter, File, UploadFile, HTTPException, Form
from .design import validate_image
from .backend import process_image_into_array, process_all_zero_array, save_type
router = APIRouter()

# gets image file from Module0.jsx and sends to design.py - if validation is correct - enables submit button  -> if submit button is clicked send the file to backend.py

@router.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    is_valid = validate_image(file.filename)
    return {"validation": is_valid}
    
@router.post("/model-noise-particular-type/submit")
async def submit(type: str = Form(...), width: int = Form(...), height: int = Form(...), min: int = Form(...), max: int = Form(...)):
    try:
        module = "module1"
        await process_all_zero_array(module, width, height, min, max)
        await save_type(module, type)
        return
    except Exception as e:
        return {"error": str(e)}

@router.post("/generate-noise-on-image/submit")
async def submit(file: UploadFile = File(...)):
    try:
        module = "module3"
        await process_image_into_array(module, file)
        return
    except Exception as e:
        return {"error": str(e)}
    
@router.post("/model-noise-from-image/submit")
async def submit(file: UploadFile = File(...), width: int = Form(...), height: int = Form(...), min: int = Form(...), max: int = Form(...)):
    try:
        module = "module4"
        await process_image_into_array(module, file)
        await process_all_zero_array(module, width, height, min, max)
        save_type(module, type)
        return 
    except Exception as e:
        return {"error": str(e)}
    
@router.post("/generate-modeled-noise-on-image/submit")
async def submit(file: UploadFile = File(...)):
    try:
        module = "module5"
        await process_image_into_array(module, file)
        return
    except Exception as e:
        return {"error": str(e)}
