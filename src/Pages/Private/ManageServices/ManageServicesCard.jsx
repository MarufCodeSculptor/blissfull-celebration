import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import ToasterConfirm from '../../ToasterConfirm/ToasterConfirm';
const ManageServicesCard = ({ item, onOpenModal, setTheId, handleDelete }) => {
  const {
    _id,
    imageURL,
    serviceName,
    price,
    providerEmail,
    providerImage,
    providerName,
  } = item;

  const handleModal = async id => {
    await setTheId(id);
    onOpenModal();
  };

  const deleteOperation = id => {
    toast(() => <ToasterConfirm onConfirm={onConfirm} onCancel={onCancel} />, {
      duration: Infinity,
    });
    const onConfirm = async () => {
      await handleDelete(id);
    };

    const onCancel = () => {
      // Cancel delete action
      console.log('Delete action cancelled');
      toast.dismiss();
    };
  };

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
        <button onClick={() => handleModal(_id)} className="btn">
          Update
        </button>
      </td>

      <th>
        <button onClick={() => deleteOperation(_id)} className="btn">
          Delete
        </button>
      </th>
      <div></div>
    </tr>
  );
};
ManageServicesCard.propTypes = {
  item: PropTypes.object.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  setTheId: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ManageServicesCard;
