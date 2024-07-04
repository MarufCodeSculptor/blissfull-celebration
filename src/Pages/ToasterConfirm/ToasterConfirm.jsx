import Proptypes from 'prop-types';
const ToasterConfirm = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <p>Are you sure you want to delete this item?</p>
      <div className="flex items-center justify-between my-5">
        <button className="btn btn-error" onClick={onConfirm}>
          Yes
        </button>
        <button className="btn btn-primary" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
};

ToasterConfirm.propTypes = {
  onConfirm: Proptypes.func.isRequired,
  onCancel: Proptypes.func.isRequired,
};
export default ToasterConfirm;
