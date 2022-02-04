import Signup from '../pages/Signup';
import Login from '../pages/Login';

export default function api(sign, auth, currentUser) {

  const save = (sign) => {
      localStorage.setItem(sign.email, JSON.stringify({ login: sign.email, password: sign.password, name: sign.name }))
  }
  const signIn = (sign) => {
    const localValues = JSON.parse(localStorage.getItem(sign.login));
    if (localValues && sign.password === localValues.password) {
      auth(true);
      currentUser(JSON.parse(localStorage.getItem(sign.login)).login);
    } else {
      console.log('Password dont correct');
    }
  }

  const value = Object.keys(sign).length > 2 ? save : signIn;

  const saveToLocalStorage = new Promise((resolve, reject) => {
    setTimeout(value, 3000, sign)
  })

}