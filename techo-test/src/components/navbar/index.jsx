import imgHome1 from "@/assets/Assets/home1.png";
import imgHome2 from "@/assets/Assets/home2.png";
import imgMenu1 from "@/assets/Assets/menu1.png";
import imgMenu2 from "@/assets/Assets/menu2.png";
import ButtonNavbar from './button-navbar';

const Navbar = () => {
    return (
        <div className="w-screen h-[4.8rem] p-2 flex justify-around items-center absolute bottom-0">
            <ButtonNavbar 
                label="home" 
                imgSrc={imgHome2} 
                activeImgSrc={imgHome1}
                route="/"
            />
            <ButtonNavbar 
                label="menu" 
                imgSrc={imgMenu2} 
                activeImgSrc={imgMenu1} 
                route="/menu"
            />
        
        </div>
    );
};

export default Navbar;
