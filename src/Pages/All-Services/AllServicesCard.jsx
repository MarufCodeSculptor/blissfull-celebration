import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AllServicesCard = ({ item }) => {
  const {
    _id,
    imageURL,
    serviceName,
    price,
    serviceArea,
    description,
    providerEmail,
    providerImage,
    providerName,
  } = item;

  return (
    <>
      <div className="max-w-2xl flex   overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={imageURL}
          alt="Article"
        />
        <div className="p-6">
          <div>
            <span className="text-white font-bold">
              Available : <span> {serviceArea} </span>
            </span>
            <div className="flex items-center justify-between text-white">
              <a
                href="#"
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                {serviceName}
              </a>
              <h2>
                <span className="text-xl font-bold text-blue-500">{price}</span>
                <span>$</span>
              </h2>
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <Link to={`/service/${_id}`}
               
                className="text-blue-600 dark:text-blue-400 hover:underline"
               
              >
                Read more
              </Link>
              <div className="">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={providerImage}
                    alt="Avatar"
                  />
                  <a
                    href="#"
                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    tabIndex="0"
                    role="link"
                  >
                    {providerName}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
AllServicesCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default AllServicesCard;
