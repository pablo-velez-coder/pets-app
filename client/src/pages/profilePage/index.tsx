import { Calendar } from '../../components/Calendar';
import { NavigationBar } from '../../components/navigationBar';
import styles from './styles.module.scss';

export const ProfilePage = () => {
  return <div className={styles.ProfilePage}>
   <div className={styles.ProfilePageAvatar}>
       <img src='https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg' 
       alt='profile'
       />
    </div>
   <div>
       <h1>Mario</h1>
       <p>mario@gmail.com</p>
    </div>
    <div>
<Calendar />
    </div>
    <NavigationBar />
  </div>;
};