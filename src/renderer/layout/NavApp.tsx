
import { Nav } from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { IconAvatar } from '@douyinfe/semi-icons-lab';
import { Link } from "react-router-dom";

export default function NavApp() {
  return (
    <Nav
      style={{ height: '100%' }}
      renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
        const routerMap = {
          deviceManager: "/"
        };
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={routerMap[props.itemKey]}
          >
            {itemElement}
          </Link>
        );
      }}
      items={[
        { itemKey: 'deviceManager', text: '设备管理', icon: <IconAvatar /> }
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
