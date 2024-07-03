import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import { useParams } from 'react-router-dom';
import Loading from '../../Loadng/Loading';
import Modal from 'react-modal';
import { useState } from 'react';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const ServicesDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const params = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);

  // -------------------------------------------------------------------------------------
  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/service/${params.id}`);
      return data;
    },
    queryKey: ['service'],
  });
  // ---------------------------------------------------------------------------------

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>error: {error.message} </div>;
  }

  if (!data) {
    return <div> no data availabe </div>;
  }
  // --------------------------------------------------------

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
    <>
      <div>
        {/* -----------------------section heading ------------------ */}
        <div className="text-center border  p-10">
          <h2 className="text-2xl font-bold">Service Overview</h2>
          <p className="text-gray-900">
            Welcome to our comprehensive service details! Here, you will find
            all the necessary information about the service you're interested
            in, ensuring you can make an informed decision
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className=" bg-white rounded-lg shadow-md dark:bg-gray-800">
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

                  <button className=" btn" onClick={openModal}>
                    {' '}
                    Book now{' '}
                  </button>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default ServicesDetails;
