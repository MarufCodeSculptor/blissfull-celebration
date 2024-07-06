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
    providerImage,
    providerName,
    providerEmail,
  } = item;
  console.log(item);

  return (
    <>
      <div className="overflow-hidden flex flex-col md:flex-row bg-white rounded-lg shadow-md">
        <div className="md:w-1/2">
          <img className="object-cover w-full" src={imageURL} alt="Article" />
        </div>

        {/* right portions =>  */}
        <div className="md:w-1/2 py-10 px-5 flex flex-col item-center">
          {/* first div of right porstion */}
          <div>
            <div className="font-bold">
              Available : <span> {serviceArea} </span>
            </div>

            <h2 className="mt-2 text-2xl font-semibold text-gray-800  ">
              {serviceName}
            </h2>
            <p className="my-2 text-sm text-gray-800">{description}</p>
            <h2>
              <span className="text-xl font-bold text-blue-500">{price}</span>
              <span>$</span>
            </h2>
          </div>

          <hr className="my-10" />

          {/* second   div of right porstion */}
          <div className="mt-5  flex-grow">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={providerImage} alt={providerName} />
                </div>
              </div>
              <div>
                <div className="font-bold">{providerName}</div>
                <div className="text-sm opacity-50">{providerEmail}</div>
              </div>
            </div>
          </div>

          <div className="">
            <Link
              to={`/service/${_id}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more
            </Link>
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
