import React from 'react';
import list from '../lists/ListBlurb';

const styleColor= {
    color: "#ffffff"
}

const blurbContainerList = (styleColor,list,index) => {
    return (
        <div>
            <span style={styleColor}>
                    {list[index].name.map((item, index) => <a style={styleColor} key={index} href={list[index].headerHref + list[index].link[index]}><li style={{ listStyleType: "none" }} key={index}>{item}</li></a>)}
            </span>
        </div>
    );
}
const createVideoComponent = (list,props) => {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if ( parseInt(element.id) ===  parseInt(props.pos)) {
            return (
                <div className="et_pb_blurb_content">
                    <div className="et_pb_main_blurb_image"><a href={list[index].headerHref}><span className="et_pb_image_wrap"><span className="et-pb-icon et-waypoint et_pb_animation_top">&#xe0ff;</span></span></a>
                    </div>
                    <div className="et_pb_blurb_container">
                    <h4 className="et_pb_module_header"><a href={list[index].headerHref}>{list[index].headingName}</a></h4>
                    <div className="et_pb_blurb_description">
                        {blurbContainerList(styleColor,list,index,props)}
                        <br />
                    </div>
                </div>
            </div>
            );
        }
    }
}

const BlurbContainer = (props) => 
(
    <div className="et_pb_blurb_content">
        {createVideoComponent(list,props)}
    </div>
);

export default BlurbContainer;
