import Boxinfo from "../atoms/Boxinfo";
import Imagens from "../atoms/imagens";
import C from "../../assets/img/C++.png";
import Java from "../../assets/img/Java.png";
import Javascript from "../../assets/img/JavaScript.png";
import Html from "../../assets/img/Html.png";
import "../../assets/styles/Content.css";
import Information from "../atoms/Information";

function Content(){
    return(
        <div className="content">
            <div className="divContent">
                <center><Boxinfo style="BoxinfoContent" info="Lenguajes"/></center>
                <Information style="Information" data="C, C++, JavaScript, Html y Java"/>
                <Imagens style="Icon" imgen={C}/>
                <Imagens style="Icon" imgen={Java}/>
                <Imagens style="Icon" imgen={Javascript}/>
                <Imagens style="Icon" imgen={Html}/>
            </div>
            <div className="divContent">
                <center><Boxinfo style="BoxinfoContent" info="Descripcion General"/></center>
                <Information style="Information" data="En el ambito laboral soy confiable, amistoso, me enfoco en el trabajo cuando es necesario, forma de trabajar lento, cuando no se requiera al gun proyecto pesado o rapido."/>
            </div>
            <div className="divContent">
                <center><Boxinfo style="BoxinfoContent" info="Contacto"/></center>
                <Information style="Information" data="Num. Telefono: 961-211-3411"/>
                <Information style="Information" data="Correos"/>
                <Information style="Information" data="Google: dsAgg322@gmail.com"/>
                <Information style="Information" data="Outlook:daveAgg341@otlook.es"/>
                <Information style="Information" data="whatsApp: 961-342-7351"/>
                <Information style="Information" data=""/>
            </div>
            <div className="divContent">
                <center><Boxinfo style="BoxinfoContent" info="Social"/></center>
                <Information style="Information" data="Facebook: Dave Gonz"/>
                <Information style="Information" data="Twitter: Dave A Gonz"/>
                <Information style="Information" data="Instagram: Dave Gonz"/>
                <Information style="Information" data="Instagram: Dave Gonz"/>
                <Information style="Information" data="GitHut: DaveGonz"/>
            </div>
        </div>
    )
}
export default Content;