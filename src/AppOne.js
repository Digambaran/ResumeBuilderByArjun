import React, { Component } from "react";
import "./AppOne.css";
import FillForm from "./FillForm";
import DisplayResume from "./DisplayResume";

class AppOne extends Component {
  constructor() {
    super();

    this.state = {
      name: "MY NAME",
      email: "my email id",
      phone: [{ num: "001122334455" }],
      school: [
        {
          name: "school-name",
          year: "1990",
          degree: "degree"
        },
        {
          name: "school-name",
          year: "1994",
          degree: "degree"
        }
      ],
      experience: [
        {
          company: "company-name",
          year: "2005",
          designation: "worker/performer"
        },
        {
          company: "company-name",
          year: "2009",
          designation: "manager"
        }
      ],
      skills: [

      ]
    };
    this.callBack = this.callBack.bind(this);

  }
  callBack(newstate) {
    this.setState(newstate);
    console.log('changed');
  }
  render() {
    return (
      <div className="AppOne row">
        <FillForm changeState={this.callBack} />
        <DisplayResume
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          exp={this.state.experience}
          edu={this.state.school}
          skills={this.state.skills}
        />
      </div>

    );
  }
}

export default AppOne;
