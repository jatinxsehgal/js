import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Contact from './contact';
import SplashCursor from '../src/blocks/Animations/SplashCursor/SplashCursor'

const home = () => {
    return (
        <div className="Home-Page -z-10">
            <SplashCursor />
            <Banner />
            <MyExpertise />
            <br/>            
            
            

            <Contact />
           

        </div>
    )
}

export default home