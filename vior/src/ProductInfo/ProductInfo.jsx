import { useLocation } from "react-router-dom";
import { useState } from "react";
import Product2 from '../assets/ProductInfo/DummyProduct1.png'
import Product3 from '../assets/ProductInfo/DummyProduct2.png'
import Product4 from '../assets/ProductInfo/DummyProduct3.png'
import Product5 from '../assets/ProductInfo/DummyProduct4.png'
import Navbar from '../Product/ShopNavbar'
import Rating from "../Product/Category/Rating";
import Swal from 'sweetalert2'

const ProductInfo = () => {
    const location = useLocation();
    const receivedData = location.state ;
    const ProductImageList = [receivedData.Image,Product3,Product4,Product5,receivedData.Image,Product3,Product4,Product5]
    const [qty, setQty] = useState(0)
    const [mainImage,setMainImage] = useState(receivedData.Image)
    const [index,setIndex] = useState(0)
    const [stock,setStock] = useState(receivedData.Stock)

    const changeImageDisplay = (ind) => {
        setMainImage(ProductImageList[ind])
        setIndex(ind)
    }
    const RenderBuyNotifications = () => {
        return (
          <div>
            {stock === 0 ? 
            (
            Swal.fire({
                icon: 'error',
                title: 'Confirm Purchase',
                text: 'Stock is empty',
                confirmButtonColor: '#3cb371',
            })
            )
            : qty > 0 ? 
                (
                Swal.fire({
                    icon: 'info',
                    title: 'Confirm Purchase',
                    html: `Furniture Name : ${receivedData.Name}<br /> Quantity: ${qty} <br /> Total Price: $${qty * receivedData.price} `,
                    showCancelButton: true,
                    confirmButtonColor: '#3cb371',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm'
                }).then((result) => {
                    if (result.isConfirmed) {
                    setStock(stock - qty);
                    setQty(0);
                    Swal.fire(
                        'Confirmed!',
                        'Your purchase has been successfully completed.',
                        'success'
                    );
                    }
                })
                ) 
                : 
                (
                Swal.fire({
                    icon: 'error',
                    title: 'Confirm Purchase',
                    text: 'Input The Correct Quantity',
                    confirmButtonColor: '#3cb371',
                })
                )}
          </div>
        );
      };

      const RenderCartNotifications = () => {
        return (
          <div>
            {stock === 0 ? 
            (
            Swal.fire({
                icon: 'error',
                title: 'Confirm Purchase',
                text: 'Stock is empty',
                confirmButtonColor: '#3cb371',
            })
            )
            : qty > 0 ? 
                (
                Swal.fire({
                    position:'center',
                    icon: 'success',
                    title: 'Your item has been added to cart',
                    showConfirmButton: false,
                    timer: 1500
                    })
                ) 
                : 
                (
                Swal.fire({
                    icon: 'error',
                    title: 'Confirm Purchase',
                    text: 'Input The Correct Quantity',
                    confirmButtonColor: '#3cb371',
                })
                )}
          </div>
        );
      };
      
    const SlideLeft = () => {
        let Slider = document.getElementById('Slider')
        Slider.scrollLeft = Slider.scrollLeft -300
    }

    const SlideRight = () => {
        let Slider = document.getElementById('Slider')
        Slider.scrollLeft = Slider.scrollLeft + 300
    }
    return (
        <div >
            <Navbar/>
            <div className="w-full flex justify-center items-center py-12 px-6 md:px-2">
                <div className="flex flex-col md:flex-row max-w-[1300px] justify-center py-2 gap-8 items-center">   
                    <div className="flex flex-col  gap-4 max-w-[500px] ">
                        <div className="border-2 border-gray-400 p-2 rounded-md w-full h-[350px] relative ">
                            <img src={mainImage} alt="" className="w-full h-full "/>
                        </div>  

                        <div className='relative flex items-center'>
                            <box-icon name='chevron-left' size='md' onClick={SlideLeft} ></box-icon>
                            <div id='Slider' className='w-full h-full overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth overflow-y-hidden'>  
                            {ProductImageList.map((img, ind) => (
                                <img
                                    src={img}
                                    alt=""
                                    key={ind}
                                    className={`w-[100px] h-[70px]  transition-transform duration-300 inline-block p-1 cursor-pointer ease-in-out border-2 ${
                                    index === ind ? 'border-2 border-gray-600' : 'border-transparent hover:scale-110'
                                    }`}
                                    onClick={() => changeImageDisplay(ind)}
                                />
                            ))}
                            </div>
                            <box-icon name='chevron-right' size='md' onClick={SlideRight}></box-icon>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-ysa text-lg font-bold ">{receivedData.Type} Furniture</h2>
                        <h1 className="text-3xl font- font-bold font-poppins">{receivedData.Name} </h1>
                        <h2 className="font-Robot text-gray-400 flex gap-2 py-1">
                            Sold : 200+  
                            <span className="flex flex-row">
                                Rating : <Rating Ratings={receivedData.ratings} Valid={true}/>
                            </span>
                        </h2>
                        <p className="max-w-[500px] flex flex-col  text-slate-800 py-1"> 
                            <h1 className="text-lg pb-1">Description : </h1>
                            <span className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                        </p>
                        <h1 className="font-Robot text-md text-gray-600 py-2">
                                Stock Available : {stock}
                        </h1>

                        <div className="font-poppins text-lg flex flex-row border rounded-md w-fit px-2">
                            <button onClick={() => qty > 0 ? setQty((prevQty) => prevQty - 1) : setQty((prevQty))}>-</button>
                            <h1 className="px-4">{qty}</h1>
                            <button onClick={() => qty < stock ? setQty((prevQty) => prevQty + 1) : setQty((prevQty))}>+</button>
                        </div>
                        <div className="w-fit flex flex-row gap-x-6 py-4 font-Robot font-bold">
                            <button className="text-white bg-slate-400 px-6 py-2 rounded-md hover:bg-slate-600 transition-all duration-300" onClick={() => RenderBuyNotifications()}>Purchase Now</button>

                            <button className="bg-gray-200 px-6 py-2 rounded-md text-gray-700 transition-all duration-300 transform hover:bg-gray-300 " onClick={() => RenderCartNotifications()}>
                            Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo