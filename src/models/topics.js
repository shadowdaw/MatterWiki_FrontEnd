import {queryTopic}   from '../services/api'; 

export default {

  namespace: 'topics',


  state: { 
    loading:false,
    topicList:[]
  },

  effects: {
    *getTopicList({ payload }, { call, put }) {  // eslint-disable-line 
      yield put({
        type: 'changeLoading',
        payload: true,
      }); 
      const response = yield call(queryTopic, payload);
      yield put({
        type: 'refreshTopics',
        payload: {topicList:response.data},
      }); 
      yield put({
        type: 'changeLoading',
        payload: false,
      }); 
    },
  },

  reducers: {
    refreshTopics(state, action) {
      return { ...state, ...action.payload };
    },
    changeLoading(state, action) {
      return { ...state, loading:action.payload};
    },
  },

};
