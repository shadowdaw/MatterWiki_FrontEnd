import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, message } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Link, Route, Redirect, Switch } from 'dva/router';
import NotFound from '../routes/Exception/404';
import styles from './BasicLayout.less';
import classNames from 'classnames';

const {Content} = Layout;


class BasicLayout extends React.PureComponent {
    state = {
        loading: true,
        scrolling:false
    }
    handleLogout() {
        this.setState({
          loading:true
        },function(){
          window.localStorage.setItem('userToken', '');
          window.localStorage.setItem('userId', '');
          window.localStorage.setItem('userEmail', '');
          message.success("成功登出账号");
          this.setState({
            loading:false
          })
        })
    }
    componentWillMount(){
      let scrolltop=0;
      let that=this;
      window.onscroll = function(e){
        var tempscrolltop=document.documentElement.scrollTop||document.body.scrollTop;
        if(tempscrolltop>scrolltop && tempscrolltop>60){ 
          that.setState({scrolling:true})
        }else{
          that.setState({scrolling:false})
        }
        scrolltop=tempscrolltop;
      } 
    }
    render() {
        const {getRouteData,dispatch} = this.props;
        const {loading,scrolling} =this.state; 
        const navbarClass = classNames(scrolling?'scroll':'', styles.navbar);
        const layout = (
        <div  className={styles.container}>
          <nav className={navbarClass}> 
                <div className={styles.navbarBody}> 
                <div className={styles.navbarHeader}> 
                    <Link to='/home' className={styles.navbarBrand}>
                      <img src="/logo.png" className={styles.logo}></img>失眠的宇宙‘s Wiki
                    </Link>
                </div> 
                {loading?'':(window.localStorage.getItem('userToken')) ?
            <div className={styles.navbarbtns}>
                          <ul className="nav navbar-nav navbar-right">
                            {(window.localStorage.getItem('userId') == 1) ?
                <li><Link to="admin" className="">管理员</Link></li> : ''
            }
                    <li><Link to="article/new" className="">新条目</Link></li>
                    <li><a onClick={(e) => this.handleLogout()}>登出</a></li>
                  </ul> 
                </div>
            : <div className={styles.navbarbtns}>
                    <ul className="nav navbar-nav navbar-right">
                      <li  className={styles.navbarbtn}>
                        <Link to="/login">登录
                        </Link>
                      </li>
                    </ul> 
                </div>}
                </div>
            </nav>
            <div className={styles.mainbody}>
              <Switch>
                {
        getRouteData('BasicLayout').map(item => (
            <Route
            exact={item.exact}
            key={item.path}
            path={item.path}
            component={item.component}
            />
        )
        )
        }
                <Redirect exact from="/" to="/home" />
                <Route component={NotFound} />
              </Switch>
            </div>  
      </div>
        );

        return layout
    }
}

export default connect(state => ({
}))(BasicLayout);
