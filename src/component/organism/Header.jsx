import Imagens from "../atoms/imagens";
import foto from "../../assets/img/foto.jpg";
import "../../assets/styles/Header.css"
import Boxinfo from "../atoms/Boxinfo";

function Header(){
    return(<header>
        <div className="Profilebackground"><center><Imagens style="Img" imgen={foto} info="Mi foto de perfil"/></center></div>
        <Boxinfo style="BoxinfoHeader" info="David Antonio Gómez González"/>
        <Boxinfo style="BoxinfoHeader" info="Ingeniria en Software"/>
        <Boxinfo style="BoxinfoHeader" info="19 años"/>
        <Boxinfo style="BoxinfoHeader" info="Universidad Politecnica de Chiapas"/>
        <Boxinfo style="BoxinfoHeader" info="Programacion Web"/>
    </header>)
}
export default Header;