const FeaturedProduct = ({ Data }) => {

    return (
        <div className='w-full h-full grid grid-cols-2 gap-x-2 grid-rows-feat2 md:grid-cols-feat md:grid-rows-feat1 md:gap-x-10 gap-y-8'>
            {
            Data.map((data,index) => (
                <div className='w-full h-full' key={index}>
                    <div className='h-4/5 w-full relative'>
                        <img src={data.Image} alt="" className='w-full h-full absolute'/>
                    </div>
                    <h1>{data.Name}</h1>
                    <p><span className='line-through'>{data.BeforePrice}</span>{data.AfterPrice}</p>
                </div>
            ))
        }
        </div>
    )
}

export default FeaturedProduct