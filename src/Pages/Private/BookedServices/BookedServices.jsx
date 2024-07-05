const BookedServices = () => {
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-center text-blue-500 capitalize">
          {' '}
          Your booked services{' '}
        </h2>
      </div>

      <div>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Service info</th>
                <th>Customer's Data</th>
                <th>Provider's Data</th>
                <th> Status</th>
                <th>Booking Data</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center justify-start gap-2"> 
                    <span>image</span> 
                   <div>
                   <span>name</span>  <br />
                   <span>price</span>
                   </div>
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>

                <th>
                  <span className="bg-pink-300 px-3 py-2 rounded text-white ">
                    pending
                  </span>
                </th>
                <td>
                  {' '}
                  <button className="btn btn-success"> Complete </button>{' '}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookedServices;
