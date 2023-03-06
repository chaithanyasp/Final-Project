import "./FormPage.css"
function BasicInfo({ formData, setFormData }) {
    let changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setFormData((data) => {
            return {
                ...data,
                [name]: value
            }
        })

    }
    return (
        <div className="user-details" >
            <div className="input-box">
                <label htmlFor="propertyType">Property Type</label>
                <select onChange={changeHandler} name="propertyType" defaultValue={formData.propertyType} >
                    <option value="formData.propertyType" disable selected hidden>Select Property Type</option>
                    <option value="Flat">Flat</option>
                    <option value="Plot">Plot</option>
                    <option value="House">House</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Negotable</label>
                <select onChange={changeHandler} name="negotable" defaultValue={formData.negotable}>
                    <option value="" disable selected hidden>Select Negotable</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Price:</label>
                <input onChange={changeHandler} name="price" value={formData.price} type="text" placeholder="Example:10000" />
            </div>

            <div className="input-box">
                <label htmlFor="">Ownership</label>
                <select onChange={changeHandler} name="ownership" defaultValue={formData.ownership}>
                    <option value="" disable selected hidden>Select Ownership</option>
                    <option value="1st Owner">1st Owner</option>
                    <option value="2nd Owner">2nd Owner</option>
                    <option value="3rd Owner">3rd Owner</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Property age</label>
                <select onChange={changeHandler} name="propertyAge" defaultValue={formData.propertyAge}>
                    <option value="" disable selected hidden>Select Property Age</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="10-15">10-15</option>
                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Property Approved</label>
                <select onChange={changeHandler} name="propertyApproved" defaultValue={formData.propertyApproved}>
                    <option value="" disable selected hidden> Property Approved</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>

                </select>
            </div>
            <div className="input-box">
                <label htmlFor="">Property Description:</label>
                <input onChange={changeHandler} name="properyDescription" value={formData.properyDescription} type="text" />
            </div>
            <div className="input-box">
                <label htmlFor="">Bank Loan</label>
                <select onChange={changeHandler} name="bankLoan" defaultValue={formData.bankLoan}>
                    <option value="" disable selected hidden>Bank Loan</option>
                    <option value="Private Bank">Private Bank</option>
                    <option value="Government Bank">Government Bank</option>
                    <option value="No loan">No loan</option>
                </select>
            </div>
        </div>
    );
}

export default BasicInfo;