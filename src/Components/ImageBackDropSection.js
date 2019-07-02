import React from 'react';
import BlurbContainer from './BlurbContainer';

/*import Background from 'https://eazysafe.com/en/wp-content/uploads/2017/06/starting-a-new-job.jpg';*/

const ImageBackDropSection = () => 
(
    <div className="et_pb_section et_pb_section_0 et_pb_section_video et_pb_preload et_pb_with_background et_pb_section_parallax et_pb_inner_shadow et_section_regular">
                <div className="et_parallax_bg" ></div>
                <div className="et_parallax_bg" style={{backgroundImage: `url(${"https://eazysafe.com/en/wp-content/uploads/2019/05/Banner_home.png"})`}}></div>			
                    <div className="et_pb_row et_pb_row_0">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_0    et_pb_css_mix_blend_mode_passthrough et-last-child">
                            <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_bg_layout_light  et_pb_text_align_left">
                                <div className="et_pb_text_inner">
                                    <p style={{textAlign: 'center'}}>Which of these best describes you?</p>
                                </div>
                        </div> {/*<!-- .et_pb_text -->*/}
                    </div> {/*<!-- .et_pb_column -->*/}
                </div> {/*<!-- .et_pb_row -->*/}
                <div className="et_pb_row et_pb_row_1 et_pb_equal_columns et_pb_gutters2">
                    <div className="et_pb_column et_pb_column_1_4 et_pb_column_1    et_pb_css_mix_blend_mode_passthrough">
                        <div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_bg_layout_dark  et_pb_text_align_center  et_pb_blurb_position_top"> 
                            <BlurbContainer pos="1"/>
                        </div> {/*<!-- .et_pb_blurb -->*/}
                    </div> {/*<!-- .et_pb_column -->*/}
                    <div className="et_pb_column et_pb_column_1_4 et_pb_column_2    et_pb_css_mix_blend_mode_passthrough">
                        <div className="et_pb_module et_pb_blurb et_pb_blurb_1 et_pb_bg_layout_dark  et_pb_text_align_center  et_pb_blurb_position_top">
                            <BlurbContainer pos="2"/>
                        </div> {/*<!-- .et_pb_blurb -->*/}
                    </div> {/*<!-- .et_pb_column -->*/}
                    <div className="et_pb_column et_pb_column_1_4 et_pb_column_3    et_pb_css_mix_blend_mode_passthrough">
                        <div className="et_pb_module et_pb_blurb et_pb_blurb_2 et_pb_bg_layout_dark  et_pb_text_align_center  et_pb_blurb_position_top">
                            <BlurbContainer pos="3"/>
                        </div> {/*<!-- .et_pb_blurb -->*/}
                    </div> {/*<!-- .et_pb_column -->*/}
                    <div className="et_pb_column et_pb_column_1_4 et_pb_column_4    et_pb_css_mix_blend_mode_passthrough">
                        <div className="et_pb_module et_pb_blurb et_pb_blurb_3 et_pb_bg_layout_dark  et_pb_text_align_center  et_pb_blurb_position_top">
                            <BlurbContainer pos="4"/>
                        </div> {/*<!-- .et_pb_blurb -->*/}
                    </div> {/*<!-- .et_pb_column -->*/}
                </div> {/*<!-- .et_pb_row -->*/}
            </div>
);

export default ImageBackDropSection;
