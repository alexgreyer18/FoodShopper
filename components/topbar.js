const Topbar = ()=> {
    
    return (
    <div>
        <div id="topBar">
        <div>

            {/* <!-- right --> */}
            <ul class="top-links list-inline float-right">
                <li class="text-welcome hidden-xs-down">Welcome to FoodShopper, <strong>Benjamin</strong></li>
                <li>
                    <a class="dropdown-toggle no-text-underline" data-toggle="dropdown" href="#" ><i class="fa fa-user hidden-xs-down"></i> MY ACCOUNT</a>
                    <ul class="dropdown-menu float-right">
                        <li><a tabindex="-1" href="#"><i class="fa fa-history"></i> ORDER HISTORY</a></li>
                        <li class="divider"></li>
                        <li><a tabindex="-1" href="#"><i class="fa fa-bookmark"></i> MY WISHLIST</a></li>
                        <li><a tabindex="-1" href="#"><i class="fa fa-edit"></i> MY REVIEWS</a></li>
                        <li><a tabindex="-1" href="#"><i class="fa fa-cog"></i> MY SETTINGS</a></li>
                        <li class="divider"></li>
                        <li><a tabindex="-1" href="#"><i class="glyphicon glyphicon-off"></i> LOGOUT</a></li>
                    </ul>
                </li>
                <li class="hidden-xs-down"><a href="assets/login.html">LOGIN</a></li>
                <li class="hidden-xs-down"><a href="page-register-1.html">REGISTER</a></li>
            </ul>

            {/* <!-- left --> */}
            <ul class="top-links list-inline">
                <li class="hidden-xs-down"><a href="page-faq-1.html">FAQ</a></li>
                <li>
                    <a class="dropdown-toggle no-text-underline" data-toggle="dropdown" href="#"><img class="flag-lang" src="assets/images/_smarty/flags/ca.png" width="16" height="11" alt="lang" /> ENGLISH</a>
                    <ul class="dropdown-langs dropdown-menu">
                        <li class="divider"></li>
                        {/* <!-- <li><a tabindex="-1" href="#"><img class="flag-lang" src="assets/images/_smarty/flags/it.png" width="16" height="11" alt="lang" /> ITALIAN</a></li> --> */}
                        <li><a tabindex="-1" href="#"><img class="flag-lang" src="assets/images/_smarty/flags/ca.png" width="16" height="11" alt="lang" /> FRANÇAIS</a></li>
                    </ul>
                </li>
                
            </ul>

        </div>
    </div>
    </div>);
}

export default Topbar;