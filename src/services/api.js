import request from '../utils/request';

export function dologin(params) {
  return request('/api/authenticate', {
    method: 'POST',
    body: params,
  });
}

export function queryTopic() {
  return request('/api/topics', {});
}

export function queryArticles(params) {
  if (params.topicId == null) {
    return request('/api/articles', {});;
  } else {
    return request('/api/topic/' + params.topicId + '/articles', {});
  }
}

export function updateArticle(params) { 
    return request('/api/articles/', {method:'PUT',body:params});
}
export function saveArticle(params) { 
    return request('/api/articles/', {method:'POST',body:params});
}
 
export function queryArticleDetail(params) { 
    return request(`/api/articles/${params.id}`, {}); 
}

