from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.modules.module0.frontend import router as frontend0
from backend.modules.module1.frontend import router as frontend1
from backend.modules.module2.frontend import router as frontend2



origins = ["*"] # [*] (before) - This will eventually be changed to only the origins you will use once it's deployed, to secure the app a bit more.

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(frontend0)
app.include_router(frontend1)
app.include_router(frontend2)


@app.get('/')
def get_root():
    return {"message": "Hello World"}