import { useState } from "react";
import "./FormPage.css"
function GeneralInfo({ formData, setFormData }) {
    let [mobileError, setmobileError] = useState(false);
    // let [ppdIdError, setPpdIdError] = useState(false);
    let phoneRegex = /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    let changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value
        if (name === "image") {
            setFormData((data) => {
                return {
                    ...data,
                    image: e.target.files[1]
                }
            })

        }

            setFormData((data) => {
                return {
                    ...data,
                    [name]: value
                }
            })
        
        if (name === "mobile") {
            if (!value.match(phoneRegex)) {
                setmobileError(true);
            } else {
                setmobileError(false);
            }
        }
        if (name === "ppdId") {
            if (!value.length===7) {
                setmobileError(true);
            } else {
                setmobileError(false);
            }
        }
    }
    return (
        <div className="user-details">
            <div className="input-box">
                <label htmlFor="">Name</label>
                <select onChange={changeHandler} name="name" defaultValue={formData.name}>
                    <option value="" disable selected hidden>Name</option>
                    <option value="abc">abc</option>
                    <option value="xyz">xyz</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Mobile:</label>
                <input placeholder="Enter Mobile Number" onChange={changeHandler} name="mobile" value={formData.mobile} type="text" required />
                {mobileError ? <div className="error">Mobile number must contain 10 digits</div> : ""}
            </div>
            <div className="input-box">
                <label htmlFor="">Posted By</label>
                <select onChange={changeHandler} name="postedBy" defaultValue={formData.postedBy}>
                    <option value="" disable selected hidden>Posted By</option>
                    <option value="Owner">Owner</option>
                    <option value="Agent">Agent</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Sale Type</label>
                <select onChange={changeHandler} name="saleType" defaultValue={formData.saleType}>
                    <option value="" disable selected hidden>Please Select</option>
                    <option value="Residential">Residential</option>
                    <option value="Commertial">Commertial</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Featured Package</label>
                <select onChange={changeHandler} name="featuredPackage" defaultValue={formData.featuredPackage}>
                    <option value="" disable selected hidden>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">PPD Package</label>
                <select onChange={changeHandler} name="ppdPackage" defaultValue={formData.ppdPackage}>
                    <option value="" disable selected hidden>Please Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            {/* <div className="input-box">
                <label htmlFor="">Image:</label>
                <input className="image" onChange={changeHandler} name="image" value={formData.image} type="file" />
            </div> */}

        </div>
    );
}

export default GeneralInfo;