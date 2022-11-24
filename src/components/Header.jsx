import Logo from "../assets/img/LogoWhite.png"
import "../assets/style/Header.css"

function Header() {
    return ( 

        <>
        <div className="container">
            <div>
                <a href="/">
                    <img src={Logo}></img>
                </a>

                <form  role="search">
                    <input type="search" placeholder="Buscar..." aria-label="Search"></input>
                </form>

                <div className="text-end">
                    <button type="button" className="">Login</button>
                    <button type="button" className="">Sign-up</button>
                </div>
            </div>
        </div>
        </>
        
     );
}

export default Header;