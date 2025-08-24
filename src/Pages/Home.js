import React from 'react'
import HeroBg from "../Assets/Images/hero_Right.svg"
import Logo from "../Assets/Images/Logo.svg"
import CallRouting from "../Assets/Images/call_routing.svg"
import RealTimeAnaliys from "../Assets/Images/real_time.svg"
import Support from "../Assets/Images/support.svg"
import CompanyLogo1 from "../Assets/Images/epam_logo.svg"
import CompanyLogo2 from "../Assets/Images/infotech_logo.svg.svg"
import CompanyLogo3 from "../Assets/Images/infobae_logo.svg.svg"
import CompanyLogo4 from "../Assets/Images/infoempleo_logo.svg.svg"
import BgTestimonial from "../Assets/Images/bg_orange.svg"
import Testimonial from "../Assets/Images/testimonial.svg"
import TesLogo from "../Assets/Images/comma.svg"
import Star from "../Assets/Images/star.svg"
import DotsGray from "../Assets/Images/dots_gray.svg"
import DotsBlue from "../Assets/Images/dots_blue.svg"
import DotsOrange from "../Assets/Images/dots_orange.svg"
import Cta from "../Assets/Images/cta.svg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='bg_primary'>
        <div className='cstm_container'>
            <nav class="navbar main_navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div className='navbar-brand nav_logo'>
                        <img src={Logo} className='img_fluid_100'/>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto align-items-center mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link text_White active px-3 py-2 me-4 " aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text_white px-3 py-2 me-4" href="#">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text_white px-3 py-2 me-4" href="#">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text_white px-3 py-2 me-4" href="#">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text_white px-3 py-2 me-4" href="#">Log In</Link>
                            </li>
                            <div className='button_white_fade_sm me-4'> Try it Free</div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>


    <div className='bg_primary hero_section mb-26'>
      <div className='cstm_container'>
        <div className='row align-items-center'>
            <div className='col-6'>
                <div className='mb-4'>
                    <h1 className='text_white fs_47 text-start mb-2'>Empower Your Team <br/> with <span className='text_secondary fs_56'>AI-Powered</span> Customer Care</h1>
                    <p className='fs_19_1 text_white text-start'>AI-powered cloud-based contact center platform.</p>
                </div>

                <div className='d-flex'>
                    <div className='button_white me-4'> Try it Free</div>
                    <div className='button_secondary_outline'> Get a Demo</div>
                </div>
            </div>

            <div className='col-6'>
                <div className='hero_bg_right'>
                    <img src={HeroBg} className='img_fluid_100'/>
                </div>
            </div>

        </div>

      </div>
    </div>

    <div className='cstm_container'>
        <div className='features_Section mb-26'>
            <div className='row justify-content-center mb-6'>
                <div className='col-5'>
                    <h2 className='text_bluegray feature_title mb-2 fw_500'>Features</h2>
                    <p className='text_light_gray mb-0 fs_14'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                    <div className='feature_card'>
                        <div class="card bg_light_blue">
                            <div class="card-body text-start">
                                <div className='d-flex align-items-center justify-content-start mb-2'> 
                                    <div className='icon ratio ratio-1x1'>
                                        <img src={CallRouting} className='img_fluid_100'/>
                                    </div>
                                    <h5 class="card-title mb-0 text_primary">Ai Call Routing </h5>
                                </div>
                            
                                <p class="card-text mb-0 text_light_gray">Automate, intelligent call distribution</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='feature_card'>
                        <div class="card bg_light_blue">
                            <div class="card-body text-start">
                                <div className='d-flex align-items-center justify-content-start mb-2'> 
                                    <div className='icon ratio ratio-1x1'>
                                        <img src={RealTimeAnaliys} className='img_fluid_100'/>
                                    </div>
                                    <h5 class="card-title mb-0 text_primary">Ai Call Routing </h5>
                                </div>
                            
                                <p class="card-text mb-0 text_light_gray">Automate, intelligent call distribution</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='feature_card'>
                        <div class="card bg_light_blue">
                            <div class="card-body text-start">
                                <div className='d-flex align-items-center justify-content-start mb-2'> 
                                    <div className='icon ratio ratio-1x1'>
                                        <img src={Support} className='img_fluid_100'/>
                                    </div>
                                    <h5 class="card-title mb-0 text_primary">Ai Call Routing </h5>
                                </div>
                            
                                <p class="card-text mb-0 text_light_gray">Automate, intelligent call distribution</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        
        <div className='best_clinets_section mb-26'>
            <div className='row mb-5'>
                <h3 className='fs_27 mb-0 text_bluegray primary_font fw_300'>The best companies trust us</h3>
            </div>

            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-10'>
                    <div className='w-100 d-flex justify-content-between align-items-center'>
                        <div className='company_logo '>
                            <img src={CompanyLogo1} className='img_fluid_100'/>
                        </div>
                        <div className='company_logo'>
                            <img src={CompanyLogo2} className='img_fluid_100'/>
                        </div>
                        <div className='company_logo'>
                            <img src={CompanyLogo3} className='img_fluid_100'/>
                        </div>
                        <div className='company_logo'>
                            <img src={CompanyLogo4} className='img_fluid_100'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='testimonial mb-41'>
            <div className='row justify-content-center align-items-center mb-4'>
                <div className='col-10'>
                    <h1 className='title font_secondary fw_500 fs_53 text_bluegray mb-2'>
                        Happy, Safisfied Faces That <span className='text_secondary'>Speak Louder</span> Than Words
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo <br/>ligula eget dolor. Aenean massa. Cum sociis natoque.
                    </p>
                </div>


            </div>
            <div className='row align-items-center'>
                <div className='col-5'>
                    <div className='testimonial_img_container d-flex align-items-center justify-content-end'>
                        <div className='testimonial_img position-relative'>
                            <img src={Testimonial} className='customer_img'/>
                            <div className='testimonial_img bg_cover position-absolute'>
                                <img src={BgTestimonial} className='background'/>
                            </div>
                            <div className='dots gray position-absolute'>
                                <img src={DotsGray} className='img_fluid_100'/>
                            </div>
                            <div className='dots blue position-absolute'>
                                <img src={DotsBlue} className='img_fluid_100'/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-7'>
                    <div className='review'>
                        <div className='comma_img mb-4'>
                            <img src={TesLogo} className='img_fluid_100'/>
                        </div>

                        <p className='mb-3 text-start review_text'>Proident consequat occaecat laboris proident aliquip tempor magna ad 
                            aute cillum officia irure reprehenderit. Ut non cillum adipisicing 
                            excepteur enim lorem laboris eu aliquip ipsum.Proident consequat 
                            occaecat laboris proident aliquip tempor magna ad aute cillum officia irure 
                        </p>
                        <div className='rating d-flex align-items-center mb-8'>
                            <div className='star_img me-4'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img me-4'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img me-4'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img me-4'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                        </div>
                        <div className='person_detail text-start'>
                            <p className='mb-2 font_primary fs_25 title text_bluegray'>Rohit Kumar</p>
                            <p className='mb-0 font-primary fs_14 fw_300 designation'>Co Founder</p>
                        </div>

                    </div>


                </div>
            </div>
        </div>

        
    </div>




    <div className='cta bg'>
        <div className='cstm_container'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-5 position-relative'>
                    <div className='img_outer'>
                        <div className=' position-relative'>
                            <img src={Cta} className='img_fluid_100'/>
                            <div className='dots blue position-absolute'>
                                <img src={DotsBlue} className='img_fluid_100'/>
                            </div>
                            <div className='dots orange position-absolute'>
                                <img src={DotsOrange} className='img_fluid_100'/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-5 text-start'>
                    <div className='mb-4'>
                        <h3 className='text_primary font_secondary mb-2 fs_56 title'>ClariVoice</h3>
                        <p className='text_light_gray mb-0'>AI-powered cloud-based contact center platform.</p>
                    </div>
                    <div className='d-flex mb-5'>
                        <div className='button_primary me-4'> Try it Free</div>
                        <div className='button_primary_outline'> Get a Demo</div>
                    </div>
                    <div className='d-flex align-items-start'>
                        <div className='rating d-flex align-items-center me-4'>
                            <div className='star_img me-2'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img me-2'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img me-2'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img me-2'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                            <div className='star_img'>
                                <img src={Star} className='img_fluid_100'/>
                            </div>
                        </div>
                        <div>
                            <p><span className='fw_700'>5,200 businesses</span> use ClariVoice <br/>and they rate it as <span className='fw_700'>5-stars</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='footer'>
        <div className='cstm_container'>
            <div className='col-4'>

            </div>
            <div className='col-8'>
                <div className='row'>
                    <div className='col-2'>
                        <p className='text_bluegray font_secondary fs_17 mb-0 text-start'>Help</p>
                        <ul className='text-start ps-0'>
                            <li className='fs_12 abcd'>Help</li>
                            <li className='fs_12'>Support</li>
                            <li className='fs_12'>Query</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </div>
           













       


    </>
  )
}

export default Home
