import React, { FC } from 'react';
import { Card, Col, PageHeader, message } from 'antd'
import { Producto, Almacen } from '../store/tienda/type';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/reducer_comb'
import { ProductoItem } from '../component/ItemProducto';
import { adicionar, vender, comprar } from '../store/tienda/actions';
import { ListProductos } from '../component/ListProductos';
import { Add } from '../component/Adicionar';

export const App2: FC = () => {
  const productos: Producto[] = useSelector((state: RootState) => state.almacen.productos);
  const dispatch = useDispatch();

  const handleAdiconar = (id: number): void => {
    dispatch(adicionar(id));
    message.success('Adicionado');
  }
  const handleVender = (id: number): void => {
    dispatch(vender(id));
    message.warn('Vendido');
  }
  const handleComprar = (producto: Producto): void => {
    dispatch(comprar(producto));
    message.info('Nuevo Producto Adicionado');
  }

  return (
    <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 18 }} xl={{ span: 18 }}>
      <PageHeader title="Amacen" subTitle="Lista de productos" />
      <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 21 }}>
        <Card title="Lista de productos">
          <Add onAdd={handleComprar} />
        </Card>
        <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 23 }}>
          <Card title='Lista de Productos'>
            <ListProductos productos={productos}
              onVender={handleVender} onAdiconar={handleAdiconar} />
          </Card>
        </Col>
      </Col>
    </Col>
  );
}
