import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pprofile from './Component/Profile/Pprofile/pprofile';
import FullName from "./Component/Profile/Name/name";
import Adress from './Component/Profile/Address/address';
import Contact from './Component/Profile/contact/contact';


function App() {
  return (
    <>
   <Pprofile/>
   <FullName />
   <Adress />
   <Contact/>


 </>
  );
}

export default App;
