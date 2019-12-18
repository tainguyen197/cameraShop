import {combineReducers} from 'redux'
import productReducer from '../reducers/productReducer'
import brandReducer from '../reducers/brandReducer'
import heroReducer from '../reducers/heroReducer'

const rootReducer = combineReducers({
    product: productReducer,
    brand: brandReducer,
    hero: heroReducer
})
export default rootReducer