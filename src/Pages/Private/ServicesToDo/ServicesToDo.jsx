import { useQuery } from '@tanstack/react-query';
import useTittle from '../../../Hooks/useTitle/useTittle';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';
import ToDoRow from './ToDoRow';

const ServicesToDo = () => {
  useTittle('(Service To Do)  Blissfull_celebration ');

  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const getBookedData = async () => {
    const { data } = await axiosSecure.get(
      `/provider-data?email=${user?.email}`
    );
    return data;
  };
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['booked-data', user],
    queryFn: () => getBookedData(),
    enabled: !!user,
  });

  console.log('to do  data', data);

  if (data?.length === 0) {
    return (
      <>
        <div className="text-3xl font-bold text-center min-h-[calc(100vh-70px)] flex items-center justify-center ">
          <h2> No data available </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center text-blue-500 capitalize">
          Services To do
        </h2>
      </div>

      <div>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service info</th>
                <th>Your Data</th>
                <th>Customer's Data</th>
                <th> Date</th>
                <th> Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.map(item => (
                <ToDoRow item={item} key={item._id} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ServicesToDo;
