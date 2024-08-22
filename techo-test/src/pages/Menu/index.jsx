import { fetchMenuSlice } from '../../features/menu/menuSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar from '../../components/navbar';


const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, loading, error } = useSelector((state) => state.menu);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        dispatch(fetchMenuSlice());
    }, [dispatch, navigate, token]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No data availsable</p>;

    const { result } = data

    return (
        <>
            <h1 className='w-full text-center'>Menu</h1>
            <div className="w-full h-screen flex flex-col items-center justify-start ">
            <div className='overflow-hidden w-full flex '>
            {result.categories.map((category, index) => (
                <p className='border-b-4 border-black font-bold mb-4 p-2'>{category.category_name}</p>
            ))}
            </div>
      
                <div>
                    {result.categories.map((category, index) => (
                        <div key={index} className="w-full h-full px-4">
                            <h2 className="text-[1.2rem] font-bold ">{category.category_name}</h2>
                            <div >
                                {category.menu.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center justify-start h-[10rem] text-[0.75rem] px-2 shadow-md">
                                        <div className=' h-[4rem] w-[4rem] '>
                                            <img src={item.photo} alt={item.name} className="object-cover w-full h-full" />
                                        </div>
                                        <div className='flex-col w-3/5 px-2'>
                                            <p >{item.name}</p>
                                            <p >{item.description}</p>
                                        </div>
                                        <p className=" w-1/5 p-1">{item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Navbar />
        </>
    )

}

export default Menu