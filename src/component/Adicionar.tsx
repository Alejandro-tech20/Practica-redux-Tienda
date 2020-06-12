import React, { FC } from 'react'
import { Producto } from '../store/tienda/type'
import { Form, Row, Col, Input, Button } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons';

interface AddProps {
    onAdd: (producto: Producto) => void;
}

export const Add: FC<AddProps> = ({ onAdd }) => {
    const [form] = Form.useForm();

    const onFinish = () => {
        onAdd({
            name: form.getFieldValue('name'),
            id: form.getFieldValue('id'),
            ctn: form.getFieldValue('ctn')
        });
        form.resetFields();
    }

    return (
        <Form form={form} onFinish={onFinish} layout='horizontal'>
            <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item name={'name'} rules={[{
                        required: true, message: 'Este campo es requerido'
                    }]}>
                        <Input placeholder='Entrar el nombre' />
                    </Form.Item>
                    <Form.Item name={'id'} rules={[{
                        required: true, message: 'Este campo es requerido'
                    }]}>
                        <Input placeholder='Entrar el Id' />
                    </Form.Item>
                    <Form.Item name={'ctn'} rules={[{
                        required: true, message: 'Este campo es requerido'
                    }]}>
                        <Input placeholder='Entrar el cantidad' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type='primary' htmlType='submit' block>
                        <PlusCircleFilled />
                        Add Producto
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};