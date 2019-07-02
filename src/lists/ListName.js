import React from 'react'

const ListName = props => {
    console.log(this.props);
    return (
        <li id={`menu-item-${props.id}`} key={props.id} style={{ listStyleType: "none" }} className={`menu-item menu-item-type-post_type menu-item-object-page menu-item${props.id}`}>
        <a href={`https://eazysafe.com${props.href}`}>
            {props.name}
        </a>
        </li>
    )
}
export default ListName;