import React from 'react';
import ListView from './ListView';

const Header = () => 
(
    <div id="top-header">
        <div className="container clearfix">
			<div id="et-info">
				<span id="et-info-phone"><a href="tel:+35316531616">CALL +353 1 653 1616</a></span>
						<ListView />			
				</div> {/*<!-- #et-info -->*/}
				<div id="et-secondary-menu">
					<div className="et_duplicate_social_icons">
						<ListView />
					</div>
					<ul id="et-secondary-nav" className="menu">
						<li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-3359"><a href="https://eazysafe.com/">EN</a></li>
						<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3360"><a href="https://eazysafe.fr/">FR</a></li>
						<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7859"><a href="https://eazysafelc.com">Login</a></li>
					</ul>				
			</div> {/*<!-- #et-secondary-menu -->*/}
		</div>
    </div>
);
export default Header;