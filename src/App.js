//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faTiktok, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
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
                            <FontAwesomeIcon icon={faTiktok} style={{color: '#ff7c60', background:'#fff', width: '1.2em', height: 'auto', border: '1px transparent solid', padding: '5px', margin: '2px'}} />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#details">
                            <FontAwesomeIcon icon={faTwitterSquare} color='#fff' style={{width: '2.3em', height: '2.5em'}} />
                            </a>
                        </li>
                        <li class="nav-item">
                        <FontAwesomeIcon icon={faInstagramSquare} color='#fff' style={{width: '2.3em', height: '2.5em', margin: '9px' }} />
                        </li>
                    </ul>
                </div> 
            </div> 
        </nav>
      
        <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="text-container">
                            <h1 class="h1-large">The Reward Currency of An Active Lifestyle</h1>
                            <p class="p-large">Simple and fun app to help you live an active life while winning points redeemable for awesome prizes.</p>
                            <form>
                              <div class='form-group'>
                              <input type="text" class="form-control-input" placeholder="example@youremail.com" required />
                              </div>
                            </form>
                            <a class="btn-solid-lg" href="#services">
                               <img src='assets/images/logo-icon.png' alt='logo-icon' width='24px' height='24px' style={{padding: '1px', margin: '2px' }} /> JOIN THE WAITLIST
                                </a>
                            <div class='small-text'>
                            <p></p>
                            <p class='side-text'>Now accepting the next 5k members</p>
                            </div>
                        </div>
                        
                    </div> 
                    <div class="col-lg-6 col-xl-7">
                        <div class="image-container">
                            <img class="img-fluid" src="assets/images/illustrate.png" alt="alternative" width='600px' height='680px' />
                        </div> 
                    </div> 
                </div> 
            </div> 
        </header> 
      
    </div>

  );
}

export default App;
