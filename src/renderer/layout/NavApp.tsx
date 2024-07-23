
import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { IconAvatar } from '@douyinfe/semi-icons-lab';

export default function NavApp() {
  return (
    <Nav
      style={{ height: '100%' }}
      items={[
        { itemKey: 'user', text: '设备管理', icon: <IconAvatar /> }
      ]}
      header={{
        logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />,
        text: 'UI Inspector'
      }}
      footer={{
        collapseButton: true,
      }}
      onSelect={data => console.log('trigger onSelect: ', data)}
      onClick={data => console.log('trigger onClick: ', data)}
    />
  );
}
