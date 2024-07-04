import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import Loading from '../../Loadng/Loading';
import ManageServicesCard from './ManageServicesCard';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const { data, isLoading, error } = useQuery({
    queryKey: ['services-data'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/services?email=${user?.email}`);
      return data;
    },
  });
  if (isLoading) <Loading />;
 console.log(data);
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
                return <ManageServicesCard key={index} item={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageServices;
