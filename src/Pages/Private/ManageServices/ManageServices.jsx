import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import Loading from '../../Loadng/Loading';
import ManageServicesCard from './ManageServicesCard';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import toast from 'react-hot-toast';
import useTittle from '../../../Hooks/useTitle/useTittle';

const ManageServices = () => {
  useTittle('(Manage-Services)  Blissfull_celebration')
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  //modals data=> =>
  const [open, setOpen] = useState(false);
  const [theId, setTheId] = useState(null);
  // getting service data=>=>=>=>
  const getData = async () => {
    const { data } = await axiosSecure.get(`/services?email=${user?.email}`);
    return data;
  };
  // service query  =>=>=>
  const {
    data: serviceData,
    isLoading: serviceLoading,
    refetch,
  } = useQuery({
    queryFn: !loading && getData,
    queryKey: ['services-data'],
    enabled: !!user,
  });

  // getting modal data=>=>=>=>=>=>
  const getModalData = async ({ queryKey }) => {
    const id = queryKey[1];
    const { data } = await axiosSecure.get(`/service/${id}`);
    return data;
  };
  // modals query =>=>=>
  const { data: modalData = {}, isLoading: modalLoading } = useQuery({
    queryKey: ['service', theId],
    queryFn: getModalData,
    enabled: !!theId,
  });
  // modal data => =>=>=> =>
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
  } = modalData;
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleUpdateData = async e => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.photo.value;
    const serviceName = form.name.value;
    const price = form.price.value;
    const serviceArea = form.area.value;
    const description = form.description.value;
    const updateDoc = {
      imageURL,
      serviceName,
      price,
      serviceArea,
      description,
      providerEmail,
      providerImage,
      providerName,
    };

    try {
      const { data } = await axiosSecure.patch(`/service/${_id}`, updateDoc);
      if (data.modifiedCount > 0) {
        refetch();

        onCloseModal();
        toast.success('update success');
      } else {
        toast.error('already updated');
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };
  // handle update ende here =>
  const handleDelete = async id => {
    try {
      const { data } = await axiosSecure.delete(`/service/${id}`);
      if (data.deletedCount > 0) {
        refetch();
        toast.dismiss()
        toast.success('delete success');
        
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  if (serviceLoading) <Loading />;
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
              {serviceData?.map((item, index) => {
                return (
                  <ManageServicesCard
                    key={index}
                    item={item}
                    onOpenModal={onOpenModal}
                    setTheId={setTheId}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* the modal  */}

      {(modalLoading && <Loading />) || (
        <Modal open={open} onClose={onCloseModal} center>
          <div className="flex items-center justify-center">
            <h2 className="text-xl font-bold p-5">Update Info</h2>
          </div>
          <form
            onSubmit={handleUpdateData}
            className="border-2 p-5 bg-pink-50 rounded-lg"
          >
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
                  defaultValue={serviceName}
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
                  defaultValue={imageURL}
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
                  name="price"
                  defaultValue={price}
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
                  defaultValue={serviceArea}
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
                  defaultValue={description}
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
      )}
    </>
  );
};

export default ManageServices;
