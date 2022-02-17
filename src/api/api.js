export default function api(setAuth, setCurrentUser) {
  const promiseWrap = (callback) => new Promise((res, rej) => {
    setTimeout(() => {
      res(callback());
    }, 3000)
  });
  const signUp = (sign) => {
    return promiseWrap(() => {
      localStorage.setItem(sign.email,
        JSON.stringify({ login: sign.email, password: sign.password, name: sign.name,todolist:[], entered: false }));
      return sign;
    })
  }
  const getCurrentUser = () =>{
    const currentUser = localStorage.getItem('').login;
    return currentUser;
  }
  const createToDoList = (login) => {
    const currentUser = localStorage.getItem(login);
    if (!currentUser.todolist) {
      localStorage.setItem(currentUser.login,  JSON.stringify({ ...JSON.parse(currentUser),todolist: [] }));
    }
    return login;
  }
  const saveToLocalStorToDoList = (login, todo) => {
    let currentUser ={}
    try {
      currentUser = JSON.parse(localStorage.getItem(login));
    } catch {}
    localStorage.setItem(currentUser.login, JSON.stringify({
      ...currentUser,
      todolist: todo
    }));
    return login;
  }

  const signIn = (sign) => {
    const localValues = JSON.parse(localStorage.getItem(sign.login));
    if (localValues && sign.password === localValues.password) {
      setAuth(true);
      // localStorage.setItem('currentUser',)
      // localStorage.setItem(sign.login,
      //   JSON.stringify({...JSON.parse(sign),entered:true}));
      sessionStorage.setItem('currentUser',sign.login)
      setCurrentUser(JSON.parse(localStorage.getItem(sign.login)).login);
      return true;
    } else {
      return false;
    }
  }

  return { signUp, signIn, createToDoList, addToList: saveToLocalStorToDoList }
}