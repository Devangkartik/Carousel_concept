
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'

function App() {


   const country = "india";
  return (
    <div className="App">
       {/* <Header/> */}
    <Header cntryName={country}/>
    <ImageSlider/>
    </div>
  );
}

export default App;
