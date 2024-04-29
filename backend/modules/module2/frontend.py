import numpy as np
from fastapi import APIRouter, Response
from .design import numpy_array_to_image

router = APIRouter()

def processed_noise_arr(processed_noise_arr_bson, arr_shape):
    global processed_noise_array
    processed_noise_array = np.frombuffer(processed_noise_arr_bson, dtype=np.float64).reshape(arr_shape)
    return {"message": "Processed noise array received successfully"}

@router.post("/output_image_processing/noise_display")
def display_processed_noise_arr():
    global processed_noise_array
    img = numpy_array_to_image(processed_noise_array)
    return {"processedNoise": img}

