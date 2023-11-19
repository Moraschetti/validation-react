import './App.css';
import Footer from './Components/Footer/footer.jsx';
import Header from './Components/Header/header.jsx';
import Home from './Pages/Home/Home.jsx';
import AdoptPage from './Pages/Adoption/AdoptionPage';
import ComplaintsPage from 'Pages/Complaints/ComplaintsPage';
import InformationPage from 'Pages/Information/InformationPage';
import DonationPage from 'Pages/Donations/DonationPage';
import ContactPage from 'Pages/Contact/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/adopciones/mascotas' element={<AdoptPage/>}></Route>
          <Route path='/denuncias' element={<ComplaintsPage/>}></Route>
          <Route path='/informacion' element={<InformationPage/>}></Route>
          <Route path='/donaciones' element={<DonationPage/>}></Route>
          <Route path='/contacto' element={<ContactPage/>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
