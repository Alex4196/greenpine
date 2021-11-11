import './App.css';
 /* import Cover from "./Components/Cover" */
import NavBar from './Components/NavBar/NavBar'; 
import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
/* import About from './Components/About/About'; */
import Slider from './Components/Slider/Slider';
/* import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import Personal from './Components/Personal/Personal'; */
import Nosotros from "./Components/Nosotros/Nosotros"
import Products from "./Components/Products/Products"
import Cover from "./Components/Cover/Cover"
 import Timeline from "./Components/Timeline/Timeline"  
 import Contactanos from "./Components/Contactanos/Contactanos"
 import Opinion from "./Components/Opinion/Opinion"
/*  import Historia from "./Components/Historia/Historia" */


function App() {

const [scrollHeight, setScrollHeight] = useState(0);

const handleScroll= () => {
  const position = window.pageYOffset;
  setScrollHeight(position);
}

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, [scrollHeight])

  return (
    <React.Fragment>
    <div className="App">
      <NavBar /* isScrolling={scrollHeight} */  />  
      <Cover/>

     {/*  <Cover />
      <About/> */}
       
      {/*  <Personal/> 
      <Info/>
       
      <Footer/> */}
     <Nosotros/>
     {/* <Historia/> */}
     <Slider/> 
     <Products/>
      <Timeline/>  
      <Opinion/>
      <Contactanos/>
     {/* <Route path="/services" component={Services} /> */}
      {/* <Switch>  */}
        {/* <Route path="/nostros" exact component={Nosotros} /> */}
   {/*      <Route path="/home"  component={Home} />
        <Route path="/recipecreate" component={RecipeCreate} />
        <Route path="/home" exact component={SearchBar} />
        <Route path="/:id" component={RecipeDetail} /> */}
      {/* </Switch> */}
      
     
    </div>
    {/* <Route path="/historia" component={Historia} /> */}
    </React.Fragment>
  );
}

export default App;


