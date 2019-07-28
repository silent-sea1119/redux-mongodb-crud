import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { vendor } from './vendor.reducer';
import { product } from './product.reducer';
const rootReducer = combineReducers({
    authentication,
    vendor,
    product
});
export default rootReducer;