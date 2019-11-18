import React from "react"

function Field(props) {

    return (
        <div className="form-group row">
            <label htmlFor={props.HtmlFor} className=" col-md-3 col-12 col-form-label">{props.Label}</label>
            <div className="col-md-9 col-12">
                <input
                    type={props.Type}
                    className="form-control form-control-sm"
                    id={props.ID}
                    data-id={props.dataid}
                    defaultValue={props.value}
                    data-name={props.dataname}
                    name={props.name}
                    aria-describedby={props.DescribedBy}
                    placeholder={props.PlaceHolder}
                    pattern={props.Pattern}
                    ref={props.callbackRef}
                />
            </div>
        </div>

    )

}
export default Field
