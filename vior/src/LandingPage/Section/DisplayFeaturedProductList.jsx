const FeaturedProduct = ({ Data }) => {

    return (
        <div className='w-full h-full grid grid-cols-2 gap-x-2 grid-rows-feat2 md:grid-cols-feat1 md:grid-rows-feat1 md:gap-x-5 gap-y-8 '>
            {
            Data.map((data,index) => (
                <div className='w-full h-full rounded-md overflow-hidden ' key={index}>
                    <div className='h-4/5 w-full relative'>
                        <img src={data.Image} alt="" className='w-full h-full absolute'/>
                    </div>
                    <div className="p-2">
                        <h1 className=' font-bold font-poppins text-gray-400'>{data.Name}</h1>
                        <p className='text-sm font-poppins'><span className='line-through '>{data.BeforePrice}</span> {data.AfterPrice}</p>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default FeaturedProduct