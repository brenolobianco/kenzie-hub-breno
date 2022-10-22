import Logo from "../../assets/Logo.svg";
import "./styles";
import { useNavigate } from "react-router-dom";
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
import { AuthContext, ITechs } from "../../contexts/userContexts";
import api from "../../services/api";

const Buttonplus = require("../../assets/ButtonPlus.svg");

interface IUserId {
  id: string;
}

function Dashboard() {
  const navigate = useNavigate();
  const { loading, userInfo, setUserInfo } = useContext(AuthContext);
  const { showModal, setShowModal } = useContext(AuthContext);

  function handleModal() {
    setShowModal(!showModal);
  }

  const handleDelete = (id: IUserId) => {
    api.delete("/users/techs/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@TOKEN"),
      },
    });
  };

  const Logout = () => {
    window.localStorage.clear();
    setUserInfo([]);
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
  }
  return (
    <>
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

          {showModal && <AddModalTech />}

          <ListContentBox>
            {userInfo.techs.map((technology: ITechs) => (
              <ListCard key={technology.id}>
                <h2>{technology.title}</h2>
                <CardRightSide>
                  <p>{technology.status}</p>
                 
                </CardRightSide>
              </ListCard>
            ))}
          </ListContentBox>
        </MainContent>
      </div>
    </>
  );
}

export default Dashboard;
