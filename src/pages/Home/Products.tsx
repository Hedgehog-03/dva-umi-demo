import { useState, useEffect } from 'react';
import { connect } from 'umi';
import moment from 'moment';
import { Card, Table, Popconfirm, Button } from 'antd';

function Products({ dispatch, products }) {
  const [handledProducts, setHandledProducts] = useState([]);
  const productColumns = [
    {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '生产日期',
      dataIndex: 'startTime',
      key: 'startTime',
      sorter: (a, b) => moment(a.startTime).valueOf() - moment(b.startTime).valueOf() 
    },
    {
      title: '保质期',
      dataIndex: 'expiration',
      key: 'expiration',
      render: (val) => `${val}天`,
      sorter: (a, b) => a.expiration - b.expiration
    },
    {
      title: '操作',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>删除</Button>
          </Popconfirm>
        );
      },
    },
  ];
  const onDelete = (id: number) => {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: 'products/getProducts' });
  }, [])
  useEffect(() => {
    const newProducts = products.map((item) => ({
      ...item,
      startTime: moment(item.startTime).format('YYYY/MM/DD'),
    }));
    setHandledProducts(newProducts);
  }, [products]);
  return (
    <Card>
      <Table
        rowKey="id"
        columns={productColumns}
        dataSource={handledProducts}
      />
    </Card>
  );
}
Products.title = '产品管理';
export default connect(({ products }) => ({
  products,
}))(Products);
