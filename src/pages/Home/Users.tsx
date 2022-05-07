import { useState, useEffect, useCallback } from 'react';
import { useAccess } from 'umi';
import { Card, message, Table } from 'antd';
import { getUsers } from '@/services/users';

function Users() {
  const userColumns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const [dataSource, setDataSource] = useState();
  const handleGetUsers = useCallback(async () => {
    const res = await getUsers();
    if (res.status === 'OK') {
      setDataSource(res.data);
    } else {
      message.error('获取用户列表错误！');
    }
  }, []);
  useEffect(() => {
    handleGetUsers();
  }, [handleGetUsers]);
  return useAccess().isAdmin ? (
    <Card>
      <Table rowKey="id" columns={userColumns} dataSource={dataSource}></Table>
    </Card>
  ) : (
    <>您没有管理员权限</>
  );
}
Users.title = '用户管理';
export default Users;
