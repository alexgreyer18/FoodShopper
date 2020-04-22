const Navbar = ()=> {
    
    return (
    <div>
        {/* TOP NAV */}
        <header id="topNav">
            <div class="full-container">

                {/* <!-- Mobile Menu Button --> */}
                <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>

                {/* <!-- Logo --> */}
                <a class="logo float-left" href="index.html">
                    <img src="../assets/images/FoodShopperBadge.png" alt="" />
                </a>

                {/* <!-- 
                    Top Nav 
                    
                    AVAILABLE CLASSES:
                    submenu-dark = dark sub menu
                --> */}
                <div class="navbar-collapse collapse float-right nav-main-collapse">
                    <nav class="nav-main">

                        {/* <!--
                            NOTE
                            
                            For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
                            Direct Link Example: 

                            <li>
                                <a href="#">HOME</a>
                            </li>
                        --> */}
                        <ul id="topMain" class="nav nav-pills nav-main">
                            <li class="dropdown">
                                {/* <!-- HOME --> */}
                                <a class="dropdown-toggle" href="#">
                                    HOME
                                </a>
                            </li>
                            <li class="dropdown">
                                {/* <!-- PRICING --> */}
                                <a class="dropdown-toggle" href="#pricing">
                                    PRICING
                                </a>
                            </li>
                            <li class="dropdown">
                                {/* <!-- FORM --> */}
                                <a class="dropdown-toggle" href="#form">
                                    DELIVERY FORM
                                </a>
                            </li>
                        </ul>

                    </nav>
                </div>

            </div>
        </header>
        {/* <!-- /Top Nav --> */}
    </div>);
}

export default Navbar;