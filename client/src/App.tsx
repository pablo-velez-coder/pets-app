import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import { Home } from './pages/home';
import { DetailsPage } from './pages/detail';
import { Header } from './components/header';
import { UploadPage } from './pages/uploadPage';
import { PetsPage } from './pages/petsPage';
import { FavoritesPage } from './pages/favorites';
import { ProfilePage } from './pages/profilePage';
import './App.css';

const App = () => {

  const cats = [
    {id:1,name:'juan',img:'https://www.austrovet.com/wp-content/uploads/2020/10/gato-peque%C3%B1o.jpg',
    location:'San borja',
    genre:'female'},
    {id:2,name:'sergio',
    location:'Miraflores',
    img:'https://www.feelcats.com/wp-content/uploads/2018/07/como-educar-a-un-gato.jpg', genre:'male'},
    {id:3,name:'Maya',
    location:'San isidro',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfURA3c0WWBq-JcWPRmbCrtBIHjxhrZH5AA&usqp=CAU', genre:'male'},
    {id:4,name:'Dieguito',
    location:'Barranco',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8J6rOP6ykM1Px4BQrRdl4A_Z6qFjCMibsw&usqp=CAU'
  }
]

const dogs = [
  {id:1,name:'sergio',
  age:4,
  genre:'female',
  location:'San Isidro',
  img:'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/609cf90e5bafe89d454761e7/cachorro-jack-russell_0.jpg'},
  {id:2,name:'jiji',
  genre:'male',
  age:2,
  location:'Jesús María',
  img:'https://adnpais.com/fotos/archivo/14_201930172239.jpg'},
]
const [user, setUser] = useState(null);

useEffect(() => {
  const getUser = () => {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((response) => {
        console.log('obj',response);
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log('obj',resObject);
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getUser();
}, []);

  return <div>
     <Header user={user} />
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:id" element={<DetailsPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/cats" element={<PetsPage type="cat" pets={cats} />} />
        <Route path="/dogs" element={<PetsPage type="dog" pets={dogs} />} />
      </Routes>
  </div>

}

export default App;
