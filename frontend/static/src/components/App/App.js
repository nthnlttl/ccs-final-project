import {useState, useEffect} from 'react';
import {  Route, Switch, withRouter, useHistory} from 'react-router-dom';
import './App.css';
import Header from './../Header/Header'
import RegistrationForm from './../Registration/RegistrationForm';
import LoginForm from './../Login/LoginForm';
import Cookies from 'js-cookie';
import LandingPage from './../Landing/LandingPage';


function App(props) {
  const [user, setUser] = useState(null);

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

async function handleLogoutSubmit(event, props) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'X-CSRFToken':Cookies.get('csrftoken'),
    },
    body: JSON.stringify(props.user),
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
    <Header />
    <Switch>
      <Route path='/registration'>
        <RegistrationForm />
      </Route>
      <Route path='/login'>
        <LoginForm isAuth={isAuth} user={user} setUser={setUser} />
      </Route>
      <Route path='/'>
        <LandingPage />
      </Route>
    </Switch>
    </>
  );
}

export default App;

