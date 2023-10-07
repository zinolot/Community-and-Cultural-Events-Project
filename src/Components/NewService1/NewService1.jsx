import img1 from '../../assets/service1.jpg'

const NewService1 = () => {
    return (
        <div>
            <h2 className="text-5xl mb-5 font-bold">Exciting Entertainment</h2>
           <div className="grid mt-10 grid-cols-2 ">
            <div className='col-span-1'>
                <img src="https://i.ibb.co/WDCgGj1/dance-2902034-1280.jpg?fbclid=IwAR2FOrWWHMykiEBReM2-VwTev1Y1dGus4Bd156R30zejDh2_l_ectU1hcmk" alt="" />
            </div>
            <div className='mt-36'>
                <p className="text-xl font-semibold">
                Get ready to immerse yourself in a whirlwind of cultural delights! Our city is abuzz with excitement as the annual International Food and Music Festival kicks off this weekend, promising a tantalizing fusion of global flavors and toe-tapping beats.See you there!
                </p>
            </div>
           </div>
        </div>
    );
};

export default NewService1;