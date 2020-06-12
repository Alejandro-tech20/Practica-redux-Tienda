
import {combineReducers} from 'redux'
import { almacen_Reducer } from './tienda/reducer'

export const rootReducer = combineReducers({
    almacen: almacen_Reducer
});

export type RootState = ReturnType<typeof rootReducer>;