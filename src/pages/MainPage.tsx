import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UiContext } from '../context/UiContext';
import { ReactElement, useContext } from 'react';

const { Sider, Content } = Layout;

export const MainPage = ({ Component }: { Component: ReactElement }) => {
    const navigate = useNavigate();
    const { showMenu } = useContext(UiContext);

    const {
        token: { borderRadiusLG, colorBgContainer },
    } = theme.useToken();

    const handlePage = (item: string) => {
        switch (item) {
            case '1':
                navigate('/login', { replace: false });
                break;

            case '2':
                navigate('/queue', { replace: false });
                break;

            case '3':
                navigate('/createTicket', { replace: false });
                break;

            default:
                break;
        }
    }

    return (
        <Layout style={{ height: '100vh', margin: 0, padding: 0 }}>
            <Sider collapsedWidth="0" breakpoint='md' hidden={showMenu}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={(e) => handlePage(e.key)}
                    selectedKeys={['1']}
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Login',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Queue List',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Create Ticket',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {Component}
                </Content>
            </Layout>
        </Layout>
    );
};
