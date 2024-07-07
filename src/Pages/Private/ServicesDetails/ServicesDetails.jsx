import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import { useParams } from 'react-router-dom';
import Loading from '../../Loadng/Loading';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';
import toast from 'react-hot-toast';
import useTittle from '../../../Hooks/useTitle/useTittle';

const ServicesDetails = () => {
  useTittle('(Service-Details) Blissfull_celebration');
  const { user } = useContext(AuthContext);
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
      serviceImg: imageURL,
      price,
      serviceName,

      date,
      comment,
      status,
      provider: { providerEmail, providerName, providerImage },
      buyer: { buyerName, buyerEmail, buyerImage },
    };
    try {
      const { data } = await axiosSecure.post('/booked-services', purchaseInfo);
      (await data?.insertedId) && toast.success('posted successfully');
      onCloseModal();
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div>
        {/* -----------------------section heading ------------------ */}
        <div className="text-center  p-10">
          <h2 className="text-2xl font-bold">Service Overview</h2>
          <p className="text-gray-900">
            Welcome to our comprehensive service details! Here, you will find
            all the necessary information about the service you're interested
            in, ensuring you can make an informed decision
          </p>
        </div>

        {/* details  container */}
        <div>
          <div className="flex items-stretch justify-between">
            {/* iamge container  left wrapper*/}
            <div className="w-1/2 h-full">
              <img
                className="object-cover w-full"
                src={imageURL}
                alt="Article"
              />
            </div>
            {/* right wrapper */}
            <div className="w-1/2 border border-blue-600 flex items-center justify-center">
              {/* content wrapper */}
              <div>
                <h2 className="text-4xl font-bold font-playFair">
                  {serviceName}
                </h2>
                <p className="my-5  font-bold">
                  Start from
                  <span className="text-blue-700 text-5xl mx-3"> {price}</span>$
                </p>
                <p>
                  Available: <span className="font-bold">{serviceArea}</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-2xl p-10 bg-pink-100">{description}</p>
          </div>

          <div>
            <span className='capitalize'>  provider informaion  </span>
            <p>provider image </p>
            <p>providedr name </p>
            <p>provider email l</p>
          </div>
          <button className='btn'>  get now  </button>
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
