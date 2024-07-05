import PropTypes from 'prop-types';
const BookedCard = ({ item }) => {
  const {
    date,
    status,
    serviceImg,
    price,
    serviceName,
    provider: { providerEmail, providerName, providerImage },
    buyer: { buyerName, buyerEmail, buyerImage },
  } = item;

  return (
    <tr>
      <td>
        <div className="flex items-center justify-start gap-2">
          <div className="avatar">
            <div className="mask mask-hexagon w-12">
              <img src={serviceImg} />
            </div>
          </div>
          <div >
            <span className='text-sm font-bold'> {serviceName} </span> <br />
            <span className='text-xs font-light'> {price}$ </span>
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
      {/* status */}
      <th>
        <span className="text-xs font-light">{date}</span>
      </th>
      <th>
        <span className=" p-3 text-gray-600 ">
          {status}
        </span>
      </th>
      {/*  action button  */}
      <td>
        <button className="btn bg-blue-300 p-2 rounded "> Complete </button>
      </td>
    </tr>
  );
};

BookedCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default BookedCard;
