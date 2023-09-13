import { Router, Route, Redirect, Switch } from 'react-router';
import Login from '@/pages/stystem/login/index';
export default (props: any) => {
  return (
    <Router history={props.history}>
      <Route path="/" component={Login} />
      {/* <Redirect to="/" /> */}
    </Router>
  );
};
