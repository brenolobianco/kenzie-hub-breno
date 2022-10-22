import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Form } from "./styles";
import { BackButton } from "./styles";
import { RegisterBox, FormLogo } from "./styles";
import { RegisterButton } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import { useContext, MouseEvent } from "react";
import { AuthContext } from "../../contexts/userContexts";
import "react-toastify/dist/ReactToastify.css";
const Logo = require("../../assets/Logo.svg");

export interface IUser {
  
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
 
}

function Register() {
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Senha Obrigatoria"),
    bio: yup.string().required("bio Obrigatoria"),
    contact: yup.string().required("numero Obrigatorio"),
    course_module: yup.string().required("modulo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const backButton = (event: MouseEvent) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <RegisterBox>
      <ToastContainer />
      <FormLogo>
        <img src={Logo} alt="Logo" />
        <BackButton onClick={backButton}>Voltar</BackButton>
      </FormLogo>

      <Form onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <h4>Rapido e grátis, vamos nessa</h4>

        <label htmlFor="name">Nome</label>
        <input id="name" placeholder="Digite aqui seu nome" {...register("name")} />

        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>

        <input id="email" placeholder="Digite aqui seu Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        
        <label htmlFor="password">Senha</label>
        <input id="password" placeholder="Senha" {...register("password")} />

        <p>{errors.password?.message}</p>
        
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
        id="confirmPassword"
          placeholder="Confirme Senha"
          type="password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <label htmlFor="bio">Bio</label>
        <input id="bio" placeholder="Fale sobre voce" {...register("bio")} />
        <p>{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input id="contact" placeholder="Opçao de Contato" {...register("contact")} />
        <p>{errors.contact?.message}</p>
        <label>Módulo</label>

        <select {...register("course_module")}>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        <p>{errors.course_module?.message}</p>

        <RegisterButton type="submit">Cadastrar</RegisterButton>
      </Form>
    </RegisterBox>
  );
}
export default Register;
