import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/AxiosBase/UseAxiosSecure';
import AllServicesCard from './AllServicesCard';
import useTittle from '../../Hooks/useTitle/useTittle';
import BounceLoader from 'react-spinners/BounceLoader';
// const  CSSProperties = {
//   display: 'block',
//   margin: '0 auto',
//   borderColor: 'red',
// };

const AllServices = () => {
  useTittle('(All-Services)  Blissfull_celebration');
  const axiosSecure = UseAxiosSecure();
  const { data, error, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get('/services');
      return data;
    },
    queryKey: ['services'],
  });

  

  if (isLoading) {
    return (
        <div className='min-h-[calc(100vh-70px)] flex items-center justify-center' >
           <BounceLoader
        color={'blue'}
        loading={isLoading}
        // cssOverride={CSSProperties}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    );
  }
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
