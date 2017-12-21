import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import Loading from '../components/Loading';
import Square from '../components/SquarePoints';
import Topics from '../components/BrowerTopics';
import Articles from '../components/BrowerArticles';


@connect(state => ({
    index: state.index,
    }))
export default class IndexPage extends Component {
        state = {
            mounted: false
        }
        componentWillMount() {
          this.setState({mounted:true})
        }
        render() {
            const {index} = this.props;
            const {theme} = index;
            const className=`background ${theme}`;
            return <div className={styles.mainarea}>
                    <div className={styles.topicList}>
                      <Topics/>
                    </div>
                    <div className={styles.articleList}>
                      <Articles/>
                    </div>
                    <div className={className}>
                      <div className={styles.orange}></div>
                      <div className={styles.blue}></div>
                      <Square className={styles.squareList}/>
                    </div>
                  </div>
        }
    }