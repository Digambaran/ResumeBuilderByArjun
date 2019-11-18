import React from "react"
import Field from "./Field";
const Experience = (props) => {
    return (
        props.exp.map(
            (val, idx) => {
                let comId = `company-${idx}`,
                    comYId = `company-year-${idx}`,
                    desigId = `company-designation-${idx}`
                return (
                    <div className="Experience border-top border-bottom border-info py-2 my-2" key={idx}>
                        <Field
                            Label="Company"
                            name="company"
                            HtmlFor={comId}
                            Type="text"
                            dataid={idx}
                            value={val.company || ""}
                            dataname="experience"
                            ID={comId}
                            PlaceHolder="Name of company"
                            DescribedBy="name of company"
                            callbackRef={props.reff}
                        />
                        <Field
                            Label="Year"
                            name="year"
                            HtmlFor={comYId}
                            Type="number"
                            ID={comYId}
                            dataname="experience"
                            dataid={idx}
                            value={val.year || ""}
                            PlaceHolder="year"
                            DescribedBy="year of working"
                        />
                        <Field
                            Label="Role"
                            name="designation"
                            HtmlFor={desigId}
                            Type="text"
                            ID={desigId}
                            dataname="experience"
                            dataid={idx}
                            value={val.designation || ""}
                            PlaceHolder="Role"
                            DescribedBy="designation"
                        />
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-id={idx}
                            data-name={"experience"}
                            onClick={props.deleteFields} >
                            Delete
                        </button>
                    </div>
                )
            }
        )
    )
}
export default Experience
