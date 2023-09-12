import { useState } from "react";
import ShopNavbar from "../Product/ShopNavbar"
import { motion,AnimatePresence } from "framer-motion"
import '../ResourcesPage/BlogSection/Help.css'
const HelpCenterPage = () => {
    const tabs = [
        {
            title:'What is Vior?',
            Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title:'How to get refund?',
            Content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        },
        {
            title:'Any other payment method?',
            Content:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title:'How to request partnership',
            Content:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title:'How to change Account ?',
            Content:" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
    ]
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const HelpCenterList = [
        {
            Title:'Getting Started',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            Title:'My Account',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            Title:'Refund',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            Title:'Payout',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            Title:'Connection',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            Title:'Transaction',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            Title:'Partnership',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            Title:'Payment Method',
            Content:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        ]
    return(
        <div>
            <ShopNavbar showSearch={false}/>
            <div className="w-full flex flex-col justify-center">
                <div className="w-full flex justify-center py-6 px-4">
                    <div className="flex flex-col max-w-[1200px] justify-center">
                        <div className="grid grid-cols-stretch gap-4 ">
                            <h1 className="text-4xl text-gray-500 font-ysa px-2">How can we help ? </h1>
                            <div className=" bg-white w-full md:w-1/2 flex justify-between p-1 items-center px-2 border-2 rounded-md">
                                <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="Any Help?"/>
                                <button className="bg-slate-400 py-2 px-8 rounded-md text-white"> Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center py-6 px-4 text-center">
                    <div className="flex flex-col max-w-[1200px] justify-center">
                        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-4">
                            {HelpCenterList.map((Help,index) => (
                                <div className="flex flex-col justify-center items-center bg-white border shadow-md p-4 py-6">
                                    <h1 className="text-lg md:text-2xl font-ysa">{Help.Title}</h1>
                                    <div className="py-3 w-full flex justify-center">
                                        <hr className="w-1/5 border-2 border-slate-600" />
                                    </div>
                                    <p className="text-sm text-center">{Help.Content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center py-6 px-4 bg-slate-50">
                    <div className="flex flex-col max-w-[1200px] justify-center overflow-hidden">
                        <div>
                            <h1 className="text-xl font-poppins py-4 font-bold"> Frequently Asked Questions</h1>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-4">
                                {tabs.map((item) => (
                                    <li
                                    className={`text-gray-400 py-6 md:py-4 w-full md:w-[250px]  ${item.title === selectedTab.title ? "text-gray-600 font-bold" : ""} `}
                                    onClick={() => setSelectedTab(item)}
                                    >
                                    <h1 className="text-sm md:text-md">{`${item.title}`}</h1>
                                    
                                    {item.title === selectedTab.title ? (
                                        <motion.div className="underline" layoutId="underline" />
                                    ) : null}
                                    </li>
                                ))}
                                </ul>
                                <div className="overflow-hidden bg-white shadow-md border p-4 md:p-6">
                                    <AnimatePresence>
                                        <motion.div
                                            key={selectedTab ? selectedTab.Content : "empty"}
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="max-h-[800px] md:max-h-[0px] max-w-[700px] font-poppins">
                                                <h1 className="text-lg md:text-2xl font-bold pb-2 ">Answer</h1>
                                                <h1 className="text-xs sm:text-sm md:text-lg">{selectedTab ? selectedTab.Content : ''}</h1>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HelpCenterPage