import React from 'react';
import styles from 'classnames'
import { Button, DatePicker } from 'antd';


const Monitor = () => {
  return (
    <main className={styles.wrapper}>
      <Button type={'primary'}>Primary button</Button>
      <DatePicker placeholder={'selected date'} />
    </main>
  )
};

export default Monitor;