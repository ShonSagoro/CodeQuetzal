import Logo from "../assets/img/LogoWhite.png"
import "../assets/style/Footer.css"


function Footer() {
    return ( 
        <>
           <footer>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Git Hub</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <p>2022 Codigo Quetzal Company</p>
            <img src={Logo}></img>
        </footer>
        </>
     );
}

export default Footer;