import React from 'react'; 
import styles from './index.less';
import classNames from 'classnames';


class Square extends React.PureComponent {
    render(){ 
    const {className} = this.props;
    const squareClass = classNames(className, styles.square); 
      const points=function(){
        let domarr=[];
        for (var i = 0; i < 273 ; i++) {
            domarr.push(<div key={i} className={styles.point}></div>);
        }
        return domarr;
      }
      return (<div className={squareClass}> 
                {points()}
            </div>)
    }; 
} 

  
export default Square;
