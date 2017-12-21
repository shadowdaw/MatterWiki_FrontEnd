import React from 'react';
import styles from './Loading.less'; 


class Loading extends React.PureComponent {
    render(){
    const { className} = this.props; 
      return <div className={className}>  
            <div className={styles.loading}>
                <div className={styles.bubblesItem}></div>
                <div className={styles.bubblesItem}></div>
                <div className={styles.bubblesItem}></div>
                <div className={styles.bubblesItem}></div>
                <div className={styles.bubblesItem}></div>
                <div className={styles.bubblesItem}></div>
                <div className={styles.bubblesItem}></div>
                <div className={styles.bubblesItem}></div>
            </div>
        </div>
    }; 
} 

  
export default Loading;