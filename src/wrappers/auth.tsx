import { Redirect, IRouteComponentProps, useAccess } from 'umi';

function Auth(props: IRouteComponentProps) {
  const { isLogin } = useAccess();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/" />;
  }
}

export default Auth;
