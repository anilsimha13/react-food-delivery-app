import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        userName: "Dummy",
        location: "Dummy K",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anilsimha13");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name1, location1, contact } = this.props;
    const { count, count2 } = this.state;
    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              userInfo: json,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
