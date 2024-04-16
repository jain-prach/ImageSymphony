from pymongo import MongoClient
from pymongo.server_api import ServerApi
import json
import logging

logging.basicConfig(filename='app.log', level=logging.DEBUG)

# establish connection with the database
uri = "mongodb+srv://prachijain:kAcra3f4YNypqxWn@cluster0.1g1mls3.mongodb.net/?retryWrites=true&w=majority&appName=cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["ImageSymphony"]

# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)

# saves the data based on user requirement into specified modules
async def save_img_to_valid_module(module_name, image_array, filename):
    try:
        collection = db[module_name]
        
        image_array_json = json.dumps(image_array.tolist())
        
        result = await collection.insert_one({"file_name": filename, "image_array": image_array_json})
        if result.inserted_id:
            return {"message": "Data saved successfully"}
        else:
            return {"message": f"Image saved to {module_name} successfully"}
    except Exception as e:
        return {"error": str(e)}
    
async def save_noise_to_valid_module(module_name, noise_array, min, max):
    try:
        collection = db[module_name]
        
        noise_array_json = json.dumps(noise_array.tolist())

        result = await collection.insert_one({"noise_array": noise_array_json, "min": min, "max": max})	
        if result.inserted_id:
            return {"message": "Data saved successfully"}
        else:
            return {"message": f"Noise array saved to {module_name} successfully"}
    except Exception as e:
        return {"error": str(e)}

async def save_file_type_to_valid_module(module_name, type):
    try:
        collection = db[module_name]
        result = await collection.insert_one({"file_type": type})	
        if result.inserted_id:
            return {"message": "Data saved successfully"}
        else:
            return {"message": f"File type saved to {module_name} successfully"}
    except Exception as e:
        return {"error": str(e)}