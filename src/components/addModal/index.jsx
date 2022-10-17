import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { ModalForm } from "./styles";
import { ModalBoxHeader,ModalBoxContent } from "./styles";
import { ModalBox } from "./styles";
import X from "../../X.svg";

function AddModalTech(props) {
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
  } = useForm({ resolver: yupResolver(schemaAdd) });

  function dataParse(arg) {
    if (arg === "1") {
      return "Iniciante";
    } else if (arg === "2") {
      return "Intermediário";
    } else if (arg === "3") {
      return "Avançado";
    }
  }

  function onSubmit(data) {
    const body = {
      title: data.title,
      status: dataParse(data.status),
    };

    api
      .post(`/users/techs`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia adicionada com sucesso!");
        props.handleModal();
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.warn("Você já possui essa tecnologia cadastrada");
        } else {
          toast.error("Erro ao adicionar tecnologia");
        }
      });
  }

  return (
    <ModalBox>
      <ModalBoxContent>
      <ModalBoxHeader>
          <h3>Cadastrar Tecnologia</h3>
          <i
            onClick={() => {
              props.handleModal();
            }}
          >
            <img src={X} alt="ADD" />
          </i>
        </ModalBoxHeader>

  
      <ModalForm
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
       

        <h2>Nome</h2>
        <input
          type="text"
          placeholder="Escreva aqui o nome da Tecnologia"
          {...register("title")}
        />

        <h2>Nível de Domínio</h2>
        <select {...register("status")}>
          <option value="0">Selecione seu nível</option>
          <option value="1">Iniciante</option>
          <option value="2">Intermediário</option>
          <option value="3">Avançado</option>
        </select>

        <button type="submit">Cadastrar Tecnologia</button>
      </ModalForm>
      </ModalBoxContent>
    </ModalBox>
  );
}

export default AddModalTech;
