import React, { FC } from 'react';
import { Spin } from 'antd';
import 'antd/es/spin/style/css';


const LoadingIndicator: FC = () => {
  return (
    <Spin size="large" />
  );
};

export default LoadingIndicator;
