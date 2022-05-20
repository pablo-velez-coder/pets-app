import { HeartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss'

interface Props{
    img:string;
    name:string;
    location:string;
    kind?:string;
    id:number;
}

export const PetCard:React.FC<Props> = ({img, location, id}) => {

   const navigate =  useNavigate()

  return <div
  className={styles.petCard}
  >
       <img 
       onClick={()=>navigate(`/cat/${id}`)}
       src={img} alt="pet" />
       <span className={styles.petCardHeart}>
           <HeartOutlined />
       </span>
       <span>
           {location}
       </span>
  </div>;
};
