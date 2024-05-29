import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "UserName",
      repo: "0",
      follower: "0",
      following: "0",
      bio: "Developer",
    };
    // console.log(this.props.name+"constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " did mount ");
    const data = await fetch("https://api.github.com/users/RakeshCharpe");
    const json = await data.json();
    console.log(json);
    this.setState({
      name: json.name,
      repo: json.public_repos,
      follower: json.followers,
      following: json.following,
      profile: json.avatar_url,
      bio: json.bio,
    });
  }

  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    // const {  location } = this.props;
    const { name, follower, following, repo, profile, bio } = this.state;

    // console.log(this.props.name + "render");

    return (
      <div className="user-card">
        <h2>Github Profile</h2>
        {/* <button onClick={(event) => {
          //NEVER UPDATE STATE VARIABLE DIRECTLY USING =

          this.setState({
            count: this.state.count + 1
          })
        }}>
          Count Increase
        </button> */}
        <img
          src={profile}
          style={{ width: "100px", borderRadius: "50%" }}
        ></img>
        <h4>Name: {name}</h4>
        <h4>Bio : {bio}</h4>
        <h4>Public Repository : {repo}</h4>
        <h4>Follower : {follower}</h4>
        <h4>Following : {following}</h4>
      </div>
    );
  }
}

export default Profile;
