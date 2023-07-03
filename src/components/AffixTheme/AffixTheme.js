import {
  Affix,
  Button,
  ConfigProvider,
  ColorPicker,
  Form,
  InputNumber,
  Modal,
  Input,
  Checkbox,
  Space,
  Typography,
  Switch
} from "antd";
import {SettingOutlined} from "@ant-design/icons";
import React, {useState} from "react";

const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
};

export const AffixTheme = ({themeCustom, setThemeCustom}) => {
  const [form] = Form.useForm()
  const [data, setData] = useState(defaultData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const toggle = () => {
    setThemeCustom(!themeCustom)
  };

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: data.colorPrimary,
        borderRadius: data.borderRadius,
      }
    }}>
      <Affix style={{ position: 'absolute', top: 240, right: 0, zIndex: 99 }}>
        <Button size={'large'} type="primary" onClick={showModal} icon={<SettingOutlined />}/>
      </Affix>
      <Modal title="Settings" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name='basic'
          labelCol={{span: 8}}
          style={{maxWidth: 600}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
              required: true,
              message: 'Please input your username!'
            },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              },
            ]}
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Space>
              <Button type='primary' htmlType='submit'>Submit</Button>
              <Button type='primary' htmlType='reset'>Reset</Button>
            </Space>
          </Form.Item>
        </Form>
        {/*<hr/>*/}
        <Typography.Paragraph><h5>Theme</h5></Typography.Paragraph>
        <Form
          form={form}
          onValuesChange={(changedValues, allValues) => {
            if (changedValues.colorPrimary) {
              setData({
                ...allValues, colorPrimary: allValues?.colorPrimary.toHexString()
              })
            }
            if (changedValues.borderRadius) {
              if(typeof allValues?.colorPrimary === 'object') {
                setData({ borderRadius: changedValues.borderRadius, colorPrimary: allValues.colorPrimary.toHexString() })}
              else { setData({ ...allValues, borderRadius: changedValues.borderRadius}) }
            }
          }}
          name='theme'
          initialValues={defaultData}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 20
          }}
        >
          <Form.Item valuePropName='color' name='colorPrimary' label='Primary color'>
            <ColorPicker />
          </Form.Item>
          <Form.Item name='borderRadius' label='Border Radius'>
            <InputNumber />
          </Form.Item>
          <Form.Item
            name='submit'
            wrapperCol={{
              offset: 8,
              span: 20
            }}
          >
            <Button type='primary'>Submit</Button>
          </Form.Item>
        </Form>
        <h3>Theme</h3>
        <Switch checkedChildren="light" unCheckedChildren="black" defaultChecked onClick={toggle}/>
      </Modal>
    </ConfigProvider>
  )
}