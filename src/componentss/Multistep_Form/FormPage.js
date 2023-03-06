import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
import PropertyDetail from "./PropertyDetail";
import { TiTick } from "react-icons/ti";
import "./FormPage.css"
import { useNavigate } from "react-router-dom";
import SideBar from "../../SideBar";
import Header from "../Header";
function FormPage() {
  const [complete, setComplete] = useState(false);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    propertyType: [],
    negotable: [],
    price: "",
    ownership: [],
    propertyAge: [],
    propertyApproved: [],
    properyDescription: "",
    bankLoan: [],
    length: "",
    bredth: "",
    totalArea: "",
    areaUnit: [],
    noOfBhk: [],
    noOfFloor: [],
    attached: [],
    westernToilet: [],
    furnished: [],
    carParking: [],
    lift: [],
    electricity: "",
    facing: [],
    name: [],
    mobile: "",
    postedBy: [],
    saleType: [],
    featuredPackage: [],
    ppdPackage: [],
    image: "",
    email: "",
    city: [],
    area: [],
    pincode: [],
    address: "",
    landmark: "",
    lattitude: "",
    longitude: "",
    ppdId:""

  });

  function postData() {
    fetch("/api/property", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
  }
  const navigation = useNavigate()
  const FormTitles = ["Basic Info", "Property Detail", "General Info", "Location Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PropertyDetail formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <GeneralInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <LocationInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="main-box">
      <SideBar />
      <section>
        {/* <header className='header'> </header> */}
        <Header/>
        <div className="form-container">
          <div className="form-header">
            <h2 className="form-name">ADD NEW PROPERTY</h2>
            <div className="progressbar-container">
              <div className="progressbar">
                {FormTitles?.map((step, i) => (
                  <div key={i} className="progressbar-child">
                    <b className="step">
                      {i < page || complete ? <TiTick className="tick" style={{ background: "#A9F9F9" }} size={24} /> : i + 1}
                    </b>
                    <b className="text">{step}</b>
                  </div>
                ))}
              </div>
            </div>
            <form className="form">
              {PageDisplay()}

              <div className="form-footer">
                {page !== 0 ?
                  <button
                    className="cancel-previous-button"
                    onClick={(e) => {
                      e.preventDefault()
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Previous
                  </button> : <button
                    className="cancel-previous-button"
                    onClick={(e) => {
                      navigation("/display")
                    }}
                  >
                    Cancel
                  </button>
                }
                <button
                  className="save-button"
                  onClick={(e) => {
                    e.preventDefault()
                    if (page === FormTitles.length - 1) {
                      if (formData.mobile && formData.propertyType && formData.totalArea) {
                        setComplete(true)
                        postData()
                        alert("FORM SUBMITTED");
                        console.log(formData.mobile, formData.propertyType, formData.totalArea)
                        console.log(formData);
                        navigation("/display")
                      } else {
                        alert("Mobile, Property type, Total area, PPD id of length 7 are required fields");
                      }
                    } else {

                      setPage((currPage) => currPage + 1);
                    }
                  }
                  }
                >
                  {page === FormTitles.length - 1 ? "Add Property" : "Save & Continue"}
                </button>

              </div>
            </form>

          </div>
        </div>
      </section>
    </div>


  );
}
export default FormPage;