import NavApp from './NavApp';
import Main from './Main'
import { Layout } from '@douyinfe/semi-ui';

export default function LayoutApp () {
  const { Sider, Content } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  };
  return (
    <Layout className="components-layout-demo">
      <Sider style={{ background: 'var(--semi-color-fill-2)' }}>
        <NavApp />
      </Sider>
      <Layout>
        {/*<Header style={commonStyle}>Header</Header>*/}
        <Content style={{ height: 300, lineHeight: '300px' }}>
          <Main />
        </Content>
        {/*<Footer style={commonStyle}>Footer</Footer>*/}
      </Layout>
    </Layout>
  );
}
