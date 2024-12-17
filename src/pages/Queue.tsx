import { Card, Col, Divider, List, Row, Tag, Typography } from "antd"
import { useContext, useEffect, useState } from "react";
import { UiContext } from "../context/UiContext";
import { SocketContext } from "../context/SocketContext";
import { PropsTicketsInterface, ReqTicketsInterface } from "../interfaces/ITickets";
import { getTicketsHistory } from "../services/getTicketsHistory";

export const Queue = () => {
    const { Title, Text } = Typography;
    const { setHideMenu } = useContext(UiContext);
    const [tickets, setTickets] = useState<PropsTicketsInterface[]>([]);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        setHideMenu(true);
    }, [setHideMenu]);

    useEffect(() => {
        socket?.on('assignedTickets', (data: PropsTicketsInterface[]) => {
            setTickets(data);
        })
    }, [socket]);

    useEffect(() => {
        getTicketsHistory().then((data: ReqTicketsInterface) => {
            setTickets(data.data);
        });
    }, []);

    return (
        <>
            <Title level={1}>Serving Customer</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={tickets.slice(0, 3)}
                        renderItem={(item: PropsTicketsInterface) => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 15 }}
                                    actions={[
                                        <Tag color="volcano"> {item.agent?.charAt(0).toUpperCase() + item.agent!.slice(1)} </Tag>,
                                        <Tag color="magenta"> {item.desktop} </Tag>
                                    ]}
                                >
                                    <Title>No. {item.number}</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>History</Divider>
                    <List
                        dataSource={tickets.slice(3)}
                        renderItem={(item: PropsTicketsInterface) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${item.number}`}
                                    description={
                                        <>
                                            <Text type="secondary">On desktop: </Text>
                                            <Tag color="magenta">{item.number}</Tag>
                                            <Text type="secondary">Agent: </Text>
                                            <Tag color="magenta">{item.agent?.charAt(0).toUpperCase() + item.agent!.slice(1)}</Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    )
}
