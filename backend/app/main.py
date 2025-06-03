from fastapi import FastAPI


app = FastAPI()

@app.get('/')
def read_root():
    return {'message': '¡Hola, Copi a un toque está en marcha!'}

