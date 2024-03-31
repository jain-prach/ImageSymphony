from pymongo import MongoClient

# establish connection with the database
client = MongoClient("mongodb+srv://prachijain:Ivl7D5ZkQrgeB77A@cluster0.1g1mls3.mongodb.net/?retryWrites=true&w=majority&appName=cluster0")
db = client["ImageSymphony"]

# saves the data based on user requirement into specified modules
def save_to_valid_module(module_name, image_array):
    try:
        collection = db[module_name]

        result = collection.insert_one({"image_data": image_array.tolist()})

        return {"message": f"Image saved to {module_name} successfully", "inserted_id": str(result.inserted_id)}
    except Exception as e:
        return {"error": str(e)}