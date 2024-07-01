const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 ">
      <span className="loading loading-ball text-blue-500 loading-lg"></span>
      <span className="loading loading-ball text-pink-500 loading-lg"></span>
      <span className="loading loading-ball text-yellow-400 loading-lg"></span>
      <span className="loading loading-ball text-green-500 loading-lg"></span>
    </div>
  );
};

export default Loading;
