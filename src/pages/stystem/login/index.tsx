import { Form, FormInstance, Button } from 'antd';
import s from './index.less';
import Login from '@/pages/components/login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'dva';
import './index.less';
import { test } from '@/services/user';

export default () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm<FormInstance>();

  const submit = (values) => {
    dispatch({
      type: 'login/login',
    })
  };

  useEffect(() => {
    test()
  }, []);

  return (
    <div className={s.container}>
      <div className={s.login}>
        <Login form={form} submit={submit} />
        <div>
          <Button
            htmlType="submit"
            onClick={() => {
              form.submit();
            }}
          >
            登录
          </Button>
        </div>
      </div>
    </div>
  );
};
