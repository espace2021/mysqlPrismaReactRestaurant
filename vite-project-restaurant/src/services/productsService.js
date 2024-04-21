import Api from "../axios/Api";

const PRODUCT_API="products"

export const fetchproducts=async()=> {
return await Api.get(PRODUCT_API);
}
export const fetchproductById=async(productId)=> {
    return await Api.get(PRODUCT_API + '/' + productId);
    }
export const deleteproduct=async(productId) =>{
    return await Api.delete(PRODUCT_API + '/' + productId);
    }
export const addproduct=async(product)=> {
    return await Api.post(PRODUCT_API, product);
    }
export const updateproduct=(product) =>{
    return Api.put(PRODUCT_API + '/' + product._id, product);
    }
