import User from "./User";
import UserClass from "./Profile";
import React from "react";

class About extends React.Component{
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>

        {/* <UserClass name={"first Component"} location={"Pune"} /> */}
      </div>
    );
  }
}

export default About;
