import { EnvironmentOutlined, RightOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { NavigationBar } from '../../components/navigationBar';
import { PetCard } from '../../components/petCard';
import styles from './styles.module.scss'

export const Home = () => {
    const navigate = useNavigate()
    const pets = [
        {id:1, kind:'cats',color:'#5C68FF', path:'/cats'},
        {id:2,kind:'dogs', color:'#87cfba', path:'/dogs'}
    ]
    const cats = [
        {id:2,name:'juan',img:'https://www.austrovet.com/wp-content/uploads/2020/10/gato-peque%C3%B1o.jpg',
        location:'San borja',
        genre:'female'},
        {id:3,name:'sergio',
        location:'Miraflores',
        img:'https://www.feelcats.com/wp-content/uploads/2018/07/como-educar-a-un-gato.jpg', genre:'male'},
    ]
    const dogs = [
        {id:3,name:'sergio',
        genre:'female',
        location:'San Isidro',
        img:'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/609cf90e5bafe89d454761e7/cachorro-jack-russell_0.jpg'},
        {id:2,name:'jiji',
        genre:'male',
        location:'Jesús María',
        img:'data:image/jpeg;base64,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'},
    ]

  return <div className={styles.home}>
     
      <div className={styles.pet}>
          {
              pets.map(pet=>(
                  <div
                  onClick={()=>navigate(pet.path)}
                  key={pet.id}
                  style={{backgroundColor:pet.color}}
                  className={styles.petType}>
                     <p> {pet.kind}</p>
                  </div>
              ))
          }
      </div>
      <div>
          <div className={styles.closeToYou}>
          <h2>Cerca de ti
             
          </h2>
          <EnvironmentOutlined />
          </div>
          <div className={styles.catsContainer}>
              <div className={styles.headerMore}>
              <h3>Gatos</h3>
              <RightOutlined
              onClick={()=>navigate('/cats')}
              />
              </div>
             
              <div className={styles.cats}>
          {
              cats.map(cat=>(
                <PetCard key={cat.id} {...cat}  />
              ))
          }
              </div>
          </div>
          <div>
          <div className={styles.headerMore}>
              <h3>Perros</h3>
              <RightOutlined
              onClick={()=>navigate('/dogs')}
              />
              </div>
              <div className={styles.cats}>
          {
              dogs.map(dog=>(
                      <PetCard key={dog.id} {...dog}  />
              ))
          }
              </div>
          </div>
        
      </div>
      <NavigationBar />
  </div>;
};
