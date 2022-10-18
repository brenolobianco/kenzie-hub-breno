import Logo from "../../assets/Logo.svg";
import "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddModalTech from "../../components/addModal";
import { useContext } from "react";
import {
  PersonalInfoBox,
  MainContent,
  ListCard,
  CardRightSide,
  ListContentBox,
  Techs,
  ButtonLogout,
  Header,
} from "./styles";
import { AuthContext } from "../../contexts/userContexts";
import Buttonplus from "../../assets/ButtonPlus.svg";
import api from "../../services/api";

function Dashboard() {
  const navigate = useNavigate();
  const { loading, userInfo, setUserInfo } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  function handleModal() {
    setShowModal(!showModal);
  }

  const handleDelete = (id) => {
    api
      .delete("/users/techs/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@TOKEN"),
        },
      })
      .then(() => {
        window.location.reload();
      });
  };

  const Logout = () => {
    window.localStorage.clear();
    setUserInfo([])
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  if (loading) {
    <>
      <div>
        {" "}
        <h2>Carregando</h2>
      </div>
    </>;
  } else {
    return (
      <div>
        <ToastContainer />
        <Header>
          <img src={Logo} alt="logo" />
          <ButtonLogout onClick={Logout}>Sair</ButtonLogout>
        </Header>

        <PersonalInfoBox>
          <h3>Olá, {userInfo.name}</h3>
          <p>{userInfo.course_module}</p>
        </PersonalInfoBox>
        <MainContent>
          <Techs>
            <h3>Tecnologias</h3>{" "}
            <i
              onClick={() => {
                handleModal();
              }}
            >
              <img src={Buttonplus} alt="buttonplus" />
            </i>
          </Techs>
          {showModal && <AddModalTech handleModal={handleModal} />}
          <ListContentBox>
            {userInfo.techs.map((technology) => (
              <ListCard key={technology.id}>
                <h2>{technology.title}</h2>
                <CardRightSide>
                  <p>{technology.status}</p>
                  <i onClick={() => handleDelete(technology.id)}> Deletar</i>
                </CardRightSide>
              </ListCard>
            ))}
          </ListContentBox>
        </MainContent>
      </div>
    );
  }
}
export default Dashboard;
