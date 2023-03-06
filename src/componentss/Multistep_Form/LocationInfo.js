import "./FormPage.css"
function LocationInfo({ formData, setFormData }) {
    let changeHandler=(e)=>{
        let name=e.target.name;
        let value=e.target.value
        setFormData((data)=>{
            return {
                ...data,
                [name]:value
            }
        })
    }
    return (
        <div className="user-details">
            <div className="input-box">
                <label htmlFor="">Email:</label>
                <input placeholder="Email" onChange={changeHandler} name="email" value={formData.email} type="text" />
            </div>
            
            <div className="input-box">
                <label htmlFor="">City</label>
                <select onChange={changeHandler} name="city" defaultValue={formData.city}>
                <option value="" disable selected hidden>Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Agra">Agra</option>
                </select>
            </div>

            <div className="input-box">
                <label htmlFor="">Area</label>
                <select onChange={changeHandler} name="area" defaultValue={formData.area}>
                <option value="" disable selected hidden>Select Area</option>
                    <option value="Bus Stand">Bus Stand</option>
                    <option value="River">River</option>
                    <option value="Market">Market</option>
                    <option value="Airport">Airport</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Pincode</label>
                <select onChange={changeHandler} name="pincode" defaultValue={formData.pincode}>
                <option value="" disable selected hidden>Select Pincode</option>
                    <option value="793103">793103</option>
                    <option value="587101">587101</option>
                    <option value="799119">799119</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Address:</label>
                <input placeholder="Address" onChange={changeHandler} name="address" value={formData.address} type="text" />
            </div>
            <div className="input-box">
                <label htmlFor="">Landmark:</label>
                <input placeholder="Landmark" onChange={changeHandler} name="landmark" value={formData.landmark} type="text" />
            </div>
            <div className="input-box">
                <label htmlFor="">Lattitude:</label>
                <input placeholder="Lattitude" onChange={changeHandler} name="lattitude" value={formData.lattitude} type="text" />
            </div>
            <div className="input-box">
                <label htmlFor="">Longitude:</label>
                <input placeholder="Longitude" onChange={changeHandler} name="longitude" value={formData.longitude} type="text" />
            </div>

        </div>
    );
}

export default LocationInfo;