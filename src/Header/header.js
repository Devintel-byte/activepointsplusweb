import Slider from "./Slider/Slider";

const Header = () => {
    return (
        <div>
            <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="text-container">
                            <Slider />
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
    )
}

export default Header;