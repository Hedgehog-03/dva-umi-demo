export default function access(initialState: { role: string }) {
  const { role } = initialState;

  return {
    isLogin: role === 'admin' || role === 'zwj',
    isAdmin: role === 'admin',
  };
}
