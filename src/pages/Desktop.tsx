import { CloseCircleOutlined, StepForwardOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { PropsTicketsInterface } from "../interfaces/ITickets";

export const Desktop = () => {
    const navigate = useNavigate();
    const { Title, Text } = Typography;
    const [user, setUser] = useState<{ username: string, desktop: number }>({ username: '', desktop: 0 });
    const { socket } = useContext(SocketContext);
    const [ticket, setTicket] = useState<PropsTicketsInterface | null>(null);

    useEffect(() => {
        const userLocal = JSON.parse(localStorage.getItem("user")!);

        if (userLocal) {
            setUser(userLocal);
        } else {
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    const handleClose = () => {
        localStorage.removeItem("user");
        navigate('/login', { replace: true });
    }

    const nextTicket = () => {
        socket?.emit('getNextTicket', user, (ticket: PropsTicketsInterface) => {
            setTicket(ticket);
        });
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{user.username.charAt(0).toUpperCase() + user.username.slice(1)}</Title>
                    <Text>Now working on desktop: </Text>
                    <Text type="success">{user.desktop}</Text>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        shape="round"
                        color="primary"
                        variant="solid"
                        onClick={handleClose}
                    >
                        <CloseCircleOutlined />
                        Close
                    </Button>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Text>Attending Ticket #</Text>
                        <Text
                            style={{ fontSize: 30, color: 'red' }}
                        >
                            {ticket === null ? 'NONE' : ticket.number}
                        </Text>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <Button
                            onClick={nextTicket}
                            shape="round"
                            variant="solid"
                            color="primary"
                        >
                            <StepForwardOutlined />
                            Next
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}
