import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd"

export const CreateTicket = () => {
    const { Title, Text } = Typography;

    const newTicket = () => {
        console.log('new');
    }

    return (
        <>
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Title level={3}>Press button to create new Ticket</Title>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        shape="round"
                        type="primary"
                        variant="outlined"
                        icon={<DownloadOutlined />}
                        onClick={newTicket}
                        style={{ width: 120 }}
                    >
                        Get Ticket
                    </Button>
                </Col>
            </Row>
            <Row style={{ marginTop: '15vh' }}>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Text style={{ fontSize: '18px' }}>Your Number</Text>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Text style={{ fontSize: '100px', color: 'green' }}>55</Text>
                </Col>
            </Row>
        </>
    )
}
