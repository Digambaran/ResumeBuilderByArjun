import React from "react";
function DisplayResume(props) {
  return (
    <div className="DisplayResume col-md-6 col-12">
      <div className=" text-center">
        <h1 className="m-0 text-uppercase">{props.name}</h1>
        <em>{props.email}</em>
        {
          props.phone.map((val, i) => <p className="m-0" key={i}>{val.num}</p>)
        }
      </div>
      <h2 className="m-0">Education</h2>
      <hr className="m-0"></hr>
      {
        props.edu.map((v, i) => {
          return (
            <div className="education d-flex justify-content-between" key={i}>
              <p>{v.name}</p>
              <p>{v.year}</p>
              <p>{v.degree}</p>
            </div>

          )
        })
      }
      <h2 className="m-0"> Experience</h2>
      <hr className="m-0"></hr>
      {
        props.exp.map((v, i) => {
          return (
            <div className="experience d-flex justify-content-between" key={i}>
              <p>{v.company}</p>
              <p>{v.year}</p>
              <p>{v.designation}</p>
            </div>
          )
        })
      }
      <h2 className="m-0"> Skills</h2>
      <hr className="m-0"></hr>
      <ol className="bg-grey">
        {props.skills.map((v, i) => {
          return (
            <li key={i}>{v.skill}</li>
          )
        })
        }
      </ol>
    </div >
  );
}
export default DisplayResume;
