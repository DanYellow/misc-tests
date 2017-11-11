import React from 'react';

import styles from './hello-message.css'
console.log('styles', styles);
import kitten from './kitten.jpg'

const HelloMessage = ({name}) => {
    return (
        <div className={styles.message}>
            <img src={kitten} />
            Hello {name}
        </div>
    )
}

export default HelloMessage;
  