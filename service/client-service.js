/** PRODUCTOS **/
const generarListaCompletaCards = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const registrarProducto = (name, imageURL, price, category, description) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ name, imageURL, price, category, description, id: uuid.v4() }),
    });
};

const generarListaUsuarios = () => fetch("http://localhost:3000/usuario").then(respuesta => respuesta.json());

export const clientServices = {
    generarListaCompletaCards,
    generarListaUsuarios,
    registrarProducto,
};