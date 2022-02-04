import Signup from '../pages/Signup';
import Login from '../pages/Login';

const save = ()=>{
  console.log('api works')
}

export default function api() {
  const saveToLocalStorage = new Promise((resolve, reject) => {
    setTimeout(save,3000);
  })
}