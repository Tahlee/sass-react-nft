import "./header.scss"
import '../../../node_modules/bootstrap/scss/bootstrap.scss'
import '../../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss'
import Icon from "../../assets/images/notification-2-line 1.svg"
import "../../../node_modules/bootstrap/js/dist/collapse.js"
const Header=()=>{
    return(
       <div>
         
      <nav className=" navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse mid" id="navbarNav">
           <a className="navbar-brand" href="#"><h5>BlueMoon</h5></a>
            <ul className="navbar-nav">
             
              <li className="nav-item">
                <a className="nav-link text-dark " href="#">Discover</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark " href="#">How its work</a>
              </li>
           
            </ul>
            <form class="form-inline my-2 my-lg-0 ps-lg-5">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      
    </form>
    <ul className="navbar-nav  ">
          <li className="nav-item p-1 ">
                <span className="position-relative"><img src={Icon}/>
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle"></span>
                </span>
              </li>
              <li className="nav-item up-style ps-lg-3">
                <button className="btn btn-primary">Upload</button>
              </li>
              <li className="nav-item con_wal ps-lg-5">
                <a className="nav-link " href="#">Connect Wallet</a>
              </li>

            </ul>
            
          </div>

          

        </div>
      </nav>
      
    </div>
    )
}
export default Header