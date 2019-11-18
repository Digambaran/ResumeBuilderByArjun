import React from "react"
import { Component } from "react"
import Autocomplete from "./Autocomplete";
class Tagbox extends Component {
    constructor(props) {
        super(props)

        this.valueinput = null
    }
    addTag = e => {
        if (this.valueinput.value === "" ) {
            this.valueinput.style.background="red"
        }
        else{
            this.valueinput.style.background=""
            this.props.addSkill(this.valueinput.value)
        }
        this.valueinput.focus()
    }
    removeTag = (e) => {
        this.props.delSkill(e.target.dataset.id)
    }
    render() {
        let tagList;
        if (this.props.skills.length != 0) {
            tagList = (
                this.props.skills.map((v, i) => {
                    return (
                        <div className="tag row btn bg-info m-2 p-0" >
                            <span className="m-1 text-left text-center text-white" 
                            key={i}>{v.skill}
                            </span>
                            <i onClick={this.removeTag} data-id={i} className="material-icons 
                            ml-auto 
                            rounded-circle 
                            m-1 p-0 
                            btn btn-danger">clear</i>
                        </div>

                    )
                })
            )
        }
        return (
            <div className="tagcontainer mx-2 d-flex flex-column" >
                <div className="border border-primary 
                 p-2 col-sm-12">
                    {tagList}
                </div>

               <div className="d-flex flex-row flex-wrap align-items-start p-0 mx-0 my-2">
               <Autocomplete
                    suggestions={this.props.skillset}
                    refCallback={t => this.valueinput = t}
                />
                <button
                    type="button"
                    className="col-sm-4  mt-sm-0 mt-1 btn btn-primary btn-md "
                    onClick={this.addTag}
                > ADD
                </button>
               </div>


            </div >
        )
    }
}
export default Tagbox
