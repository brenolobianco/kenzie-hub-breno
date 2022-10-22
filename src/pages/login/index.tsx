import Logo from "../../assets/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext, MouseEvent } from "react";
import { Form } from "./styles";
import { LoginBox } from "./styles";
import { LoginButton } from "./styles";
import { GoRegisterButton } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext, IUser, IUserLogin } from "../../contexts/userContexts";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });

  const registerPage = (event: MouseEvent) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <LoginBox>
      <ToastContainer />
      <img src={Logo} alt="Logo" />

      <Form onSubmit={handleSubmit(login)}>
        
        <h2>Login</h2>

        <label>Email</label>
        <input placeholder="Email" {...register("email")} />

        <p>{errors.email?.message}</p>
        <label>Senha</label>
        <input placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>
        <LoginButton type="submit">Entrar</LoginButton>
        <h3>Ainda nao possui uma conta?</h3>
        <GoRegisterButton onClick={registerPage}>Cadastre-se</GoRegisterButton>
      </Form>
    </LoginBox>
  );
}
export default Login;
