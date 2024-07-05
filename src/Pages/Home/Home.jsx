import Services from '../../Components/Services/Services';
import Slider from '../../Components/Slider/Slider';
import useTittle from '../../Hooks/useTitle/useTittle';

const Home = () => {

  useTittle('(Home)  Blissfull_celebration')
  return (
    <div className="max-w-6xl mx-auto">
      <Slider></Slider>
      <Services></Services>
    </div>
  );
};

export default Home;
