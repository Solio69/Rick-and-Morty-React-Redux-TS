import React, { FC } from 'react';
import { Input } from 'antd';
import styles from './SearchInput.module.scss';
import 'antd/es/input/style/css';


const SearchInput:FC = () => {
  const onChange = (event:any) =>{
    console.log(event.target.value)
  }
  return (
    <div className={styles.SearchInput}>
      <Input placeholder="Character `s name" onChange={onChange} />
    </div>
  );
};

export default SearchInput;
