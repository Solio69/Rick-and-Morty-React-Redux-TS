import React, { FC } from 'react';
import { Spin } from 'antd';
import 'antd/es/spin/style/css';


const AntLoader: FC = () => {
  return (
    <Spin size="large" />
  );
};

export default AntLoader;
