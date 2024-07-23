import { Card, Col, Row } from '@douyinfe/semi-ui';
import DeviceList from '@/renderer/device/DeviceList';

export default function DeviceManager() {
  const androidDevices = [
    {
      key: '1',
      deviceName: 'HNNTH',
      deviceId: 'AKRSVB1731011612',
      osVersion: '14',
      platform: 'Android'

    }
  ];
  const iosDevices = [
    {
      key: '1',
      deviceName: 'qiuzilin的iPhone (2)',
      deviceId: '00008110-001E1C843E61801E',
      osVersion: '16.6',
      platform: 'iOS'

    }
  ];
  return(
    <div
      style={{
        padding: 12
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title='Android设备' bordered={true} >
            <DeviceList deviceList={ androidDevices }/>
          </Card>
        </Col>
        <Col span={24}>
          <Card title='iOS设备' bordered={true} >
            <DeviceList deviceList={ iosDevices }/>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
