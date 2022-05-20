import { Modal } from 'antd';

import styles from './styles.module.scss';

interface LoginModalProps{
    isVisible:boolean; 
    setIsVisible:(val:boolean)=>void; 
}

export const LoginModal:React.FC<LoginModalProps> = ({isVisible,setIsVisible}) => {
  const google = () =>{
    window.open('http://localhost:5000/auth/google',"_self")
  }
  return <Modal
  
  title="Login"
  centered
  visible={isVisible}
/*   onOk={() => setIsVisible(false)}
  onCancel={() => setIsVisible(false)} */
>
  <div className={styles.LoginModal}>
    <button className={styles.LoginModalFacebook}>
    Facebook
    </button>
    <button
    onClick={google}
    className={styles.LoginModalGoogle}>
        Google
    </button>
  </div>
</Modal>
};