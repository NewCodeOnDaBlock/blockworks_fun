import HeaderBar from './HeaderBar';
import TitleBar from './TitleBar';
// import ExchangeBar from './ExchangeBar';
import SectionBar from './SectionBar';
import LatestNewsSection from './LatestNewsSection';
import FeaturedSection from './FeaturedSection';
import KeyMetricsSection from './KeyMetricsSection';
import ExchangeBarBackup from './ExchangeBarBackup';
import Footer from './Footer';



const Home = ({
        latestNews,
        featuredNews,
        keyMetrics,
        coinData,
        isLoading,
        setIsLoading,
        isModalOpen,
        setIsModalOpen,
        isMenuOpen,
        setIsMenuOpen
    }) => {
    return (
    <div className='home'>
        <HeaderBar />
        <TitleBar 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
        />
        {/* <ExchangeBar isLoading={isLoading} setIsLoading={setIsLoading}/> */}
        <ExchangeBarBackup coinData={coinData} isLoading={isLoading}/>
        <SectionBar />
        <div className="section-one">
            <LatestNewsSection latestNews={latestNews} isLoading={isLoading} setIsLoading={setIsLoading}/>
            <FeaturedSection featuredNews={featuredNews} isLoading={isLoading} setIsLoading={setIsLoading}/>
            <KeyMetricsSection
                keyMetrics={keyMetrics}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
        <div lassName="section-two">
            <Footer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </div>
    </div>
    
    )
}

export default Home;