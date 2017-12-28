import React, { Component } from 'react';
import { connect } from 'dva'; 
import styles from './article.less';
import Loading from '../../components/Loading';
import { Link } from 'dva/router';


@connect(state => ({
    article: state.article,
    }))
export default class Article extends Component {
        state = {
            mounted: false
        }
        componentWillMount() {
          this.props.dispatch({
              type: 'article/getArticleDetail',
              payload: {id:this.props.match.params.id},
          });
        }
        render() { 
                const {article} = this.props; 
                const {detail,loading}=article; 
                if (loading){
                    return <Loading/>;
                }else if (detail && detail.topic && detail.user){
                    return (<div  className={styles.mainarea}> 
                              <div >
                                  <h1 className={styles.title}>{detail.title}
                                  <div className="pull-right"> 
                                    {(this.state.isguest) ? '' : <Link to={'/article/edit/' + detail.id}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>}
                                    <Link to={'/article/history/' + detail.id}><i className="fa fa-history" aria-hidden="true"></i></Link>
                                    {(window.localStorage.getItem('userId') == 1) ? <i className="fa fa-trash-o" onClick={this.deleteArticle}></i>
                                            : ''}
                                  </div>
                                  </h1>
                                  <div className={styles.articleMeta}>
                                    分类 : <span className={styles.articleTopic}>{detail.topic.name}</span>
                                    <span className={styles.articleUpdateTime}>最后更新:  {detail.updated_at} By:  {detail.user.name} ({detail.user.about})</span>
                                </div>
                              </div>
                              <div className="markdown-body"
                                  dangerouslySetInnerHTML={{__html: detail.body}}>
                              </div>
                            </div> 
                    );
                }else{
                    return <Loading/>;
                }
        }
    }