import { useContext } from 'react';
import { AuthContext } from '../../../Provider/CredProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const Addservices = () => {
  const { user } = useContext(AuthContext);
  const handleAdd = async e => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;

    const servicesData = {
      imageURL,
      serviceName,
      price,
      serviceArea,
      description,
      providerEmail: user?.email,
      providerImage: user?.photoURL,
      providerName: user?.displayName,
    };
    console.log(servicesData);
    try {
      const  {data}  = await axios.post(
        `http://localhost:5000/add-services`,
        servicesData
      );

      console.log('post res data =>', data);
      if(data.insertedId){
        toast.success( 'Services added successfully')
        form.reset();
      }
     
    } catch (fail) {
      toast.error(fail.message);
    }
  };

  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Add Service
        </h2>

        <form onSubmit={handleAdd}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="imageURL"
              >
                Image URL of the Service
              </label>
              <input
                id="imageURL"
                name="imageURL"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="serviceName"
              >
                Service Name
              </label>
              <input
                id="serviceName"
                name="serviceName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="price"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="serviceArea"
              >
                Service Area
              </label>
              <input
                id="serviceArea"
                name="serviceArea"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Add
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Addservices;
