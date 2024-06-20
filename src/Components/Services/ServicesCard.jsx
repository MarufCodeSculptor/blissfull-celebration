/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        // eslint-disable-next-line react/prop-types
        src={service['service-imageurl']}
        alt={service['service-name']}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{service['service-name']}</h2>
      <p>{service['service-description']}</p>
      <div className="flex items-center mt-2">
        <img
          src={service['service-provider'].imageurl}
          alt={service['service-provider'].name}
          className="w-10 h-10 rounded-full"
        />
        <span className="ml-2">{service['service-provider'].name}</span>
      </div>
      <p className="mt-2 text-lg font-bold">${service['service-price']}</p>
    </div>
  );
};

export default ServicesCard;
