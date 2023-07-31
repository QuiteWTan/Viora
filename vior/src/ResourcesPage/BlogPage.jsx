import Navbar from "../Navbar"
import Blog1 from '../assets/Blog/Blog1.jpg'
import Blog2 from '../assets/Blog/Blog2.jpg'
import Blog3 from '../assets/Blog/Blog3.jpg'
import '../index.css'
import FirstBlogSection from "./BlogSection/FirstBlogSection"
import SecondBlogSection from "./BlogSection/SecondBlogSection"

const Blog = () => {
    return(
        <div className="flex flex-col ">
            <Navbar/>
            <div className="w-full flex flex-col items-center ">
                <FirstBlogSection Img1={Blog1} Img2={Blog2} Img3={Blog3}/>
                <SecondBlogSection Img1={Blog1} Img2={Blog2} Img3={Blog3}/>
            </div>
        </div>
    )
}

export default Blog