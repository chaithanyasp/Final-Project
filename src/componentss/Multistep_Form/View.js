/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SideBar from '../../SideBar';
import Header from '../Header';

function View() {

  let [data, setData] = useState([]);
  let { ppdId } = useParams()



  const fetchData = async (ppdId) => {
    let response = await axios.get(`/api/property/${ppdId}`)
    console.log(response.data[0]);

    setData(response.data[0])


  };
  useEffect(() => {
    if (ppdId) {
      fetchData(ppdId)
    }
  }, []);

  return (
    <div className="main-box" >
      <SideBar />
      <div>
        <Header />
        <div style={{ background: "#F5F5F5" }}>
          <h1 style={{ textAlign: "center", marginTop: 0 }}>Property Details</h1>
          <div style={{ display: "flex", justifyContent: "space-evenly", fontSize: "22px" }}>
            <div>
              <div> Negotable:- {data.negotable}</div>
              <div>address:- {data.address}</div>
              <div>area:- {data.area}</div>
              <div>areaUnit:- {data.areaUnit}</div>
              <div>attached:- {data.attached}</div>
              <div>bankLoan:- {data.bankLoan}</div>
              <div>bredth:- {data.breadth}</div>
              <div>carParking:- {data.carParking}</div>
              <div>city:- {data.city}</div>
              <div>electricity:- {data.electricity}</div>
              <div>email:- {data.email}</div>
              <div>facing:- {data.facing}</div>
              <div>featuredPackage:- {data.featurePackage}</div>
              <div>furnished:- {data.furnished}</div>
              <div>landmark:- {data.landmark}</div>
              <div>lattitude:- {data.lattitude}</div>
              <div>length:- {data.length}</div>
              <div>lift:- {data.lift}</div>
            </div>
            <div>
              <div>longitude:- {data.longitude}</div>
              <div>mobile:- {data.mobile}</div>
              <div>name:- {data.name}</div>
              <div>noOfBhk:- {data.noOfBhk}</div>
              <div>noOfFloor:- {data.noOfFloor}</div>
              <div>ownership:- {data.ownership}</div>
              <div>pincode:- {data.pincode}</div>
              <div>postedBy:- {data.postedBy}</div>
              <div>ppdId:- {data.ppdId}</div>
              <div>ppdPackage:- {data.ppdPackage}</div>
              <div>price:- {data.price}</div>
              <div>propertyAge:- {data.propertyAge}</div>
              <div>propertyApproved:- {data.propertyApproved}</div>
              <div>propertyType:- {data.propertyType}</div>
              <div>properyDescription:- {data.properyDescription}</div>
              <div>saleType:- {data.saleType}</div>
              <div>totalArea:- {data.totalArea}</div>
              <div>westernToilet:- {data.westernToilet}</div>
            </div>


          </div>
          <Link to={-1}><button style={{marginLeft:"40%", background: "#6AB4F8", width:"200px", height:"50px", border:"1px solid #6AB4F8"  }}>Back</button></Link>

        </div>

      </div>

    </div>
  )
}

export default View;
