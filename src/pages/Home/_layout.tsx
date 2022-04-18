import { useState } from 'react';
import { history, IRouteComponentProps, useModel } from 'umi';
import { Layout, Menu, Breadcrumb, Icon, Input, Avatar, Button, message } from 'antd';
import { logOut } from '@/services/users';
import styles from './_layout.less';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function LayoutDemo(props: IRouteComponentProps) {
  const { setInitialState } = useModel('@@initialState');
  const [subBreadVal, setSubBreadVal] = useState('');

  const onMenuClick = ({ key }) => {
    history.push(`/home/${key}`);
    sessionStorage.setItem('active_menu', key);
    if (key === 'welcome') {
      setSubBreadVal('欢迎');
    } else if (key === 'products') {
      setSubBreadVal('产品管理');
    } else if (key === 'users') {
      setSubBreadVal('用户管理');
    }
  };
  const handleLogOut = async () => {
    const res = await logOut();
    if (res.status === 'OK') {
      setInitialState({ role: '' });
      sessionStorage.clear();
      message.success('退出登录成功！');
    }
  };
  return (
    <Layout className={styles['out-layout']}>
      <Header className={styles.header}>
        <Search placeholder="input search text" className={styles.search} />
        <Avatar size="small" icon="user" />
        <Button
          type="danger"
          size="small"
          onClick={handleLogOut}
          style={{ marginLeft: '10px' }}
        >
          退出登录
        </Button>
      </Header>
      <Layout>
        <Sider collapsible theme="light">
          <Menu
            theme="light"
            defaultSelectedKeys={sessionStorage.getItem('active_menu') || 'welcome'}
            mode="inline"
            onClick={onMenuClick}
          >
            <Menu.Item key="welcome">
              <Icon type="smile" />
              <span>欢迎</span>
            </Menu.Item>
            <Menu.Item key="products">
              <Icon type="desktop" />
              <span>产品管理</span>
            </Menu.Item>
            <Menu.Item key="users">
              <Icon type="user" />
              <span>用户管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className={styles.content}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item key="1">主页</Breadcrumb.Item>
              <Breadcrumb.Item key="2">{subBreadVal}</Breadcrumb.Item>
            </Breadcrumb>
            {props.children}
          </Content>
          <Footer className={styles.footer}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
LayoutDemo.wrappers = ['@/wrappers/auth'];
export default LayoutDemo;
