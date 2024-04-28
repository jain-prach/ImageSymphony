import numpy as np
from fastapi import APIRouter

router = APIRouter()

@router.post("/output_image_processing/noise_display")
def display_processed_noise_arr(processed_noise_bson, arr_shape):
    processed_noise_array = np.frombuffer(processed_noise_bson, dtype=np.float64)
    processed_noise_array = processed_noise_array.reshape(arr_shape)

    # Convert the numpy array to a base64-encoded PNG image
    import io
    import base64
    from PIL import Image

    # Normalize array values to range [0, 255]
    processed_noise_array = ((processed_noise_array - processed_noise_array.min()) / (processed_noise_array.max() - processed_noise_array.min()) * 255).astype(np.uint8)

    # Create PIL Image
    image = Image.fromarray(processed_noise_array)

    # Convert PIL Image to base64
    buffered = io.BytesIO()
    image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()

    return {"processedNoise": img_str}
