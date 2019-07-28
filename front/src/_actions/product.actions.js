import { userService } from '../_services/';
import { history } from '../_helpers';

export const productAction = {
    getProduct,
    getProductById,
    onChangeProps,
    editProductInfo,
    createProduct,
    deleteProductById
};
function getProduct(){
    return dispatch => {
        let apiEndpoint = 'products';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeProductsList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
   };
}
function createProduct(payload){
    return dispatch => {
        let apiEndpoint = 'products/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/product');
        })
    }
}
function getProductById(id){
    return dispatch => {
        let apiEndpoint = 'products/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editProductsDetails(response.data.data));
        })
    };
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editProductInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'products/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/product');
        })
    }
}
function deleteProductById(id){
    return dispatch => {
        let apiEndpoint = 'products/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
             dispatch(deleteProductsDetails());
             dispatch(productAction.getProduct());
        })
    };
}
export function changeProductsList(product){
    return{
        type: "FETECHED_ALL_PRODUCT",
        product: product
    }
}
export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}
export function editProductsDetails(product){
    return{
        type: "PRODUCT_DETAIL",
        id: product._id,
        name: product.name,
        xtype: product.xtype,
        price: product.price,
        rating: product.rating,
        warranty_years: product.warranty_years
    }
}
export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}
export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}
export function deleteProductsDetails(){
    return{
        type: "DELETED_PRODUCT_DETAILS"
    }
}