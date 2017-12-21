import {queryTopic,queryArticles}   from '../services/api'; 

const bgMap=['normal','mask','eclipse'];
let firstLoad=false;


export default {

  namespace: 'index',
  state: { 
    topicloading:false,
    articleloading:false,
    topicList:[],
    articleList:[],
    theme:'eclipse'
  },

  effects: {
    *getTopicList({ payload }, { call, put }) {  // eslint-disable-line 
      yield put({
        type: 'changeTopicLoading',
        payload: true,
      }); 
      const response = yield call(queryTopic, payload);
      yield put({
        type: 'refreshState',
        payload: {topicList:response.data},
      }); 
      yield put({
        type: 'changeTopicLoading',
        payload: false,
      }); 
    },
    *getArticles({ payload }, { call, put }) {  // eslint-disable-line 
      yield put({
        type: 'changeArticleLoading',
        payload: true,
      });  
      const response = yield call(queryArticles, payload);
      yield put({
        type: 'refreshState',
        payload: {articleList:response.data},
      }); 
      yield put({
        type: 'changeArticleLoading',
        payload: false,
      });
      if(firstLoad){
        yield put({
          type: 'refreshBackground'
        }); 
      }else{
        firstLoad=true;
      }
    },
  },

  reducers: {
    refreshState(state, action) {
      return { ...state, ...action.payload };
    },
    refreshBackground(state, action) {
      function getRandomIdx(){
        let randomidx=Math.floor(Math.random()*bgMap.length)
        return state.theme===bgMap[randomidx]?getRandomIdx():randomidx;
      } 
      return { ...state, theme:bgMap[getRandomIdx()] };
    },
    changeTopicLoading(state, action) {
      return { ...state, topicloading:action.payload};
    },
    changeArticleLoading(state, action) {
      return { ...state, articleloading:action.payload};
    }
  },

};
