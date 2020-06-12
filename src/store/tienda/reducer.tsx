
import {
    COMPRAR_PRODUCTO,
    VENDER_PRODUCTO,
    Producto,
    Almacen,
    AlmacenActionsType,
    ADICIONAR_PRODUCTO
} from './type'

const initialState: Almacen = {
    productos: []
};

export function almacen_Reducer(state = initialState, action: AlmacenActionsType): Almacen {
    switch (action.type) {
        case COMPRAR_PRODUCTO:
            return {
                productos: [...state.productos, action.payload]
            };
        case ADICIONAR_PRODUCTO:
            return {
                productos: state.productos.map((item) =>
                    item.id === action.payload ? {
                        ...item,
                        ctn: parseInt(item.ctn.toString()) + 1
                    } : item
                )
            };
        case VENDER_PRODUCTO:
            return {
                productos: state.productos.map((item) => item.id === action.payload ?
                    { ...item, ctn: item.ctn - action.payload } : item
                )
            };
        default:
            return state;
    }
}