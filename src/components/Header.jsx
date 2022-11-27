import Logo from "../assets/img/LogoWhite.png"
import "../assets/css/Header.css"
import search from "../assets/img/lupawhite.png"

function Header() {

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return ( 

        <>
        <header>
                <div className="box">
                    <a href="/">
                        <img src={Logo}></img>
                    </a>
                </div>

                <div className="box2">
                    <form  role="search" onSubmit={handleSubmit}>
                        <input type="search" placeholder="Buscar..." aria-label="Search"></input>
                        <button type="submir"><img src={search}></img></button>
                    </form>
                    <div>
                        <button type="button" className="login">Login</button>
                        <button type="button" className="singup">Sign-up</button>
                    </div>
                </div>
        </header>
        </>
        
     );
}

export default Header;