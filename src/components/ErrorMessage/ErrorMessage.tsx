import { FC } from 'react';
import Logo from '../Logo'
import errorLogo from '../../assets/error-img.png';
import { Alert } from 'antd';
import 'antd/es/alert/style/css';
import styles from './ErrorMessage.module.scss';


interface ErrorMessageProps {
  errorText: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ errorText }) => {
  return (
    <div className={styles['error_logo-wrapper']}>
      <Alert
        message={errorText}
        type="error"
        showIcon
        icon={<Logo logoSrc={errorLogo} />} //custom icon
      />
    </div>
  );
};

export default ErrorMessage;
