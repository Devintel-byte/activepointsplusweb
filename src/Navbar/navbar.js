import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faTiktok, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
    return (
        <div>
            <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div class="container">
              
                <a class="navbar-brand logo-text" href="#main">
                <img class="img-fluid" src="assets/images/logoo.png" alt="logo" width='130px' height='130px' /> 
                </a> 

                <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ms-auto navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#header">
                            <FontAwesomeIcon icon={faTiktok} style={{color: '#fffe82', width: '1.2em', height: 'auto', border: '1px transparent solid', background:'#000', padding: '5px', margin: '2px'}} />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#details">
                            <FontAwesomeIcon icon={faTwitterSquare} color='#000' style={{width: '2.3em', height: '2.5em'}} />
                            </a>
                        </li>
                        <li class="nav-item">
                        <FontAwesomeIcon icon={faInstagramSquare} color='#000' style={{width: '2.3em', height: '2.5em', margin: '9px' }} />
                        </li>
                    </ul>
                </div> 
            </div> 
        </nav>
        </div>
    )
}

export default NavBar;