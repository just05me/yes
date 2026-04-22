import SwipeSlider from './components/SwipeSlider.jsx';
import {
  Slide1, Slide2, Slide3, Slide4, Slide5,
  Slide6, Slide7, Slide8, Slide9, Slide10,
} from './components/slides/index.js';

export default function App() {
  return (
    <SwipeSlider>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
    </SwipeSlider>
  );
}
