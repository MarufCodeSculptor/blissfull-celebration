import { useEffect, useState } from 'react';
import server from '../../Hooks/AxiosBase/AxiosBase';
import ServicesCard from './ServicesCard';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    server.get('/services').then(res => setServices(res.data));
  }, []);

  return (
    <div>
      {/* section intro =>  */}
      <div>
        <h2 className="text-3xl font-bold text-center my-5 border-2 p-10 bg-pink-200">
          Transform Your Vision into Reality: Our Services
        </h2>
        <p className="text-center">
          Explore our wide range of professional event-management services
          designed to make your special occasions unforgettable. From
          comprehensive wedding planning to corporate event management, our
          experienced service providers are dedicated to delivering exceptional
          experiences tailored to your needs. Discover the perfect service for
          your next event and let us handle the details, ensuring a seamless and
          memorable occasion
        </p>
      </div>

      {/* all services container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
        {services.map(service => (
          <ServicesCard key={service._id} service={service}  ></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
