import {FormEvent, useState} from "react";

const defaultPersonValue = {
  login: '',
  password: ''
}
export const Login = () => {
  const [auth, setAuth] = useState(false);
  const [person, setPerson] = useState(defaultPersonValue)
  const handleForm = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (person.login.length < 2 || person.password.length < 2) {
      return;
    }
    setAuth(!auth);
    setPerson(defaultPersonValue)
  };


  return (
    <form onSubmit={handleForm}>
      <h2>{auth ? "Registration" : "Login"}</h2>
      <input type="text" placeholder="Login" value={person.login}
             onChange={(event) => setPerson({...person, login: event.target.value})}/>
      <input type="text" placeholder="Password" value={person.password}
             onChange={(event) => setPerson({...person, password: event.target.value})}/>
      <button type="submit">{auth ? "Register" : "Login"}</button>
    </form>
  );
};