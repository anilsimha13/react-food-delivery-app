import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //API calls
  }, []);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click here
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: Kakinada</h3>
      <h4>Contact: @ursanilsimha</h4>
    </div>
  );
};
export default User;
