import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

interface HeaderProps{
  user?:any
}

export const Header:React.FC<HeaderProps> = ({user}) => {
  const navigate =  useNavigate()
  return <div className={styles.Header}>
         <div
         onClick={()=>navigate('/')}
         >
         <h2>Search
          <span>Pet</span>
        {user &&<>  <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
            <p>{user.displayName}</p></>}
      </h2>
      </div>
      <div className={styles.HeaderTop}>
          <div className={styles.HeaderTopSearch}> 
          <input placeholder="Search a pet" />
            <SearchOutlined />
          </div>
      </div>
  </div>;
};