import { getProducts, deleteProducts } from '@/services/products';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    update(state, { payload: newState }) {
      return newState;
    },
  },
  effects: {
    *delete(action, { call, put }) {
      let res;
      yield call(async () => {
        res = await deleteProducts(action.payload);
      });
      if (res?.status === 'OK') {
        yield put({ type: 'update', payload: res.data });
      }
    },
    *getProducts(action, { call, put }) {
      const res = yield call(getProducts);
      if (res.status === 'OK') {
        yield put({ type: 'update', payload: res.data });
      }
    },
  }
};
