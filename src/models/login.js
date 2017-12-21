import {dologin}   from '../services/api';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'login',


  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {  // eslint-disable-line 
      const response = yield call(dologin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: {status:'ok'},
      });
      // Login successfully 
      if (!response.error.error) {
        window.localStorage.setItem('userToken',response.data.token);
        window.localStorage.setItem('userId',response.data.user.id);
        window.localStorage.setItem('userEmail',response.data.user.token);
        yield put(routerRedux.push('/'));
      }
    },
    toLogin(state, action) {
      return put(routerRedux.push('/login'));
    }
  },

  reducers: {
    changeLoginStatus(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
