import { useState } from "react";
import "./FormPage.css"
function PropertyDetail({ formData, setFormData }) {
    let [areaError, setAreaError] = useState(false);
    let changeHandler=(e)=>{
        let name=e.target.name;
        let value=e.target.value
        setFormData((data)=>{
            return {
                ...data,
                [name]:value
            }
        })
        if(name==="totalArea"){
            if (!value) {
                setAreaError(true);
              } else {
                setAreaError(false);
              }
          }
    }

    return (
        <div className="user-details">
            <div className="input-box">
                <label htmlFor="">Length:</label>
                <input placeholder="Example:1000" onChange={changeHandler} name="length" value={formData.length} type="text" />
            </div>

            <div className="input-box">
                <label htmlFor="">Bredth:</label>
                <input placeholder="Example:1000" onChange={changeHandler} name="bredth" value={formData.bredth} type="text" />
            </div>

            <div className="input-box">
                <label htmlFor="">Total Area:</label>
                <input placeholder="Example:7500" onChange={changeHandler} name="totalArea" value={formData.totalArea} type="text" />
                {areaError ? <div className="error">Must enter area </div> : ""}
            </div>
            <div className="input-box">
                <label htmlFor="">Area Unit</label>
                <select onChange={changeHandler} name="areaUnit" defaultValue={formData.areaUnit}>
                <option value="" disable selected hidden>Area Unit</option>
                    <option value="Feet">Feet</option>
                    <option value="Meter">Meter</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">No of BHK</label>
                <select onChange={changeHandler} name="noOfBhk" defaultValue={formData.noOfBhk}>
                <option value="" disable selected hidden>Select No of BHK</option>
                    <option value="">1</option>
                    <option value="India">2</option>
                    <option value="USA">3</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">No of Floor</label>
                <select onChange={changeHandler} name="noOfFloor" defaultValue={formData.noOfFloor}>
                <option value="" disable selected hidden>Select No of Floor</option>
                    <option value="">1</option>
                    <option value="India">2</option>
                    <option value="USA">3</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Attached</label>
                <select onChange={changeHandler} name="attached" defaultValue={formData.attached}>
                <option value="" disable selected hidden>Select Attached</option>
                <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Western Toilet</label>
                <select onChange={changeHandler} name="westernToilet" defaultValue={formData.westernToilet}>
                <option value="" disable selected hidden>Select Western Toilet</option>
                <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Furnished</label>
                <select onChange={changeHandler} name="furnished" defaultValue={formData.furnished}>
                <option value="" disable selected hidden>Select Furnished</option>
                <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Car Parking</label>
                <select onChange={changeHandler} name="carParking" defaultValue={formData.carParking}>
                <option value="" disable selected hidden>Select Car Parking</option>
                    <option value="1 car">1 car</option>
                    <option value="2 Cars">2 cars</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Lift</label>
                <select onChange={changeHandler} name="lift" defaultValue={formData.lift}>
                <option value="" disable selected hidden>Select Lift</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Electricity:</label>
                <input placeholder="Example: 3 Phase" onChange={changeHandler} name="electricity" value={formData.electricity} type="text" />
            </div>

            <div className="input-box">
                <label htmlFor="">Facing</label>
                <select onChange={changeHandler} name="facing" defaultValue={formData.facing}>
                <option value="" disable selected hidden>Select Facing</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                </select>
            </div>
           

        </div>
    );
}

export default PropertyDetail;