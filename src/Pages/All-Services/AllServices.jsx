import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/AxiosBase/UseAxiosSecure';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
  const axiosSecure = UseAxiosSecure();
  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get('/services');
      return data;
    },
    queryKey: ['services'],
  });

 

  return (
    <>
      <div>
        <h2 className="capitalize font-bold">all services </h2>
        {/* data showing table here =>  */}
        <div className="flex items-center justify-center flex-col my-5">
          <div className="flex flex-col gap-5">
            {data?.map((item, idx) => (
              <AllServicesCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
