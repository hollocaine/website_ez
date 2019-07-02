import React, { Component } from 'react';
import dropDownListMenu from '../lists/DropDownListMenu';
import {subMenu} from '../lists/submenu.js';
//import DropDownTitleList from './';
// const checkForSub = (obj) => {
//         const submenu = obj.sub.map(sub_list => <li key={sub_list.id}>{sub_list.name}</li>
// }
class DropDownList extends Component {   
    // Don't call this.setState() here!
    constructor(props) {
        super(props);
        const pos = this.props.pos;
        this.state = dropDownListMenu(pos);
    }
    render() {
        let hasDropDown = false;
        //{hasSubmenu && list.sub.map(sub_list => <li key={sub_list.id} className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${sub_list.id}`}>{sub_list.name}</li>)}
         // eslint-disable-next-line array-callback-return
        const dropDown =  this.state.lists.map((list) => {
        if (list !== 0) {
                hasDropDown = true;
                const dropDown = <li id={`menu-item-${list.id}`} key={list.id} style={{ listStyleType: "none" }} className={`menu-item menu-item-type-post_type menu-item-object-page menu-item${list.id}`}>
                    <a href={`https://eazysafe.com${list.href}`}>
                        {list.name !== "Resources" ? list.name: subMenu.map(sub_list => <li key={sub_list.id} className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${sub_list.id}`}>{sub_list.name}</li>)}
                    </a>
                </li>
                return dropDown;
            } 
            return null;
        }
    )
    return  hasDropDown && <ul className="sub-menu">{dropDown}</ul>;
    }
}
export default DropDownList;
