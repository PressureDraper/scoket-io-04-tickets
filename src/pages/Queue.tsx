import { Card, Col, Divider, List, Row, Tag, Typography } from "antd"
import { data } from "../helpers/data";
import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";

export const Queue = () => {
    const { Title, Text } = Typography;
    const { setHideMenu } = useContext(UiContext);

    useEffect(() => {
        setHideMenu(true);
    }, [setHideMenu]);

    return (
        <>
            <Title level={1}>Serving Customer</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={data.slice(0, 3)}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    style={{ width: 300, marginTop: 15 }}
                                    actions={[
                                        <Tag color="volcano"> {item.agent} </Tag>,
                                        <Tag color="magenta"> {item.desktop} </Tag>
                                    ]}
                                >
                                    <Title>No. {item.ticketNo}</Title>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={12}>
                    <Divider>History</Divider>
                    <List
                        dataSource={data.slice(3)}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${item.ticketNo}`}
                                    description={
                                        <>
                                            <Text type="secondary">On desktop: </Text>
                                            <Tag color="magenta">{item.ticketNo}</Tag>
                                            <Text type="secondary">Agent: </Text>
                                            <Tag color="magenta">{item.agent}</Tag>
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
