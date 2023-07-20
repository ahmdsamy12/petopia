import Blog from "./components/blog/Blog";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import MainHeader from "./components/main-header/MainHeader";
import Otheri from "./components/other-posts/Other";
import ServicesOne from "./components/services/services-part1/ServicesOne";
import ServicesTwo from "./components/services/services-part2/ServicesTwo";
import SocialHeader from "./components/social-header/SocialHeader";


function App() {
  return (
    <div className="App">
     <SocialHeader />
     <MainHeader />
     <ServicesOne />
     <ServicesTwo />
     <Blog />
     <Contacts />
     <Otheri />
     <Footer />
    </div>
  );
}

export default App;
