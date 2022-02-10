export default function api(setAuth, setCurrentUser) {
  const promiseWrap = (callback) => new Promise((res, rej) => {
    setTimeout(() => {
      res(callback());
    }, 3000)
  });
  const signUp = (sign) => {
    return promiseWrap(() => {
      localStorage.setItem(sign.email, JSON.stringify({ login: sign.email, password: sign.password, name: sign.name }));
      return sign;
    })

  }
  const signIn = (sign) => {
    const localValues = JSON.parse(localStorage.getItem(sign.login));
    if (localValues && sign.password === localValues.password) {
      setAuth(true);
      setCurrentUser(JSON.parse(localStorage.getItem(sign.login)).login);
      return true;
    } else {
      return false;
    }
  }

  return { signUp, signIn }
}