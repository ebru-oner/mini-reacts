import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/user/userSlice";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  const handleLogout = () => {
    dispatch(logout({ username }));
  };
  return isAuthenticated ? (
    <div>
      <h1>Hello {user}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div>
      <label>Login:</label>
      <input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Password:</label>
      <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
