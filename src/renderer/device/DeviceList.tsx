import { Button, Table } from '@douyinfe/semi-ui';
import Column from '@douyinfe/semi-ui/lib/es/table/Column';

export default function DeviceList({ deviceList }) {

  return (
    <Table dataSource={deviceList} pagination={false}>
      <Column title="设备名" dataIndex="deviceName" key="deviceName" />
      <Column title="设备ID" dataIndex="deviceId" key="deviceId" />
      <Column title="系统版本" dataIndex="osVersion" key="osVersion" />
      <Column title="" dataIndex="operate" key="operate" render={() => <Button>连接设备</Button>} />
    </Table>
  );
}
