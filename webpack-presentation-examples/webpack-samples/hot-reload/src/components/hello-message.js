import React from 'react';

import styles from './hello-message.css'
import kitten from './kitten.jpg'

const HelloMessage = ({name}) => {
    return (
        <div className={styles.message}>
            <img src={kitten} width="150" />
            Hello {name}
        </div>
    )
}

export default HelloMessage;
  