import { CloseCircleOutlined, StepForwardOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd"

export const Desktop = () => {
    const { Title, Text } = Typography;

    const nextTicket = () => {

    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Name</Title>
                    <Text>Now working on desktop: </Text>
                    <Text type="success">5</Text>
                </Col>
                <Col span={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        shape="round"
                        color="primary"
                        variant="solid"
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
                            55
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
