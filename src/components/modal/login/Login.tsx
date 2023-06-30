import { FormEvent, useState } from "react";

const defaultValue = "";

export const Login = () => {
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState(defaultValue);
  const [password, setPassword] = useState(defaultValue);
  const handleForm = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (login.length < 2 || password.length < 2) {
      return;
    }
    setAuth(!auth);
    console.log(login, password);
    setLogin(defaultValue);
    setPassword(defaultValue);
  };

  return (
    <form onSubmit={handleForm}>
      <h2>{auth ? "Registration" : "Login"}</h2>
      <input type="text" placeholder="Login" value={login}
             onChange={(event) => setLogin(event.target.value)} />
      <input type="text" placeholder="Password" value={password}
             onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">{auth ? "Register" : "Login"}</button>
    </form>
  );
};