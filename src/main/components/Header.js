function Header() {
  return (   
            <>  
                <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                    <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1><a className="nav-link" href="index.html">Dragon betting</a></h1>
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#pricing">Price</a></li>          
                            <li><a className="nav-link scrollto" href="#feathers">Mint</a></li>
                            <li><a className="nav-link scrollto" href="#services">Roadmap</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    </div>
                </header>
            </>
        )  
      
}  

export default Header  