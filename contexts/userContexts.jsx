import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext({});

const Providers = ({ children }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.length === 0 || localStorage.getItem("@TOKEN") === null) {
      navigate("/login");
    } else {
      async function loadUser() {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
          try {
            api.defaults.headers.authorization = `Bearer ${token}`;

            const { data } = await api.get("/profile");

            setUserInfo(data);
          } catch (error) {
            console.error(error);
          }
        }

        setLoading(false);
      }

      loadUser();
    }
  }, [userInfo]);

  const login = (user) => {
    api
      .post("https://kenziehub.herokuapp.com/sessions", { ...user })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.user.id);
        toast("Login realizado com sucesso!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
       
        setUserInfo(res.data);
      })

      .catch(() => toast("Ops,algo deu errado!"));
  };

  const registerUser = (data) => {
    api
      .post("https://kenziehub.herokuapp.com/users", data)
      .then(() => {
        toast("Cadastro realizado com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })

      .catch(() => toast("Ops,algo deu errado!"));
  };

  return (
    <AuthContext.Provider value={{ login, registerUser, userInfo, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Providers;
