import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  const {
    _id,
    imageURL,
    serviceName,
    price,
    description,
    providerImage,
    providerName,
  } = service;

  return (
    <div className="rounded-lg shadow-lg">
      <img
        // eslint-disable-next-line react/prop-types
        src={imageURL}
        alt={serviceName}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className='p-3'>
        <h2 className="text-xl font-bold mt-2">{serviceName}</h2>
        <p>{description}</p>
        <div className="flex items-center mt-2">
          <img
            src={providerImage}
            alt={providerName}
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2">{providerName}</span>
        </div>
        <div className="flex justify-between">
          <p className="mt-2 text-lg font-bold">${price}</p>
          <Link className="btn" to={`/service/${_id}`}>
            {' '}
            Details...
          </Link>
        </div>
      </div>

      
    </div>
  );
};

export default ServicesCard;
