import { Effect, Reducer } from 'umi';
import { getProducts, deleteProduct } from '@/services/products';

export interface ProductsModelState {
  [index: number]: object;
}

export interface ProductsModelType {
  namespace: 'products';
  state: ProductsModelState;
  reducers: {
    update: Reducer<ProductsModelState>;
  };
  effects: {
    get: Effect;
    delete: Effect;
  };
}

const ProductsModel: ProductsModelType = {
  namespace: 'products',
  state: [],
  reducers: {
    update(_, { payload: newState }) {
      return newState;
    },
  },
  effects: {
    // effect 的第一个参数为 action
    *delete({ payload }, { call, put }) {
      const res = yield call(deleteProduct, payload);
      if (res?.status === 'OK') {
        yield put({ type: 'update', payload: res.data });
      }
    },
    *get(_, { call, put }) {
      const res = yield call(getProducts);
      if (res.status === 'OK') {
        yield put({ type: 'update', payload: res.data });
      }
    },
  },
};

export default ProductsModel;
