export const fetchStores = async () => {
    try {
    const response = await fetch('/user/stores.json');
    const data = await response.json();
    return data;
    } catch (error) {
    console.log(error);
    }
}

export const fetchProductDetails = async (url) => {
    try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
    } catch (error) {
        console.log(error);
    }
}

//manage store
export const fetchManageStore = async() =>{
    try{
    const response = await fetch('/organizations/56/stores.json');
    const data = await response.json();
    return data;
    }
    catch (error){
        console.log(error);
    }
}

export const deleteProduct = async (store_id,currentProduct) =>{
    const response = await fetch(`/stores/${store_id}/store_inventories/${currentProduct}`, {
        method: 'DELETE',
    });
     return response;
}
