import React from 'react';
import scss from "./FileItem.module.scss";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const FileItem = ({file, deleteFile}) => {

    const fullNameArray = file.name.split(".");

    return (
        <li className={scss.file_item} key={file.name}>
            <IoDocumentTextOutline className={scss.document_icon} style={{width: 20, height: 20}}/>
            <span className={scss.name}>{fullNameArray[0]}</span>
            <span className={scss.type}>.{fullNameArray[1]}</span>
            <RxCross1 className={scss.delete_icon} onClick={() => {deleteFile(file.name)}}/>
        </li>
    );
};

export default FileItem ; 