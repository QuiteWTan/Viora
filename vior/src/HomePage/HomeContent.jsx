import Home1 from '../assets/Home/HomeContent1.jpg'

const HomeContent = () => {
    return(
        <div className='w-full flex flex-col'>
            <div className='max-w-[1500px] flex flex-row'>
                <div>
                    <img src={Home1} alt=""  className='w-full h-screen'/>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;