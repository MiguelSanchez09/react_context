import { useContext } from "react";
import UserContext from "../context/UserContext";
import Header from "./Header";
import "../App.css"


function Home() {
  const context = useContext(UserContext);
  const { user } = context;
  const [ name, updateName ] = user;

  let $nameInput = document.querySelector("#name");

  return (
    <section className="text-center App-section"> <Header />

      <h2 className="title">
      Nombre completo<span className="titleSpan">{name} </span>
      </h2>

    <form className="home">
        <div>
          <input placeholder="Escribe tu nombre" type="text" id="name" />
        </div>

        <button
            className="button"onClick={(e) => {e.preventDefault(); updateName($nameInput.value);
            }}> Enviar Datos
        </button> 
        
      </form>
    </section>
  );
}
export default Home;