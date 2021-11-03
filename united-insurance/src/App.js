import Header from "./Components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Benifits from "./Components/Benifits";
import OurAchievments from "./Components/OurAchievments";
import Promotions from "./Components/Promotions";
import Frequently from "./Components/Frequently";
import Blogs from "./Components/Blogs";
import OurCustomer from "./Components/OurCustomer";
import Footer from "./Components/Footer";
import Steps from "./Components/Steps";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
      <Banner />
      <Services />
      <Steps />
      <Benifits />
      <OurAchievments />
      <Promotions />
      <Frequently />
      <Blogs />
      <OurCustomer />
      <Footer />
    </div>
  );
}

export default App;
