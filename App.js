import ReactDOM from "react-dom/client";
const Heading = () => {
  return (
    <div>
      <h1 className="mainHeader">I am the Main Header</h1>
    </div>
  );
};
const SecondHeading = () => {
  return (
    <div>
      <h2 className="secondHeader">I am from second Heading</h2>
    </div>
  );
};
const SubHeading = () => {
  return (
    <div>
      <Heading />
      <SecondHeading />
      <h3 className="subHeading">I am the Third heading</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SubHeading />);
