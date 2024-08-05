import { TabPane, Tabs } from '@douyinfe/semi-ui';
import DeviceConnectTab from '@/renderer/connect/DeviceConnectTab';
import { useState } from 'react';

export default function ConnectManager() {

  const state = {
    tabList: [
      { tab: 'HNNTH', itemKey: '00008110-001E1C843E61801E', text: 'HNNTH', closable: true },
      { tab: 'qiuzilin的iPhone (2)', itemKey: 'AKRSVB1731011612', text: 'qiuzilin的iPhone (2)', closable: true },
    ],
  };

  const connects = {
    '00008110-001E1C843E61801E': {
      name: 'qiuzilin的iPhone (2)',
      screenShot: '',
      nodeTree: {}
    },
    'AKRSVB1731011612': {

    }
  }

  const [curTab, setCurTab] = useState()

  return (
    <Tabs type="card" onChange={ (tabKey) => {
      console.log('>>>> change tab key:', tabKey);
      setCurTab(tabKey)
    } }>
      {state.tabList.map(t => (
        <TabPane closable={t.closable} tab={t.tab} itemKey={t.itemKey} key={t.itemKey}>
          <DeviceConnectTab tabKey={curTab}/>
        </TabPane>
      ))}
    </Tabs>
  );
}
