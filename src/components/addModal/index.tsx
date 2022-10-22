import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { ModalForm } from "./styles";
import { ModalBoxHeader, ModalBoxContent } from "./styles";
import { ModalBox } from "./styles";
import { useContext } from "react";
import { AuthContext, ITechs, IUser } from "../../contexts/userContexts";

const X = require("../../assets/X.svg");

interface IUserTech {
  title: string;
  status: string;
  onSubmit: () => void;
}

function AddModalTech() {
  const { setShowModal } = useContext(AuthContext);

  const schemaAdd = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^(1|2|3)$/, "Status inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserTech>({ resolver: yupResolver(schemaAdd) });

  function setTech(data: IUserTech) {
    const body = {
      title: data.title,
      status: data.status,
    };

    api.post(`/users/techs`, body, {}).then(() => {
      toast.success("Tecnologia adicionada com sucesso!");
      setShowModal(false);
    });
  }

  return (
    <ModalBox>
      <ModalBoxContent>
        <ModalBoxHeader>
          <h3>Cadastrar Tecnologia</h3>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            <img src={X} alt="ADD" />
          </button>
        </ModalBoxHeader>

        <ModalForm onSubmit={handleSubmit(setTech)}>
          <h2>Nome</h2>
          <input
            type="text"
            placeholder="Escreva aqui o nome da Tecnologia"
            {...register("title")}
          />
          <h2>Nível de Domínio</h2>
          <select {...register("status")}>
            <option value="Selecione">Selecione seu nível</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </ModalForm>
      </ModalBoxContent>
    </ModalBox>
  );
}

export default AddModalTech;
