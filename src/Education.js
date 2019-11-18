import React from "react"
import Field from "./Field";
const Education = (props) => {
    return (
        props.edu.map(
            (val, idx) => {
                let schoolId = `school-${idx}`,
                    schoolYId = `school-year-${idx}`,
                    degreeId = `school-degree-${idx}`
                return (
                    <div className="Education border-top border-bottom border-info py-2 my-2" key={idx} >
                        <Field
                            Label="institute"
                            name="name"
                            HtmlFor={schoolId}
                            Type="text"
                            dataid={idx}
                            value={val.name || ""}
                            dataname="education"
                            ID={schoolId}
                            PlaceHolder="School Name"
                            DescribedBy="school name"
                            callbackRef={props.reff}
                        />
                        <Field
                            Label="schoolyear"
                            name="year"
                            HtmlFor={schoolYId}
                            Type="number"
                            ID={schoolYId}
                            dataid={idx}
                            value={val.year || ""}
                            dataname="education"
                            PlaceHolder="year"
                            DescribedBy="year of schooling"
                        />
                        <Field
                            Label="degree"
                            name="degree"
                            HtmlFor={degreeId}
                            Type="text"
                            ID={degreeId}
                            dataname="education"
                            dataid={idx}
                            value={val.degree || ""}
                            PlaceHolder="degree"
                            DescribedBy="which degree"
                        />
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-id={idx}
                            data-name={"education"}
                            onClick={props.deleteFields} >
                            Delete
                        </button>
                    </div >
                )
            }
        )
    )
}
export default Education
