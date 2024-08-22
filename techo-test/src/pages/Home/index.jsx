import logo from '@/assets/Assets/logo technopartner.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '@/features/home/homeSlice.js';
import { useEffect,useState } from 'react';
import QrCode from '../../components/qrcode/qrcode';
import Navbar from '../../components/navbar';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css";



const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, loading, error } = useSelector((state) => state.home);
    const token = useSelector((state) => state.auth.token);
    const [showQr, setShowQr] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        dispatch(fetchHomeData());
    }, [dispatch, navigate, token]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data || !data.result) return <p>No data available</p>;

    const { result } = data;

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-start gap-[2rem] pb-[4.8rem]">
                <div className='w-full p-1 h-[3rem] '>
                    <div className="w-[9rem] h-[5rem]">
                        <img src={logo} alt="" className="object-contain w-full h-full" />
                    </div>
                </div>
                <div className="bg-motif w-full h-[13rem] p-[1.5rem]">
                    <div className='bg-white w-full h-full shadow-md rounded-md p-3 flex flex-col items-center justify-center gap-1'>
                        <div className='flex items-start flex-col w-full'>
                            <p className='w-full'>{result.greeting}</p>
                            <p className='font-bold w-full'> {result.name} </p>
                        </div>
                        <div className='flex w-full gap-4 h-[4rem] items-center'>

                            <div className='flex w-[3.5rem] h-[3.5rem] rounded-full overflow-hidden cursor-pointer shadow-md' onClick={() => setShowQr(true)}>
                                <img src={result.qrcode} alt="" className='object-contain w-full h-full' />
                            </div>

                            <div className='flex w-3/4 h-full flex-col items-center  justify-center'>
                                <div className='flex w-full items-center justify-between '>
                                    <p>Saldo</p>
                                    <p>Rp {result.saldo}</p>
                                </div>
                                <div className='flex w-full items-center justify-between'>
                                    <p>point</p>
                                    <p>{result.point}</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className='w-full h-[14rem]'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {result.banner.map((imageUrl, index) => (
                            <SwiperSlide key={index}>
                                <img src={imageUrl} alt={`Banner ${index + 1}`} className='object-cover w-full h-full' />
                            </SwiperSlide>
                        ))}


                    </Swiper>

                </div>
                {showQr && <QrCode imgUrl={result.qrcode} onClose={() => setShowQr(false)} />}
                <Navbar/>
            </div>
        </>
    )

}

export default Home