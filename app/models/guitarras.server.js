export async function getGuitarras(){
    const respuesta = await fetch('http:localhost:1337/api/guitarras?populate=imagen')
    const resultado = await respuesta.json()
    return resultado
}

