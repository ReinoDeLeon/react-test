import MainNav from "./MainNav";


const ThorHeader = () => {

    return (
        <header className="col-sm-12 bottom-separator bg-dark">

                <div className="container">
                    <div className="row py-3">
                        <div className="col-sm-12 col-md-4 text-center">
                            <a href="index.html"><img className="img-fluid text-white" src="img/logo.jpg" alt="" /></a>
                        </div>
                        <div className=" col-sm-12 col-md-8 text-end fs-5 align-self-center">
                            <nav className="navbar navbar-expand-lg navbar-light titulo ">
                                <div className="container">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </button>
                                    <MainNav />
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

            </header>
    );

}

export default ThorHeader;