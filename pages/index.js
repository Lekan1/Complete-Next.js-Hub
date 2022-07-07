import { useEffect, useReducer } from "react";

const FormReducer = (state, action) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export const Home = () => {
  const [formData, setFormData] = useReducer(FormReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      return console.log("Don't have Form Data");
    }
    console.log(formData);
  };

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={setFormData}
          placeholder="Enter FirstName "
        />
        <input
          type="text"
          name="lastName"
          onChange={setFormData}
          placeholder="Enter LastName "
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Home;
