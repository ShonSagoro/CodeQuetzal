import Logo from "../assets/img/LogoWhite.png"
import "../assets/css/Footer.css"


function Footer() {
    return ( 
        <>
        <footer>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>|</li>
                    <li><a href="#">Git Hub</a></li>
                    <li>|</li>
                    <li><a href="#">About</a></li>
                </ul>
                <p>2022 Codigo Quetzal Company</p>
                <img src={Logo}></img>
            </div>
        </footer>
        </>
     );
}

export default Footer;