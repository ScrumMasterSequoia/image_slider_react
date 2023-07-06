import './App.css';
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData"

function App() {
  return (
    <ImageSlider slides={SliderData}/>
  );
}

export default App;

// source:

// https://www.youtube.com/watch?v=l1MYfu5YWHc

//Build a React Image Slider Carousel from Scratch Tutorial
