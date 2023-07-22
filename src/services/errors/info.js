export const generateProductErrorInfo = (prod) => {
    return `One or more properties were incomplete or not valid.
    List of required propertires: 
    *title: needs to be String, receveid ${prod.title}
    *price: needs to be Number,  receveid ${prod.price}
    *stock: needs to be Number,  receveid ${prod.stock}`
}