import PropTypes from 'prop-types';
const BookedCard = ({ item }) => {
  const {
    date,
    status,
    provider: { providerEmail, providerName, providerImage },
    buyer: { buyerName, buyerEmail, buyerImage },
  } = item;

  
  return (
    <tr>
      <td>
        <div className="flex items-center justify-start gap-2">
          <span> service photo </span>
          <div>
            <span> service name   </span> <br />
            <span> servie price  </span>
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
      <th>
        <span className="bg-pink-300 px-3 py-2 rounded text-white ">
          {status}
        </span>
      </th>
      <td>
        <button className="btn btn-success"> Complete </button>
      </td>
    </tr>
  );
};

BookedCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default BookedCard;
