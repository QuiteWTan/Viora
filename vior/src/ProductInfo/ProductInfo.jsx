import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import Product2 from '../assets/ProductInfo/DummyProduct1.png'
import Product3 from '../assets/ProductInfo/DummyProduct2.png'
import Product4 from '../assets/ProductInfo/DummyProduct3.png'
import Product5 from '../assets/ProductInfo/DummyProduct4.png'
import Navbar from '../Product/ShopNavbar'
import Rating from "../Product/Category/Rating";
import Swal from 'sweetalert2'
import { motion,AnimatePresence } from "framer-motion"
import { CartState } from "../Context/Context";

const ProductInfo = () => {
    const {
        state:{Cart},
        dispatch
    } = CartState()

    useEffect(() => {
        console.log("Cart state updated:", Cart);
        console.log('Cart length:', Cart.length);
      }, [Cart]);

    const location = useLocation();
    const receivedData = location.state ;
    const ProductImageList = [receivedData.Image,Product3,Product4,Product5,receivedData.Image,Product3,Product4,Product5,receivedData.Image,Product3,Product4,Product5]
    const [qty, setQty] = useState(0)
    const [mainImage,setMainImage] = useState(receivedData.Image)
    const [index,setIndex] = useState(0)
    const [stock,setStock] = useState(receivedData.Stock)
    const [size,setSize] = useState(null)
    const ListInformation = [
        {
        Title : "Details",
        Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        },
        {
        Title : "Description",
        Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        },
        {
        Title : "Materials",
        Content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
        }
    ]


    const [buttonList,setButtonList] = useState([true,false,false])
    const Button = (index) => {
        const Buttons = [...buttonList]
        if(Buttons[index] == true){
            Buttons[index] = false
            for(let i=0;i<Buttons.length;i++){
                Buttons[i] = false
            }
        }else{
            for(let i=0;i<Buttons.length;i++){
                Buttons[i] = false
            }
            Buttons[index] = true
        }
        setButtonList(Buttons)
    }

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
            : qty > 0 && size != null? 
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
                    text: 'Input The Correct Quantity and Size',
                    confirmButtonColor: '#3cb371',
                })
                )}
          </div>
        );
      };
      const StockEmptyNotification = () => {
        Swal.fire({
            icon: 'error',
            title: 'Confirm Purchase',
            text: 'Stock is empty',
            confirmButtonColor: '#3cb371',
        })
      }

      const CorrectInputNotification = ( ) => { 
        Swal.fire({
            icon: 'error',
            title: 'Confirm Purchase',
            text: 'Input The Correct Quantity and Size',
            confirmButtonColor: '#3cb371',
        })
      }

      const AddToCartNotification = () => {
        Swal.fire({
            position:'center',
            icon: 'success',
            title: 'Your item has been added to cart',
            showConfirmButton: false,
            timer: 1500
            }) 
      }
      
      const RenderCartNotifications = () => {
        if(stock===0){
            return StockEmptyNotification();
        }else if(qty < 0 || size === null){
            return CorrectInputNotification()
        }else{
            dispatch({
                type:"ADD_TO_CART",
                payload:receivedData,
                qty: qty,
                size: size
            })
            return AddToCartNotification()
        }
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
        <div>
            <Navbar/>
            <div className="w-full flex justify-center items-center py-20 pb-28 md:py-10 px-6 md:px-2">
                <div className="flex flex-col md:flex-row max-w-[1300px] justify-center py-10 gap-8 ">   

                    <div className="flex flex-col  gap-4 max-w-[600px] ">
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
                        <h1 className="font-Robot text-xs lg:text-sm text-gray-400 flex gap-2 py-1 max-w-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h1>
                        
                        <div className="flex max-w-[300px] gap-4 items-center justify-center text-center py-2 pb-4">
                            <h1 className={`flex-1 p-4 rounded-sm shadow-md border hover:bg-gray-50 transition-all duration-300 ${size == 'SM' ? 'bg-gray-100' : ''}`} onClick={() => setSize('SM')}>SM</h1>
                            <h1 className={`flex-1 p-4 rounded-sm shadow-md border hover:bg-gray-50 transition-all duration-300 ${size == 'MD' ? 'bg-gray-100' : ''}`} onClick={() => setSize('MD')}>MD</h1>
                            <h1 className={`flex-1 p-4 rounded-sm shadow-md border hover:bg-gray-50 transition-all duration-300 ${size == 'LG' ? 'bg-gray-100' : ''}`} onClick={() => setSize('LG')}>LG</h1>
                            <h1 className={`flex-1 p-4 rounded-sm shadow-md border hover:bg-gray-50 transition-all duration-300 ${size == 'XL' ? 'bg-gray-100' : ''}`} onClick={() => setSize('XL')}>XL</h1>
                        </div>
                        <div className="font-poppins text-xl flex flex-row border rounded-md w-fit px-2 py-1">
                            <button onClick={() => qty > 0 ? setQty((prevQty) => prevQty - 1) : setQty((prevQty))}>-</button>
                            <h1 className="px-4">{qty}</h1>
                            <button onClick={() => qty < stock ? setQty((prevQty) => prevQty + 1) : setQty((prevQty))}>+</button>
                        </div>
                        <h1 className="font-Robot text-md text-gray-600 py-2">
                                Stock Available : {stock}
                        </h1>
                    </div>

                </div> 
            </div>
            <div className="w-full bg-gray-50 py-20 pb-24 px-12">
                <div className="flex flex-col max-w-[1300px] justify-center py-2 gap-8 ">
                    <div className="flex flex-row items-center  gap-x-4 px-48 text-xl font-poppins">
                        {
                            ListInformation.map((info,index) => (
                                <button className={` py-1 px-2 ${buttonList[index]? 'border-gray-600 border-b-2' : ''}`} onClick={() => Button(index)}>{info.Title}</button>
                                
                            ))
                            
                        }
                    </div>
                    <div className="flex items-center  px-48 font-ysa">
                        {
                            ListInformation.map((info,index) => (
                                <div>
                                    {
                                        buttonList[index]   ? 
                                            <h1>{info.Content}</h1> : ''
                                    }    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>                           
            {
                qty > 0 && size != null ? 
                    <div className="w-full fixed bottom-0 left-0 flex flex-row justify-between items-center px-2 border border-gray-200 font-Robot bg-white">
                        <div className="flex flex-row items-center">
                            <div className="text-sm md:text-xl border-r-2 border-gray-200  py-12 md:py-6 px-1 md:px-4 text-center">
                                <h1>Order Summary</h1>
                            </div>
                            <div className="flex flex-col font-Robot px-1 sm:px-2 md:px-4">
                                <h1 className="font-bold text-sm sm:text-md md:text-xl">{receivedData.Name} ({qty})</h1>  
                                <h1 className="text-xs sm:text-sm md:text-lg">Furniture Size : {size}</h1>
                            </div> 
                        </div>
        
                        <div className="w-fit flex flex-row gap-x-2 md:gap-x-6 font-Robot font-bold items-center">
                            <h1 className="font-bold font-poppins text-sm sm:text-lg md:text-3xl w-[100px] md:w-[150px]">$ {qty * receivedData.price}</h1>
                            <div className="flex flex-col md:flex-row items-center gap-2 text-xs md:text-md w-full ">
                                <button className="w-full text-white bg-slate-400 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-sm hover:bg-slate-600 transition-all duration-300" onClick={() => RenderBuyNotifications()}>Purchase Now</button>
            
                                <button className="w-full bg-gray-200 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-sm text-gray-700 transition-all duration-300 transform hover:bg-gray-300 " onClick={() => RenderCartNotifications()}>
                                Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                        :
                        ''            
            }
                    

            
        </div>
    );
}

export default ProductInfo