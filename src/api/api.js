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
  const createToDoList = (login) => {
    const currentUser = localStorage.getItem(login);
    if (!currentUser.todolist) {
      localStorage.setItem(currentUser.login, JSON.stringify({ ...JSON.parse(currentUser), todolist: [] }));
    }
    return login;
  }
  const addToList = (login, todo) => {
    const currentUser = JSON.parse(localStorage.getItem(login));
    const todolist = currentUser.todolist;
    console.log(login,todo,currentUser);
    localStorage.setItem(currentUser.login, JSON.stringify({
      ...JSON.parse(currentUser),
      todolist: [...todolist, todo]
    }));
    return login;
  }

  const signIn = (sign) => {
    const localValues = JSON.parse(localStorage.getItem(sign.login));
    if (localValues && sign.password === localValues.password) {
      setAuth(true);
      // localStorage.setItem(sign.login,
      //   JSON.stringify({...JSON.parse(sign),entered:true}));
      setCurrentUser(JSON.parse(localStorage.getItem(sign.login)).login);
      return true;
    } else {
      return false;
    }
  }

  return { signUp, signIn, createToDoList, addToList }
}