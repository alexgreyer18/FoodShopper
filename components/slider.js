const Slider = ()=> {
    
    return (
    <div>
        {/* <!-- 
            SLIDER

            Classes:
                .fullheight = full height slider
        --> */}
        <section id="slider" class="fullheight">

            {/* <!--
                SWIPPER SLIDER PARAMS
                
                data-effect="slide|fade|coverflow"
                data-autoplay="2500|false" 						(remove to disable autoplay)
            --> */}
            <div class="swiper-container" data-effect="slide" data-autoplay="false">
                <div class="swiper-wrapper">

                    {/* <!-- SLIDE 1 --> */}
                    <div class="swiper-slide" style="background-image: url('assets/images/grocery_index.jpg');">
                        <div class="overlay dark-4">
                            {/* <!-- dark overlay [1 to 9 opacity] --> */}
                        </div>
                        
                        <div class="display-table">
                            <div class="display-table-cell vertical-align-middle">
                                <div class="container">

                                    <div class="row">
                                        <div class="text-center col-md-8 col-12 offset-md-2">

                                            <h1 class="bold font-raleway wow fadeInUp" data-wow-delay="0.4s">WELCOME TO FOODSHOPPER</h1>
                                            <p class="lead font-lato fw-300 hidden-xs-down wow fadeInUp" data-wow-delay="0.6s">Stay home, stay safe, let me do the groceries for you.</p>
                                            <a class="btn btn-default btn-lg wow fadeIn hvr-icon-down" data-wow-delay="1.5s" href="#steps">SEE HOW IT WORKS</a>
                                            
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* <!-- /SLIDE 1 --> */}

                </div>
            </div>
                
        </section>
        {/* <!-- /SLIDER --> */}
    </div>);
}

export default Slider;