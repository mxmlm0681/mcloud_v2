import React from 'react';
import { Link } from 'react-router-dom';
import type {ToFolderBtnProps} from '../../../models';



const ToFolderBtn: React.FC<ToFolderBtnProps> = ({ userId }) => {

    const onClickHandler = () => {
        window.sharedUserId = userId;
    };

    return (
        <Link
            to={`/folder`}
            onClick={onClickHandler}
            className="to-storage-btn"
        >
            to folder
        </Link>
    );
}
export default ToFolderBtn;