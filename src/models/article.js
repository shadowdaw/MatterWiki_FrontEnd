import {queryArticleDetail}   from '../services/api'; 

export default {

  namespace: 'article',


  state: { 
    loading:false,
    detail:[]
  },

  effects: {
    *getArticleDetail({ payload }, { call, put }) {  // eslint-disable-line 
      yield put({
        type: 'changeLoading',
        payload: true,
      }); 
      const response = yield call(queryArticleDetail, payload);
      yield put({
        type: 'refreshState',
        payload: {detail:response.data},
      }); 
      yield put({
        type: 'changeLoading',
        payload: false,
      }); 
    },
  },

  reducers: {
    refreshState(state, action) {
      return { ...state, ...action.payload };
    },
    changeLoading(state, action) {
      return { ...state, loading:action.payload};
    },
  },

};
