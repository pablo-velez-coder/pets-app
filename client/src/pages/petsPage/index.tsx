import { HeartOutlined, ManOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { NavigationBar } from '../../components/navigationBar';
import styles from './styles.module.scss';
interface PetsProps{
    type:string;
    pets:any[]
}

export const PetsPage:React.FC<PetsProps> = ({type, pets}) => {
    const navigate =  useNavigate()
  return <div className={styles.PetsPage}>
      <h1>{type.charAt(0).toUpperCase()+type.slice(1)+'s'}</h1>
   <div className={styles.PetsPageList}>
   {
        pets.map(x=>(
            <div
            onClick={()=>navigate(`/${type}/${x.id}`)}
            className={styles.PetsPageCard}
            key={x.id}>
             <div  className={styles.PetsPageCardImage}>
             <img alt='pet' src={x.img} />
             <span className={styles.PetsPageCardImageHeart}>
     <HeartOutlined />
     </span>
             </div>
              <div  className={styles.PetsPageCardInfo}>
                  <h3>  {x.name}
                  <span>
                  <ManOutlined />
                  </span>
                  </h3>
                  <p>{x.location}</p>
<div className={styles.PetsPageCardInfoAge}>
    3 meses
</div>
              </div>
            </div>
        ))
    }
   </div>
   <NavigationBar />
  </div>;
};