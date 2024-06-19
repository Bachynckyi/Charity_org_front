import React from 'react';
import scss from "./LogoItem.module.scss";
import { RxCross1 } from "react-icons/rx";

const FileItem = ({_id, removePhotoSlider, photoSlider }) => {

    const handlePicker = () => {
        removePhotoSlider(_id);
    };

    return (
        <li className={scss.photoSlider_item} key={_id} onClick={handlePicker}>
            <img src={photoSlider} alt='partners' className={scss.slider_image}/>
            <button type='button' className={scss.button_delete} >     
                <RxCross1 className={scss.delete_icon}/>
            </button>
    </li>
    );
};

export default FileItem ; 