import React from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer'
import FirstpageContainers from './containers/FirstpageContainers';
import CartContainer from './containers/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (








    <div className="App">

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<FirstpageContainers/>}   />
        
        <Route path="/Secondpage" element={[<HeaderContainer/>,<HomeContainer/>]} />

        <Route path='Secondpage/Cart' element={<CartContainer/>}   />
    
      </Routes>

    </BrowserRouter>

  </div>





  //   <div className="App">
  //  <FirstpageContainers />

  //     <HeaderContainer />

  //     <HomeContainer />
  //   </div>
  );
}

export default App;
