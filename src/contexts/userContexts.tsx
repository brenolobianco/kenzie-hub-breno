import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iProviderContextProps {
  children: ReactNode;
}
export interface IUser extends ITechs {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
  techs: ITechs[];
  token:string;
  user:IUser;
  
}
export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}
export interface IUserLogin{
  id:string;
  email:string;
  password:string;
  
}
export interface ITechs {
  id: string;
  title: string;
  status?: any;
}
export interface IPost {
  user: IUser;
  token: string;
  data: any;
}
export interface IProviderContext {
  userInfo: IUser;
  setUserInfo: Dispatch<SetStateAction<any>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  login: (user: IUserLogin) => void;
  registerUser: (data: IUserRequest) => void;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as IProviderContext);

const Providers = ({ children }: iProviderContextProps) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

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

  const login  = (user:IUserLogin) => {
    api
      .post<IUser>("https://kenziehub.herokuapp.com/sessions", { ...user })
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

  const registerUser = (data: IUserRequest) => {
    api
      .post<IPost>("https://kenziehub.herokuapp.com/users", data)
      .then(() => {
        toast("Cadastro realizado com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })

      .catch(() => toast("Ops,algo deu errado!"));
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        registerUser,
        userInfo,
        loading,
        setUserInfo,
        setLoading,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Providers;
