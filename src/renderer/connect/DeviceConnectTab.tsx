import { Card, Col, Row } from '@douyinfe/semi-ui';
import MobileCapture from '@/renderer/connect/MobileCapture';

export default function DeviceConnectTab ({ tabKey }) {
  console.log('DeviceConnectTab发生渲染:', tabKey);
  return (
    <>
      <Row>
        <Col span={8}>
          <div className="col-content">
            <MobileCapture tabKey={tabKey}/>
          </div>
        </Col>
        <Col span={8}>
          <div className="col-content">
            <Card bordered={false} >
              控件树
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <div className="col-content">
            <Card bordered={false} >
              元素信息
            </Card>
          </div>
        </Col>
      </Row>
    </>
  )
}
