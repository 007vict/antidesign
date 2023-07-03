import React from "react";
import {Button, Card, Col, Row, Typography, Space} from "antd";
import {PlusOutlined} from "@ant-design/icons";
const {Link} = Typography
export const CardLinkOperations = () => {

  const styleLink = {
    display: 'flex',
  }
  return (
    <Card title="Card title" bordered={false}>
      <Row gutter={[16, 16]}>
        <Col lg={{span: 6}} sm={{span: 4}}>
          <Space direction={'vertical'} wrap={true}>
            <Link style={styleLink} ellipsis href="https://ant.design" target="_blank">Operation 1</Link>
            <Link style={styleLink} ellipsis href="https://ant.design" target="_blank">Operation 5</Link>
          </Space>
        </Col>
        <Col lg={{span: 6}} sm={{span: 4}} wrap={true}>
          <Space direction={'vertical'}>
            <Link style={styleLink} ellipsis href="https://ant.design" target="_blank">Operation 2</Link>
            <Link style={styleLink} ellipsis href="https://ant.design" target="_blank">Operation 6</Link>
          </Space>
        </Col>
        <Col lg={{span: 6}} sm={{span: 4}} wrap={true}>
          <Space direction={'vertical'}>
            <Link style={styleLink} ellipsis href="https://ant.design" target="_blank">Operation 3</Link>
            <Button size={'small'} icon={<PlusOutlined />} type={'primary'} ghost>
              Add ...
            </Button>
          </Space>
        </Col>
        <Col lg={{span: 6}} sm={{span: 4}} wrap={true}>
          <Space direction={'vertical'}>
            <Link style={styleLink} ellipsis href="https://ant.design" target="_blank">Operation 4</Link>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}