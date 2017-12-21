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
            type: 'index/getTopicList',
            payload: {},
        });
    }
    topicSelect(id){
        this.props.dispatch({
            type: 'index/getArticles',
            payload: {topicId:id},
        });

    }
    render() {
      const {index} = this.props; 
      const {topicList,topicloading}=index
        return (topicloading?<Loading/>:<div > 
          {topicList.map(topic => (
              <div key={topic.id} href="#" className={styles.topicItem} onClick={(e) => this.topicSelect(topic.id,e)}>
                <div className={styles.topicItemTitle}>
                  <span>{topic.name}</span>
                  <div className={styles.tail}></div>
                </div>
              </div>
          ))}
        </div>)
    }
}