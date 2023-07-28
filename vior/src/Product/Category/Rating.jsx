const Rating = ({Ratings,onClick}) => {
    let Valid = true;
    const CheckRating = (i) => {
        const [tempRating, setTempRating] = useState(0)
        if(tempRating === Ratings){
            Valid =  false;
        }else{
            Valid = true;
        }
        setTempRating(Ratings)
        onClick(i)
    }
    return(
        <div>
            {[...Array(5)].map((_,i) => (
                <span key={i} onClick={() => CheckRating(i)}>
                    { Valid ? 
                        Ratings > i ? 
                            (<box-icon type='solid' name='star' size='17px' ></box-icon> )
                                : 
                                (<box-icon name='star' size='17px'></box-icon>)
                        : (<box-icon name='star' size='17px'></box-icon>)
                    }

                </span>
            ))}
        </div>
    )
}

export default Rating