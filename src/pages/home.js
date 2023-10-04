import SlideShow  from "../components/SlideShow"
import slides from "../slideImage.json"
const Home =()=>{
    return(
        <div>
            <SlideShow slides={slides}/>
        </div>
    )
}
export default Home