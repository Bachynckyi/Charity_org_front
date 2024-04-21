import React from 'react';
import scss from "./FileItem.module.scss";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const FileItem = ({file, deleteFile}) => {

    return (
        <li className={scss.file_item} key={file.name}>
            <IoDocumentTextOutline className={scss.document_icon}/>
            <span className={scss.name}>{file.name}</span>
            <RxCross1 className={scss.delete_icon} onClick={() => {deleteFile(file.name)}}/>
        </li>
    );
};

export default FileItem ; 