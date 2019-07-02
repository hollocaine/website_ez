import React from 'react';
import DropDownTitleList from './DropDownTitleList';
import dropDownListMenuHeader from '../lists/DropDownListMenuHeader';

const MainHeader = () => 
(
    <header id="main-header" data-height-onload="66">
        <div className="container clearfix et_menu_container">
            <div className="logo_container">
                <span className="logo_helper"></span>
                    <a href="https://eazysafe.com/">
                        <img src="https://eazysafe.com/en/wp-content/uploads/2015/09/EazySAFE_Logo.png" alt="EazySAFE" id="logo" data-height-percentage="100" />
                    </a>
                </div>
                <div id="et-top-navigation" data-height="66" data-fixed-height="40">
                <nav id="top-menu-nav">
                        <ul id="top-menu" className="nav">
                            <DropDownTitleList dropDownListMenuHeader={dropDownListMenuHeader}/>
                            <li id="menu-item-3368" className="request-demo menu-item menu-item-type-post_type menu-item-object-page menu-item-3368"><a href="https://eazysafe.com/get-a-7-day-free-trial/">Request a Demo</a></li>
                        </ul>						
                </nav>
                    <div id="et_mobile_nav_menu">
                        <div className="mobile_nav closed">
                            <span className="select_page">Select Page</span>
                            <span className="mobile_menu_bar mobile_menu_bar_toggle"></span>
                        </div>
                    </div>				
            </div> {/*<!-- #et-top-navigation -->*/}
        </div> {/*<!-- .container -->*/}
        <div className="et_search_outer">
            <div className="container et_search_form_container">
                <form role="search" method="get" className="et-search-form" action="https://eazysafe.com/">
                <input type="search" className="et-search-field" placeholder="Search &hellip;" defaultValue="" name="s" title="Search for:" />					</form>
                <span className="et_close_search_field"></span>
            </div>
        </div>
    </header>
);
export default MainHeader;