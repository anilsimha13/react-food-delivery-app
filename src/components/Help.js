import User from "./User";
import UserClass from "./UserClass";

const Help = () => {
  return (
    <div>
      <h1>Help</h1>
      <User name={"Anil Simha Tallapragada"} />
      <UserClass
        name1={"Anil Simha - Class Based"}
        location1={"Kakinda"}
        contact1={"@ursanilsimha"}
      />
    </div>
  );
};

export default Help;
