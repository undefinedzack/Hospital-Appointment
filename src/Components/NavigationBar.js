import {Link} from "react-router-dom";

const NavigationBar = () => {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Hospital</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

            </ul>

            <img alt={""} src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7--v2.png"/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar