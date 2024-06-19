import React from 'react';
import scss from "./LogoList.module.scss";
import LogoItem from '../LogoItem/LogoItem';

const LogoList = ({submitDeletePhotoSlider, request}) => {

    const removePhotoSlider = (id) => {
        submitDeletePhotoSlider(id);
    };

    const elements = request.map(({ _id, ...props }) => {
        return (
            <LogoItem key={_id} {...props} _id={_id} removePhotoSlider={removePhotoSlider}/>
        );
    });

    return (
        <ul className={scss.list}>
            {elements}
        </ul>
    );
};

export default LogoList ; 