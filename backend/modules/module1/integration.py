from pymongo import MongoClient
from pymongo.server_api import ServerApi
from .backend import noise_data
import json

uri = "mongodb+srv://prachijain:kAcra3f4YNypqxWn@cluster0.1g1mls3.mongodb.net/?retryWrites=true&w=majority&appName=cluster0"
client = MongoClient(uri, server_api=ServerApi('1'))
db = client["ImageSymphony"]

collection = db['module1'] 

def noise_result_id(result_id: int):
    result = collection.find_one({"_id": result_id})
    noise_arr = result["noise_array"]
    min = result["min"]
    max = result["max"]
    print(noise_arr)
    noise_data(noise_arr, min, max)

def file_type_id(result_id: int):
    result = collection.find_one({"_id": result_id})
    file_type = result["file_type"]
    return file_type

async def save_processed_noise_arr(noise_arr):
    collection = db['module3'] 
    print(noise_arr)
    noise_array_json = json.dumps(noise_arr.tolist())
    result = await collection.insert_one({"processed_noise_array": noise_array_json})
    if result.inserted_id:
        print(result.inserted_id)
        from ..module2.integration import processed_noise_arr_id
        processed_noise_arr_id(result.inserted_id)
        return {"message": "Data saved successfully"}
    else:
        return {"message": f"File type saved to module2 successfully"}