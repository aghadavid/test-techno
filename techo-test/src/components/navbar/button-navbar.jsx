import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveItem } from '@/features/navbar';
import { useNavigate } from 'react-router-dom';

const ButtonNavbar = ({ imgSrc, activeImgSrc, label, route }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const activeItem = useSelector((state) => state.navbar.activeItem);

    const handleActive = () => {
        dispatch(setActiveItem(label));
        navigate(route)
    };

    return (
        <div 
            className="w-[3.9rem] h-[3.9rem] p-1 flex flex-col items-center justify-center cursor-pointer"
            onClick={handleActive}
        >
            <div className="w-[3.5rem] h-[3.5rem] overflow-hidden ">
            <img 
                    src={activeItem === label ? activeImgSrc : imgSrc} 
                    alt={label} 
                    className="object-contain w-full h-full" 
                />
            </div>
            <p>{label}</p>
        </div>
    );
};

export default ButtonNavbar;
