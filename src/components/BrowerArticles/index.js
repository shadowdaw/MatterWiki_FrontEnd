import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import  Loading from '../Loading';


@connect(state => ({
    index: state.index,
    }))
export default class Topics extends Component {

    componentWillMount() {
        this.props.dispatch({
            type: 'index/getArticles',
            payload: {},
        });
    }
    render() {
      const {index} = this.props; 
      const {articleList,articleloading}=index
      if(articleloading)
        return <div className={styles.articles}><Loading/></div>;
      if(articleList.length<1) {
        return <div className={styles.articles}><p className="help-block center-align">暂无文章</p></div>;
      }
      else {
        return(<div className={styles.articles}> 
            {articleList.map(article => (
                <div key={article.id} className={styles.articleItem}>
                  <div className={styles.articleItemTitle}>
                    <span>{article.title}</span>
                  </div>
                  <div className={styles.articleItemDesp}>
                    最后更新: {article.updated_at}
                  </div> 
              </div>
            ))}
          </div>);
      } 
    }
}