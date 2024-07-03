import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Loadng/Loading';

const ServicesDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const params = useParams();
  

  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/service/${params.id}`);
      return data;
    },
    queryKey: ['service'],
  });
if(isLoading){
  return <Loading/>
}
if(error){
  return <div>error: {error.message}  </div>
}
if(!data){
  return <div> no data availabe   </div>
}

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
  } = data;

  return (
    <div>
      {/* -----------------------section heading ------------------ */}
      <div className="text-center border  p-10">
        <h2 className="text-2xl font-bold">Service Overview</h2>
        <p className="text-gray-900">
          Welcome to our comprehensive service details! Here, you will find all
          the necessary information about the service you're interested in,
          ensuring you can make an informed decision
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                  <span className="text-xl font-bold text-blue-500">
                    {price}
                  </span>
                  <span>$</span>
                </h2>
              </div>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <Link
                  to={`/service/${_id}`}
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
      </div>
    </div>
  );
};

export default ServicesDetails;
