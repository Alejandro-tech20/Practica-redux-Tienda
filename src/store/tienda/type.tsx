export const COMPRAR_PRODUCTO = 'COMPRAR_PRODUCTO';
export const VENDER_PRODUCTO = 'VENDER_PRODUCTO';
export const ADICIONAR_PRODUCTO = 'ADICIONAR_PRODUCTO';

export interface Producto{
    id:number;
    name: string;
    ctn: number;
}
export interface Almacen{
    productos: Producto[];
}

interface Comprar {
    type: typeof COMPRAR_PRODUCTO;
    payload: Producto;
}
interface Vender{
    type: typeof VENDER_PRODUCTO;
    payload: number;
}
interface Adicionar{
    type: typeof ADICIONAR_PRODUCTO;
    payload: number;
}

export type AlmacenActionsType = Comprar | Vender | Adicionar; 