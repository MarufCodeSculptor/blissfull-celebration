import Services from '../../Components/Services/Services';
import Slider from '../../Components/Slider/Slider';
import SpecialFetures from '../../Components/specialFeature/SpecialFetures';
import useTittle from '../../Hooks/useTitle/useTittle';

const Home = () => {
  useTittle('(Home)  Blissfull_celebration');
  return (
    <div className="max-w-6xl mx-auto">
      <Slider />
      <Services />
      <SpecialFetures />
    </div>
  );
};

export default Home;
