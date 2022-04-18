// 该配置是一个 async 的 function。会在整个应用最开始执行，返回值会作为全局共享的数据。
// Layout 插件、Access 插件以及用户都可以通过 useModel('@@initialState') 直接获取到这份数据。
export const getInitialState = async () => {
  const data = {
    role: sessionStorage.getItem('role'),
  };
  return data;
};
