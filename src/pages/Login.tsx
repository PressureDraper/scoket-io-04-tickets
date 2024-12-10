import { Button, Form, FormProps, Input, InputNumber, Typography } from 'antd';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    type FieldType = {
        username?: string;
        desktop?: string;
        remember?: string;
    };

    const { Title } = Typography;

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log(values);
        navigate('/desktop', { replace: true });
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Title level={2}>Log In</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Form
                        name="basic"
                        style={{ width: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Desktop"
                            name="desktop"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <InputNumber min={1} max={99} style={{ marginLeft: 14, width: '97%' }} />
                        </Form.Item>

                        <Form.Item style={{ paddingLeft: '44%' }}>
                            <Button type="primary" htmlType="submit" shape='round'>
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
