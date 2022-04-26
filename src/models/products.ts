import { Effect, Reducer } from 'umi';
import { getProducts, deleteProducts } from '@/services/products';

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
    getProducts: Effect;
    delete: Effect;
  };
}

const ProductsModel: ProductsModelType = {
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
  },
};

export default ProductsModel;
