import {useState, useEffect} from 'react';
import {  Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from './../Header/Header'
import RegistrationForm from './../Registration/RegistrationForm';
import LoginForm from './../Login/LoginForm';
import Cookies from 'js-cookie';
import LandingPage from './../Landing/LandingPage';
import AnimalForm from './../Animals/AnimalForm';
import AnimalList from './../Animals/AnimalList';
import ProfileForm from './../Profile/ProfileForm';
import AnimalCard from './../PetFinder/animal-card';

function App(props) {
  const [admin, setAdmin] = useState({
    username:'',
    email:'',
    is_staff: null,
  });

  const [profile, setProfile] = useState({
    alias:'',
    image: null,
  })

  const [user, setUser] = useState({
    username:'',
    password:'',
  })

  const history = useHistory();
  

useEffect(() =>  {
  const checkAuth = async () => {
    const response = await fetch('/rest-auth/user/');
    if(!response.ok) {
      setUser({isAuth: false});
    } else {
      const data = await response.json();
      setUser({isAuth: true, isAdmin: data.is_staff})
    }
  }
  checkAuth();
}, [history]);

async function handleLogoutSubmit(event) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'X-CSRFToken':Cookies.get('csrftoken'),
    },
    body: JSON.stringify(user),
  };
  const response = await fetch('/rest-auth/logout/', options);
  if (!response) {
    console.log(response);
  } else {
    console.log(response);
    const data = await response.json();
    Cookies.remove('Authorization');
    setUser({isAuth: false});
    history.push('/login');
  }
}

const isAuth = user?.isAuth;
// const isAdmin = user?.isAdmin;

  return (
    <>
    <Header handleLogoutSubmit={handleLogoutSubmit} isAuth={isAuth} />
    <Switch>
      <Route path='/registration'>
        <RegistrationForm />
      </Route>
      <Route path='/login'>
        <LoginForm isAuth={isAuth} user={user} setUser={setUser} />
      </Route>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/up_for_adoption'>
        <AnimalForm />
      </Route>
      <Route exact path='/animal_listing'>
        <AnimalList />
      </Route>
      <Route path='/profile'>
        <ProfileForm />
      </Route>
    </Switch>
    </>
  );
}

export default App;

