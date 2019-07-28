const initialState = { 
    anchor: 'left',
    product: [],
    open: false,
    id: '',
    name: '',
    xtype: '',
    price: '',
    rating: '',
    warranty_years: ''
};
export function product(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_PRODUCT':
            return {
                ...state,
                product: action.product
            };
        case 'PRODUCT_DETAIL':
            return {
                ...state,
                id: action.id,
                name: action.name,
                xtype: action.xtype,
                price: action.price,
                rating: action.rating,
                warranty_years: action.warranty_years
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
        }
}