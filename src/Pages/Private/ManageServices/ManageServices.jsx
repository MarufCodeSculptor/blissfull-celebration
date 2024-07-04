import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import Loading from '../../Loadng/Loading';
import ManageServicesCard from './ManageServicesCard';
import { useContext, useState, } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ManageServices = () => {
  const { user, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const axiosSecure = UseAxiosSecure();
  const [theId,setTheId]=useState(null);

  const getData = async () => {
    const { data } = await axiosSecure.get(`/services?email=${user?.email}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryFn: !loading && getData,
    queryKey: ['services-data'],
  });
  // handling modal =>=>=>=>=>=>
  const getModalData = async id => {
    const { data } = axiosSecure.get(`/service/${id}`);
    return data;
  };

  // const {data,isLoading,error}=useQuery(['service',id])

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  if (isLoading) <Loading />;
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center   p-10 rounded-lg ">
          Manage your services
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto my-5 border bg-blue-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service info</th>
                <th>Provider</th>
                <th>Total Bookings</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {data?.map((item, index) => {
                return (
                  <ManageServicesCard
                    key={index}
                    item={item}
                    onOpenModal={onOpenModal}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* the modal  */}

      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold p-5">Update Info</h2>
        </div>
        <form className="border-2 p-5 bg-pink-50 rounded-lg">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sevice Name</span>
              </label>
              <input
                type="text"
                placeholder="service-name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text"> Service Image link </span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text"> Price </span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <input
                type="text"
                placeholder="area"
                name="area"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Description"
                name="description"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ManageServices;
