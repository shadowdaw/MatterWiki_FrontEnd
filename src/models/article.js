import {queryArticleDetail,updateArticle,saveArticle}   from '../services/api'; 
import { routerRedux } from 'dva/router';
import { message } from 'antd';

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
    *saveArticle({ payload }, { call, put }) {  // eslint-disable-line 
      yield put({
        type: 'changeLoading',
        payload: true,
      }); 
      const response = yield call(saveArticle, payload);
      if(!response.error.error){
        message.success('新建Wiki成功!')
        yield put(routerRedux.push(`/article/${response.data.id}`));
      }
      yield put({
        type: 'changeLoading',
        payload: false,
      }); 
    },
    *updateArticle({ payload }, { call, put }) {  // eslint-disable-line 
      yield put({
        type: 'changeLoading',
        payload: true,
      }); 
      const response = yield call(updateArticle, payload);
      if(!response.error.error){
        message.success('保存修改成功!')
        yield put(routerRedux.push(`/article/${response.data.article_id}`));
      }
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
