import { useState } from "react";
import { CartState } from "../Context/Context"
import ShopNavbar from "./ShopNavbar"
import '../index.css'
import Faker from "faker";

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
    } = CartState()

    const transactionId = generateTransactionId();
    return(
        <div>
            <ShopNavbar/>
            <div className='w-full flex flex-col items-center justify-center bg-slate-50' name='FirstHomeSection'>
                <div className='flex grid-cols-cart1 max-w-[1200px]'>
                    {
                        Cart.length === 0 ? 
                        <div className='max-w-[1200px] py-28 col-span-2 '>
                            <div className="bg-white py-40 w-full flex justify-center items-center border-2 shadow-md">
                                <h1 className="text-3xl text-gray-400 font-Robot">Your Cart is Empty ! Fill'em Up !</h1>
                            </div>
                        </div>
                        :
                        <div className='flex grid-cols-cart1 max-w-[1200px] py-10 px-8 md:px-12  gap-12 col-span-2 font-Robot'>
                            <div className="flex flex-col">
                                <h1 className="font-poppins font-bold text-xl pb-2">Order Summary </h1>
                                <div className=" bg-white rounded-md flex flex-col p-4 shadow-md border-2 px-6 w-full gap-8">
                                {Cart.map((item) => (
                                    <div className="flex flex-row items-center gap-4 justify-between w-full" key={item.id}>
                                        <div className="flex flex-row items-center gap-4  text-sm ">
                                            <div className="shadow-md border p-2">
                                                <img src={item.Image} alt="" className="w-[100px] h-[80px]"/>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl">{item.Name}</h3>
                                                <p className="text-gray-400">Price:<span className="font-bold text-black"> $ {item.price}</span></p>
                                                <p className="text-gray-400">Type: <span className="font-bold text-black">{item.Type}</span></p>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col items-center">
                                            <h1 className="text-gray-400 ">Total Price: </h1>
                                            <h1 className="text-lg font-bold">$ {item.price * item.qty}</h1>
                                        </div>
                                        <div className="flex flex-row items-center gap-x-4">
                                            <h1 className="text-gray-400">Quantity: <span className="font-bold text-black">{item.qty}</span></h1>
                                            <h1 className='w-12 h-12 flex items-center justify-center font-bold rounded-sm shadow-md border'>{item.size}</h1>
                                        </div>
                                    </div> 
                                ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-poppins font-bold text-xl pb-2">Payment Details </h1>
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
                                <button className="text-white bg-slate-400 px-4 py-2 hover:bg-slate-500 transition-all duration-300 rounded-sm">Confirm Purchase</button>
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