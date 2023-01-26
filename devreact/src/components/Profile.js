import "./Profile.css";
import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        img:"",
        name:"Dummy Name",
        location:"Dummy Address",
    }
    console.log("Constructor")
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/SATYAM-SRIVASTVA")
    const json = await data.json();
    console.log("ComponentDidMount")
    console.log(json);
    this.setState({
        img:json.avatar_url,
        name:json.name,
        location:json.location,
    })

     this.timer=setInterval(()=>{
      console.log("namaste react op")
    },1000);

  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }

  componentWillUnmount(){
    console.log("ComponentWillUnmount")
    clearInterval(this.timer)
  }
  
  
  render() {
    console.log("render")
    return (
      <div>
        <img src={this.state.img} alt="" />
        <h1>This is a profile page</h1>
        <h2>Name:{this.state.name}</h2>
        <h2>{this.state.location}</h2>
        {/* <img src={this.state.userInfo.avatar_url} alt="" /> */}
        
      </div>
    );
  }
}

export default Profile;
