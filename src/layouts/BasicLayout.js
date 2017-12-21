import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Link,Route, Redirect, Switch } from 'dva/router'; 
import NotFound from '../routes/Exception/404';
import styles from './BasicLayout.less';

const { Content } = Layout;
 

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
  } 
  handleLogout() {
  } 
  render() {
    const {
      currentUser, collapsed, fetchingNotices, notices, getRouteData, navData, location, dispatch,
    } = this.props;

    const layout = (
      <div  className={styles.container}>
        
          {/*<nav className="navbar container-fluid"> 
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                    <Link to='home' className="navbar-brand">
                      <img src="/logo.png"></img>失眠的宇宙‘s Wiki
                    </Link>
                </div> 
                {(window.localStorage.getItem('userToken')) ?
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    {(window.localStorage.getItem('userId') == 1) ?
                <li><Link to="admin" className="">管理员
                        </Link>
                      </li> :
                ''
            }
                   <li><Link to="article/new" className="">新条目
                    </Link>
                  </li>
                  <li>
                    <a href="" onClick={this.handleLogout}>登出</a>
                  </li>
                  </ul> 
                </div>
            : <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/login" className="">登录
                    </Link>
                  </li>
                  </ul> 
                </div>}
            </nav>*/}
            <div className={styles.mainbody}>
              <Switch>
                {
                  getRouteData('BasicLayout').map(item =>
                    (
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

    return  layout
  }
}

export default connect(state => ({ 
}))(BasicLayout);
