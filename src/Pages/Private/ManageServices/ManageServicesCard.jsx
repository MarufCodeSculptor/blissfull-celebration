import PropTypes from 'prop-types';
const ManageServicesCard = ({ item, onOpenModal }) => {
  const {
    imageURL,
    serviceName,
    price,
    providerEmail,
    providerImage,
    providerName,
  } = item;

  return (
    <tr>
      <td>
        <div className="flex items-center  gap-2">
          <div className="w-16 mask mask-hexagon">
            <img src={imageURL} />
          </div>
          <div>
            {/* name  */}
            <p>{serviceName} </p>
            {/* price  */}
            <p>{price}$</p>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={providerImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold"> {providerName} </div>
            <div className="text-sm opacity-50">{providerEmail}</div>
          </div>
        </div>
      </td>

      <td>
        <span className="p-5 ">20</span>
      </td>

      <td>
        <button onClick={onOpenModal} className="btn"> Update </button>
      </td>

      <th>
        <button className="btn"> Delete </button>
      </th>
    </tr>
  );
};
ManageServicesCard.propTypes = {
  item: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
export default ManageServicesCard;
