import useTittle from "../../../Hooks/useTitle/useTittle";

const ServicesToDo = () => {
  useTittle('(Service To Do)  Blissfull_celebration ')
  return (
    <div className="flex items-center justify-center bg-[#031926] min-h-96 my-10">
      <h2 className="p-5 text-5xl font-bold capitalize  text-center bg-[#9381ff] rounded-lg shadow-xl">
        ServicesToDo loading please wait
      </h2>
    </div>
  );
};

export default ServicesToDo;