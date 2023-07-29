import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({Ratings,Valid,Color}) => {
    
    return(
        <div className='flex flex-row items-center text-xs md:text-sm lg:text-md'>
            {[...Array(5)].map((_,i) => (
                <span key={i}>
                    { Valid ? 
                        Ratings > i ? 
                            (<AiFillStar color={Color} /> )
                                : 
                                (<AiOutlineStar/>)
                        :  (<AiOutlineStar/>)
                    }

                </span>
            ))}
        </div>
    )
}

export default Rating