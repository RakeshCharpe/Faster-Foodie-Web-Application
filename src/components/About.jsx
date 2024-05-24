import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"functional Component"} />
      <UserClass name={"Class Component"} />
    </div>
  );
};

export default About;
