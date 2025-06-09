import Header from "./components/Header"
import TopHeader from "./components/TopHeader"
import Slider from "./components/Slider"
import UpcomingMatches from "./components/UpcomingMatches";
import CupCard from "./components/CupCard";
import MatchResults from "./components/MatchResults";
import LatestNews from "./components/LatestNews";
import EngTeam from "./components/EngTeam";
import TeamRanking from "./components/TeamRanking";
import OurSponser from "./components/OurSponser";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
function App() {


  return (
    <div className="main-container">
<TopHeader/>
       <Header/>
       <Slider/>
      
 <UpcomingMatches/>

   <LatestNews/>
   <MatchResults/>
   <TeamRanking/>
   <OurSponser/>
   <Footer/>
   <BottomFooter/>
   
    </div>
  )
}

export default App
