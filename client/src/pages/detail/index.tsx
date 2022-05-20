import { ArrowLeftOutlined, EnvironmentOutlined, HeartOutlined, ManOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss'

export const DetailsPage = () => {
  const navigate =  useNavigate()
  const more = [
    {
      id:1, key: 'Age', value:3
    },

    {
      id:3, key:'color', value:'grey'
    },
  ]

  return <div className={styles.details}>
      <img
      src='https://www.austrovet.com/wp-content/uploads/2020/10/gato-peque%C3%B1o.jpg'
      alt='car'
      />
      <span
      onClick={()=>navigate('/')}
      className={styles.detailsBack}>
      <ArrowLeftOutlined />
      </span>
     <span className={styles.detailsHeart}>
     <HeartOutlined />
     </span>
   <div className={styles.detailsInfo}>
   <h1>Pedro</h1>
   <div className={styles.detailsInfoTop}>
   <p>
     <span>
     <EnvironmentOutlined />
     </span>
     Miraflores
   </p>
   <div>
     Macho 
     <ManOutlined />
   </div>
   </div>
   <div className={styles.detailsInfoMore}>
  {
    more.map(detail=>(
      <div key={detail.id} className={styles.detailsInfoMoreTag}>
        <strong>{detail.key} </strong>
        <p>{detail.value}</p>
      </div>
    ))
  }
   </div>
   <div className={styles.detailsInfoDescription}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore, quam itaque vel 
        sequi magni aut 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur provident deleniti illo nostrum numquam sequi voluptatem autem totam optio error voluptate officiis, iste dicta quisquam, odit modi illum obcaecati.
        </p>
        
   </div>
    <div className={styles.detailsInfoCTA}>
      <button>
        Adoptar
      </button>
      <div>
      <ShareAltOutlined />
      </div>
    </div>
   </div>


  </div>;
};
