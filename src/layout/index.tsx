import { Layout } from 'antd';
import { Fragment } from 'react';

const { Header, Content, Footer } = Layout;

export default () => {
  return (
    <Fragment>
      <Header>header</Header>
      <Content>content</Content>
      <Footer>footer</Footer>
    </Fragment>
  );
};

