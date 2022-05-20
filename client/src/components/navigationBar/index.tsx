import { HeartOutlined, HomeOutlined, MailOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoginModal } from '../login-modal';
import styles from './styles.module.scss';

export const NavigationBar = () => {
  const navigate = useNavigate()
  const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(false);
  
  return <div className={styles.NavigationBar}>
      <HomeOutlined
      onClick={()=>navigate('/')}
      />
      <HeartOutlined
      onClick={()=>navigate('/favorites')}
      />
     <span
     onClick={()=> navigate('/upload') /* setIsLoginModalVisible(true) */}
     className={styles.upload}> <PlusCircleOutlined /></span>
      <MailOutlined
      onClick={()=>navigate('/messages')}
      />
    <UserOutlined
    onClick={()=>navigate('/user')}
    />
    {isLoginModalVisible && <LoginModal
    isVisible={isLoginModalVisible}
    setIsVisible={setIsLoginModalVisible}
    />}
  </div>;
};