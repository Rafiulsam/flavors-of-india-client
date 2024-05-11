import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FavBtn = () => {
    const [isSolid, setIsSolid] = useState(false)

    const handleClick = () => {
        setIsSolid(true)
        
    }

    // set current icon
    const currentIcon = isSolid ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>
    return (
        <div onClick={handleClick}>
            {currentIcon}
        </div>
    );
};

export default FavBtn;