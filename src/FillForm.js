import React, { Component } from "react";
import printJS from "print-js";
import Field from "./Field";
import Education from "./Education";
import Experience from "./Experience";
import Tagbox from "./Tagbox";
class FillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: [{ num: "" }],
      school: [
        {
          name: "",
          year: "",
          degree: ""
        }
      ],
      experience: [
        {
          company: "",
          year: "",
          designation: ""
        }
      ],
      skills: [],
      skillset: [
        { id: "1", label: "html" },
        { id: "2", label: "c" },
        { id: "3", label: "laravel" },
        { id: "4", label: "php" },
        { id: "5", label: "css" },
        { id: "6", label: "ruby" },
        { id: "7", label: "perl" },
        { id: "8", label: "python" },
        { id: "9", label: "c++" },
        { id: "10", label: "django" },
        { id: "11", label: "java" },
        { id: "12", label: "latex" },
        { id: "13", label: "reactjs" },
        { id: "14", label: "javascript" }
      ]
    };
    this.nameinput = null;
    this.emailinput = null;
    this.phoneinput = null;
    this.expRef = null;
    this.eduRef = null;
    this.onclick = this.onclick.bind(this);
    this.addMorePh = this.addMorePh.bind(this);
    this.addMoreExp = this.addMoreExp.bind(this);
    this.addMoreEdu = this.addMoreEdu.bind(this);
    this.deleteFields = this.deleteFields.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.addSkill = this.addSkill.bind(this);
    this.delSkill = this.delSkill.bind(this);
  }
  onclick(e) {
    this.state.email = this.emailinput.value;
    this.state.name = this.nameinput.value;
    this.props.changeState(this.state);
  }
  handleChange(e) {
    if (e.target.dataset.name === "experience") {
      let Exp = [...this.state.experience];
      Exp[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ experience: Exp });
    } else if (e.target.dataset.name === "education") {
      let Edu = [...this.state.school];
      Edu[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ school: Edu });
    } else {
      let ph = [...this.state.phone];
      ph[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ phone: ph });
    }
    e.preventDefault();
  }
  addMorePh(e) {
    this.setState(prevState => {
      return {
        phone: [...prevState.phone, { num: "" }]
      };
    });
    e.preventDefault();
  }
  addMoreEdu(e) {
    this.setState(prevState => {
      return {
        school: [...prevState.school, { name: "", year: "", degree: "" }]
      };
    });

    e.preventDefault();
  }
  addMoreExp(e) {
    this.setState(prevState => {
      return {
        experience: [
          ...prevState.experience,
          { Company: "", year: "", designation: "" }
        ]
      };
    });

    e.preventDefault();
  }
  deleteFields(e) {
    if (e.target.dataset.name === "experience") {
      let fields = this.state.experience.filter((val, i, arr) => {
        return i != e.target.dataset.id;
      });
      console.log("fields", fields);
      this.setState({ experience: fields });
    } else if (e.target.dataset.name === "education") {
      let fields = this.state.school.filter((val, i, arr) => {
        return i != e.target.dataset.id;
      });
      this.setState({ school: fields });
    } else {
      let fields = this.state.phone.filter((val, i, arr) => {
        return i != e.target.dataset.id;
      });
      this.setState({ phone: fields });
    }

    e.preventDefault();
  }
  addSkill(v) {
    this.setState(prevState => {
      return { skills: [...prevState.skills, { skill: v }] };
    });
  }
  delSkill(i) {
    let l = this.state.skills.filter((v, idx, arr) => {
      return i != idx;
    });
    this.setState({ skills: l });
  }
  componentDidMount() {
    this.nameinput.focus();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.phone.length < this.state.phone.length) {
      this.phoneinput.focus();
    } else if (prevState.experience.length < this.state.experience.length) {
      this.expRef.focus();
    } else if (prevState.school.length < this.state.school.length) {
      this.eduRef.focus();
    }
  }
  render() {
    return (
      <div className="FillForm col-md-6 col-12 " id="printme">
        <form className="p-2" onChange={this.handleChange}>
          <Field
            Label="name"
            name="name"
            HtmlFor="PersonName"
            Type="text"
            ID="PersonName"
            PlaceHolder="Your Name"
            DescribedBy="your name"
            callbackRef={target => (this.nameinput = target)}
          />
          <Field
            Label="email"
            HtmlFor="PersonEmail"
            Type="email"
            name="email"
            ID="PersonEmail"
            PlaceHolder="Your Email"
            DescribedBy="your email"
            callbackRef={target => (this.emailinput = target)}
          />

          {this.state.phone.map((val, idx) => {
            return (
              <div className="form-group" key={idx}>
                <Field
                  Label={`phone-${idx + 1}`}
                  HtmlFor="phonenumber"
                  value={this.state.phone[idx].num || ""}
                  name="num"
                  Type="tel"
                  Pattern="[0-9]{10}"
                  ID="phonenumber"
                  dataid={idx}
                  dataname="phone"
                  PlaceHolder={this.state.phone[idx].num || "ph num"}
                  DescribedBy="your phone"
                  callbackRef={t => (this.phoneinput = t)}
                />
                <button
                  className="btn btn-danger"
                  data-id={idx}
                  data-name="phone"
                  onClick={this.deleteFields}
                >
                  delete
                </button>
              </div>
            );
          })}

          <button
            type="button"
            value="addMore"
            name="phone"
            onClick={this.addMorePh}
            className="btn btn-primary btn-block"
          >
            add more phone
          </button>

          <Experience
            exp={this.state.experience}
            deleteFields={this.deleteFields}
            reff={t => (this.expRef = t)}
          />

          <button
            type="button"
            value="addMore"
            name="Experience"
            onClick={this.addMoreExp}
            className="btn btn-primary form-control"
          >
            add more experience
          </button>

          <Education
            edu={this.state.school}
            deleteFields={this.deleteFields}
            reff={t => (this.eduRef = t)}
          />

          <button
            type="button"
            value="addMore"
            name="Education"
            onClick={this.addMoreEdu}
            className="btn btn-primary form-control"
          >
            add more education
          </button>
          <hr />
          <Tagbox
            skillset={this.state.skillset}
            skills={this.state.skills}
            addSkill={this.addSkill}
            delSkill={this.delSkill}
          />
          <button
            type="button"
            className="btn btn-primary form-control"
            name="finalsubmit"
            onClick={this.onclick}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FillForm;
