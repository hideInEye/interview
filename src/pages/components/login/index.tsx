import { Input, Form, FormInstance, Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'dva';

export default (props) => {
  const login = useSelector((state: any) => state.login);
  const { captcha } = login;
  const dispatch = useDispatch();
  const { submit, form } = props;

  const getCaptcha = () => {
    dispatch({
      type: 'login/getCaptchId',
    });
  };

  useEffect(() => {
    // getCaptcha();
  }, []);

  return (
    <Form
      form={form}
      labelAlign="left"
      colon={false}
      layout="vertical"
      onFinish={submit}
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[
          {
            required: true,
            validator: (rule, value) =>
              new Promise((resolve, reject) => {
                const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                if (!myreg.test(value)) {
                  reject(<div>请输入正确手机号</div>);
                } else {
                  resolve('');
                }
              }),
          },
        ]}
      >
        <Input size="large" placeholder="请输入账号" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        required
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password placeholder="请输入密码" size="large" />
      </Form.Item>
      <Form.Item
        label="验证码"
        name="captcha"
        required
        rules={[
          {
            required: true,
            message: '请输入验证码',
          },
        ]}
      >
        <Input
          style={{ marginRight: 10 }}
          size="large"
          placeholder="请输入验证码"
          suffix={
            captcha ? (
              <img
                style={{ height: '30px' }}
                title="点击切换验证码"
                src={captcha}
                alt="验证码"
                onClick={() => {
                  getCaptcha();
                }}
              />
            ) : (
              <span>正在获取验证码</span>
            )
          }
        />
      </Form.Item>
    </Form>
  );
};
