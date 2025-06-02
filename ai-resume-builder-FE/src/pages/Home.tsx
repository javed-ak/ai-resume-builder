import Navbar from '../components/Navbar'
import HeroSection from '../components/homeComponents/HeroSection'
import HowItWork from '../components/homeComponents/HowItWork'

function Home() {
    return (
        <div>
            <Navbar isSignedIn={true} />
            <HeroSection />
            <HowItWork />
        </div>
    )
}

export default Home