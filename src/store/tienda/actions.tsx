
import {Producto, COMPRAR_PRODUCTO, VENDER_PRODUCTO, ADICIONAR_PRODUCTO} from './type'

export function comprar(producto: Producto){
    return{
        type: COMPRAR_PRODUCTO,
        payload: producto
    }
}
export function vender(id:number){
    return{
        type: VENDER_PRODUCTO,
        payload:id
    }
}
export function adicionar(id:number){
    return{
        type: ADICIONAR_PRODUCTO,
        payload: id
    }
}