/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';
import BookedCard from './BookedCard';

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();

  const getBookedData = async () => {
    const { data } = await axiosSecure.get(`/booked-data?email=${user?.email}`);
    return data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ['booked-data', user],
    queryFn: () => getBookedData(),
    enabled: !!user,
  });

  console.log('bookings data', data);

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center text-blue-500 capitalize">
          Your booked services
        </h2>
      </div>

      <div>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service info</th>
                <th>Your  Data</th>
                <th>Provider's Data</th>
                <th> Status</th>
                <th>Booking Data</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(item => (
                <BookedCard item={item} key={item._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookedServices;
