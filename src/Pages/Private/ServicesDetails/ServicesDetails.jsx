import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import { useParams } from 'react-router-dom';
import Loading from '../../Loadng/Loading';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';
import toast from 'react-hot-toast';

const ServicesDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const axiosSecure = UseAxiosSecure();
  const params = useParams();
  const [open, setOpen] = useState(false);

  // -------------------------------------------------------------------------------------
  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/service/${params.id}`);
      return data;
    },
    queryKey: ['service'],
  });
  // ---------------------------------------------------------------------------------

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
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const buyerName = user?.displayName;
  const buyerEmail = user?.email;
  const buyerImage = user?.photoURL;

  const handlePurchase = async e => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const date = form.date.value;
    const comment = form.comment.value;
    const status = 'pending';

    const purchaseInfo = {
      date,
      comment,
      status,
      provider: { providerEmail, providerName, providerImage },
      buyer: { buyerName, buyerEmail, buyerImage },
    };
    try {
      const {data} = await axiosSecure.post('/booked-services', purchaseInfo);
     await data?.insertedId && toast.success('posted successfully')
     onCloseModal();

    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div>
        {/* -----------------------section heading ------------------ */}
        <div className="text-center border p-10">
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

                  <button className="btn" onClick={onOpenModal}>
                    Book now
                  </button>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <h2 className="text-center text-xl my-5 capitalize">
            book your
            <span className="font-bold capitalize text-blue-500 mx-2">
              {serviceName}
            </span>
            today
          </h2>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-1/2  p-5 ">
              <div className="flex flex-col items-center justify-center">
                <img className="rounded-lg w-64 h-64" src={imageURL} alt="" />
                <div className="font-bold my-2">
                  <p className="text-sm"> {price}$ </p>
                  <h2 className="text-xl text-blue-700">{serviceName}</h2>
                  <p>ID:{_id}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handlePurchase} className="md:w-1/2  p-5">
              <div>
                <h2 className="text-xl capitalize font-bold">
                  provider information
                </h2>
                <div className="flex items-enter justify-start gap-2 my-2">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={providerImage} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-base">{providerName}</h2>
                    <span className="text-xs"> {providerEmail} </span>
                  </div>
                </div>
              </div>

              <hr className="border border-gray-800" />
              <div className="my-5">
                <h2 className="text-lg font-bold capitalize">
                  your informaion
                </h2>

                <div>
                  <span>{user?.displayName}</span>
                </div>
                <div>
                  <span className="text-xs">{user?.email}</span>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-bold"> Your comments </span>
                  </label>
                  <textarea
                    name="comment"
                    className="textarea textarea-primary"
                    placeholder="message"
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary"> Purchase </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ServicesDetails;
