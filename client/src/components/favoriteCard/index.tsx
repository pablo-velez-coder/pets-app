import { CloseOutlined, ManOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export const FavoriteCard = () => {
  return <div className={styles.Overlay}>
      
      <div className={styles.FavoriteCard}>
          <img src='https://www.austrovet.com/wp-content/uploads/2020/10/gato-peque%C3%B1o.jpg'
    alt='imgg'
    />
    <CloseOutlined />
    <h1>Pedro</h1>
    <div className={styles.genre}>
        <ManOutlined />
    </div>
      </div>
  </div>;
};