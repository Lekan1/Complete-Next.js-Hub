import { BiUserPlus } from "react-icons/bi";
import Form from "../components/Form";
import Table from "../components/Table";

export const Home = () => {
  return (
    <main className="py-5 space-y-8">
      <h1 className="text-xl md:text-5xl text-center font-bold py-10">
        Employee Management
      </h1>

      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 shadow-md">
            Add Employee{" "}
            <span className="px-1">
              <BiUserPlus size={23}></BiUserPlus>
            </span>
          </button>
        </div>
      </div>

      {/* collapsable form */}
      <div className="container mx-auto">
        <Form />
      </div>
      {/* table */}
      <div className="container mx-auto">
        <Table />
      </div>
    </main>
  );
};

export default Home;
