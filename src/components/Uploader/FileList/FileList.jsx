import React from 'react';
import scss from "./FileList.module.scss";
import FileItem from '../FileItem/FileItem';

const FileList = ({files, removeFile}) => {

    const deleteFileHandler = (name) => {
        removeFile(name)
    };

    return (
        <ul className={scss.file_list}>
            {files && files.map(file => <FileItem key={file.name} file={file} deleteFile={deleteFileHandler}/>)}
        </ul>
    );
};

export default FileList ; 