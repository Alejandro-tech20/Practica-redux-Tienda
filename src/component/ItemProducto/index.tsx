import React, { FC } from 'react'

import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

import { Producto } from '../../store/tienda/type'

interface ProductoItemProps {
    producto: Producto;
    onAdicionar: (id: number) => void;
    onVender: (id: number) => void;
}

export const ProductoItem: FC<ProductoItemProps> = ({
    producto, onAdicionar, onVender
}) => {
    return (
        <List.Item key={producto.id} actions={[<Tooltip
            title={(producto.ctn <= 2) ? 'Se estan agotando' : 'Hay suficientes'}>
            <div></div>
        </Tooltip>,
        <Popconfirm title='Seguro deses vender?' onConfirm={() => onVender(producto.id)}>
            <Button type='primary' danger>
                -
                </Button>
        </Popconfirm>,
        <Popconfirm title='Seguro Adicionar' onConfirm={() => onAdicionar(producto.id)}>
            <Button type='primary' danger>
                +
                </Button>
        </Popconfirm>]}>
            <Tag color={producto.ctn <= 2 ? 'cyan' : 'red'}>
                {producto.name}<span>{producto.ctn}</span>
            </Tag>
        </List.Item>
    );
};