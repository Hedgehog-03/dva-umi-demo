import { history, useModel } from 'umi';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { login } from '@/services/users';
import styles from './index.less';

function Login({ form }) {
  const { getFieldDecorator, getFieldsValue } = form;
  const { setInitialState } = useModel('@@initialState');
  const onSubmit = (e) => {
    e.preventDefault();
    form.validateFields(async (err) => {
      const { username, password } = getFieldsValue();
      if (!err) {
        const res = await login({ username, password });
        if (res.status === 'OK') {
          setInitialState({ role: res.role });
          sessionStorage.setItem('role', res.role);
          history.push('/home/welcome');
          message.success(res.msg);
        } else {
          message.error(res.msg);
        }
      } else {
        message.warn('用户名或密码不能为空！');
      }
    });
  };
  return (
    <div className={styles.container}>
      <Form
        name="normal_login"
        className={styles['login-form']}
        onSubmit={(e) => onSubmit(e)}
      >
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              allowClear
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
          <a className={styles['login-form-forgot']} href="">
            忘记密码
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className={styles['login-form-button']}
          >
            登录
          </Button>
          Or <a href="">现在注册</a>
        </Form.Item>
      </Form>
    </div>
  );
}
Login.title = '登录';
export default Form.create()(Login);
