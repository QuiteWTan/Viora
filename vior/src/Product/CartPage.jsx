import { useState } from "react";
import { CartState } from "../Context/Context"
import ShopNavbar from "./ShopNavbar"
import '../index.css'
import Faker from "faker";
import Swal from "sweetalert2";
const generateTransactionId = () => {
    const randomId = Faker.datatype.number({ min: 1000000000, max: 9999999999 });
    return randomId.toString();
  };

const CartPage = () => {
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        Cart.forEach((item) => {
          totalPrice += item.price * item.qty;
        });
        return totalPrice;
      };
    
    const {
        state:{Cart},
        dispatch
    } = CartState()

    const transactionId = generateTransactionId();
    const RenderPurchaseNotification = () => {
        Swal.fire({
            icon: 'info',
            title: 'Confirm Purchase',
            text: 'Are You Sure With Your Purchase?',
            showCancelButton: true,
            confirmButtonColor: '#3cb371',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Confirmed!',
                'Thank You For Your Purchase',
                'success'
            );
            dispatch({ type: "EMPTY_CART" });
            }
        })
    }
    return(
        <div>
            <ShopNavbar/>
            <div className='w-full flex flex-col items-center justify-center bg-slate-50' name='FirstHomeSection'>
                <div className='flex  w-full justify-center'>
                    {
                        Cart.length === 0 ? 
                        <div className='max-w-[1300px] py-28 col-span-2 '>
                            <div className="bg-white py-40 w-full flex justify-center items-center border-2 shadow-md px-24 ">
                                <h1 className="md:text-3xl text-gray-400 font-Robot">Your Cart is Empty ! Fill'em Up !</h1>
                            </div>
                        </div>
                        :
                        <div className='grid grid-cols-feat md:grid-cols-cart1 max-w-[1300px] py-10 px-4 lg:px-12  gap-12 col-span-2 font-Robot'>
                            <div className="flex flex-col">
                                <h1 className="font-poppins font-bold text-2xl md:text-xl pb-2">Order Summary </h1>
                                <div className=" bg-white rounded-md flex flex-col p-4 shadow-md border-2 w-full gap-6">
                                {Cart.map((item) => (
                                    <div className="flex flex-row justify-between w-full pb-4 border-b-2 border-gray-200" key={item.id}>
                                        <div className="flex flex-row gap-4  text-sm ">
                                            <div className="shadow-md border p-2">
                                                <img src={item.Image} alt="" className="w-[120px] h-[100px]"/>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-2xl text-gray-700">{item.Name}</h3>
                                                <p className="text-gray-400">Type: <span className="font-bold text-gray-600">{item.Type}</span></p>
                                                <p className="text-gray-400">Price:<span className="font-bold text-gray-600"> $ {item.price}</span></p>
                                                <p className="text-gray-400">Quantity: <span className="font-bold text-gray-600">{item.qty}</span></p>
                                                <p className="text-gray-400">Size: <span className="font-bold text-gray-600">{item.size}</span></p>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col items-center justify-center">
                                            <h1 className="text-3xl font-bold text-gray-500">$ {item.price * item.qty}</h1>
                                        </div>
                                    </div> 
                                ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-poppins font-bold text-2xl md:text-xl pb-2">Payment Details </h1>
                            <div className="max-w-[600px] bg-white rounded-md flex flex-col p-4 px-6 shadow-md border-2 justify-between gap-6">
                                <h1 className="py-1 text-center font-bold font-Robot text-lg text-gray-600 bg-slate-300"> Summary</h1>
                                <div className="flex flex-row justify-between font-bold font-poppins items-center text-gray-400">
                                    <h1 className=" text-sm">Transaction ID : </h1>
                                    <h1 className="text-md text-gray-600">{transactionId}</h1>
                                </div>
                                <div className="flex flex-row justify-between  font-poppins items-center gap-4">
                                    <input type="text" className="px-2 py-2 border focus:outline-gray-400 rounded-sm w-full" placeholder="COUPON CODE"/>
                                    <button className="text-white bg-slate-400 px-4 py-2 hover:bg-slate-500 transition-all duration-300 rounded-sm">Apply</button>
                                </div>
                                <div className="w-full">
                                    <hr className="w-full h-2  border-gray-400"/>
                                </div>
                                <div className="flex flex-row justify-between font-bold font-poppins items-center gap-4 text-sm">
                                    <h1 className="text-gray-400">Price Summary</h1>
                                    <h1 className="text-gray-600">$ {calculateTotalPrice()}</h1>
                                </div>
                                <div className="flex flex-row justify-between font-bold font-poppins items-center gap-4 text-sm">
                                    <h1 className="text-gray-400">Tax & Others (10%)</h1>
                                    <h1 className="text-gray-600">$ {calculateTotalPrice() * 10/100}</h1>
                                </div>
                                <div className="flex flex-row justify-between font-bold font-poppins items-center gap-4 text-sm">
                                    <h1 className="text-gray-400">Total Amount:</h1>
                                    <h1 className="text-gray-600">$ {calculateTotalPrice() + (calculateTotalPrice() * 10/100)}</h1>
                                </div>
                                <div className="w-full">
                                    <hr className="w-full h-2  border-gray-400"/>
                                </div>
                                <button className="text-white bg-slate-400 px-4 py-2 hover:bg-slate-500 transition-all duration-300 rounded-sm" onClick={() => RenderPurchaseNotification()}>Confirm Purchase</button>
                            </div> 
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
            
    )
}

export default CartPage