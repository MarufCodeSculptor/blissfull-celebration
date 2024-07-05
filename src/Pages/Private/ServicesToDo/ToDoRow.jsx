import PropTypes from 'prop-types';
import { useState } from 'react';
import UseAxiosSecure from '../../../Hooks/AxiosBase/UseAxiosSecure';

const ToDoRow = ({ item ,refetch}) => {
  const axiosSescure = UseAxiosSecure();

  const [Thestatus, setStatus] = useState('');

  const {
    _id,
    date,
    status,
    serviceImg,
    price,
    serviceName,
    provider: { providerEmail, providerName, providerImage },
    buyer: { buyerName, buyerEmail, buyerImage },
  } = item;

  const handleUpdate = async () => {
    //     make updatedoc
    const updateDoc = { status: Thestatus };
    try {
      const { data } = await axiosSescure.patch(
        `/booked-services/${_id}`,
        updateDoc
      );
      refetch();
      console.log(data, 'update response');
    } catch (err) {
      console.log(err?.message);
    }
  };

  const handleStatus = e => {
    setStatus(e.target.value);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center justify-start gap-2">
          <div className="avatar">
            <div className="mask mask-hexagon w-12">
              <img src={serviceImg} />
            </div>
          </div>
          <div>
            <span className="text-sm font-bold"> {serviceName} </span> <br />
            <span className="text-xs font-light"> {price}$ </span>
          </div>
        </div>
      </td>

      {/* provider data =>  */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={providerImage} alt={providerName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{providerName}</div>
            <div className="text-sm opacity-50">{providerEmail}</div>
          </div>
        </div>
      </td>
      {/* buyer data => =>  */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={buyerImage} alt={buyerName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{buyerName}</div>
            <div className="text-sm opacity-50">{buyerEmail}</div>
          </div>
        </div>
      </td>
      {/* status */}
      <th>
        <span className="text-xs font-light">{date}</span>
      </th>
      <th>
        <select
          defaultValue={status}
          onChange={handleStatus}
          className="select select-accent w-full min-w-32"
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="working">Working</option>
          <option value="complete">Complete</option>
        </select>
      </th>
      {/*  action button  */}
      <td>
        <button onClick={handleUpdate} className="btn bg-blue-300 p-2 rounded ">
          {' '}
          Update{' '}
        </button>
      </td>
    </tr>
  );
};

ToDoRow.propTypes = {
  item: PropTypes.object.isRequired,
  refetch:PropTypes.func.isRequired
};
export default ToDoRow;
