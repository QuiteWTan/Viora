import {Link} from 'react-scroll';

export const HandleScroll = ({Destination}) => {
    return(
        <div className='w-full h-full flex justify-center items-end absolute py-4'>
            <Link to={Destination} smooth={true}>
                <button className='flex flex-col items-center'>
                    <h1>View More</h1>
                    <box-icon name='chevrons-down'></box-icon>
                </button>
            </Link>
        </div>
    )
}

