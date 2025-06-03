from fastapi import FastAPI

app = FastAPI()

@app.get("/")
 HEAD
def read_root():
    return {"message": "¡Copi a un toque funcionando!"}



def root():
    return {"message": "Hola Copi!"}
 0eab3d04 (🚀 Commit inicial con toda la estructura y base)
