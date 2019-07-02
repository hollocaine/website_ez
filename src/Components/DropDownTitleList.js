import React from 'react';
import DropDownList from './DropDownList';

const DropDownTitleList = props => {   
        return (
                props.dropDownListMenuHeader.map((list, index) => 
                <li id={`menu-item-${list.id}`} key={index} style={{ listStyleType: "none" }} className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children ${list.id}`}>
                    <a href={`https://eazysafe.com${list.href}`}>
                        {list.name}
                    </a>
                    <DropDownList pos={list.pos}/>
                </li>
            )
        );
}
export default DropDownTitleList;