import React, { FC } from 'react'

import { List } from 'antd'

import { Producto } from '../store/tienda/type'
import { ProductoItem } from '../component/ItemProducto'

interface ProductosListProps {
    productos: Producto[];
    onAdiconar: (id: number) => void;
    onVender: (id: number) => void;
}

export const ListProductos: FC<ProductosListProps> = ({
    productos, onAdiconar, onVender
}) => {
    return (
        <List locale={{ emptyText: 'No hay productos' }}
            dataSource={productos} renderItem={producto => (
                <ProductoItem producto={producto}
                    onAdicionar={onAdiconar} onVender={onVender} />
            )} pagination={{ position: 'bottom', pageSize: 10 }} />
    );
}