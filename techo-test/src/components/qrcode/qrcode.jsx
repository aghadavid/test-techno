const QrCode = ({imgUrl, onClose }) =>{
    return(
        <>
        <div className="w-screen h-screen absolute top-0 left-0 z-[5] bg-white flex items-center justify-center flex-col p-2">
            <div className="absolute top-2 right-2 z-20 font-bold text-[2rem] cursor-pointer" onClick={onClose} >x</div>
            <p className="font-semibold">Show the QR Code below to the cashier</p>
            <div className="w-[16rem] h-[16rem] ">
            <img src={imgUrl} alt="" className="w-full h-full object-contain z-[6]"/>
            </div>
        </div>
        </>
    )

}

export default QrCode