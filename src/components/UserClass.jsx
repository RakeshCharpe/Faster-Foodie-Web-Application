import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="user-card">
        <h2>Name : Rakesh</h2>
        <h3>Location : Pune</h3>
        <h4>Profession : Developer</h4>
            <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default UserClass;
