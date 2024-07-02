/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  
  
  const {imageURL ,serviceName,price,description,providerImage,providerName}=service;
  
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        // eslint-disable-next-line react/prop-types
        src={imageURL}
        alt={serviceName}
        className="w-full h-48 object-cover rounded-md"
      />
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
      <p className="mt-2 text-lg font-bold">${price}</p>
    </div>
  );
};

export default ServicesCard;
