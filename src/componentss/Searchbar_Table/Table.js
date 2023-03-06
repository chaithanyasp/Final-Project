import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom';
import "./DisplayData.css"
import axios from "axios";
import { FiSearch, FiEye, FiImage, FiDelete } from 'react-icons/fi';
function Table() {

    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterval] = useState("");
    let [status, setStatus]=useState("unsold")
    //let navigate = useNavigate()
    let {email} =useParams()



    const fetchData = () => {
        fetch("/api/property")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setSearchApiData(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleFilter = (e) => {
        if (e.target.value === "") {
            setData(searchApiData);
        } else {
            const filterResult = searchApiData.filter((item) =>
                item.ppdId.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setData(filterResult);
        }
        setFilterval(e.target.value);
    };

    function handleDelete(id) {
        axios
            .delete(`/api/property/${id}`)
            .then(() => {
                fetchData()
            });
    }
    function handleStatus () {
        setStatus("Sold")
        
    }
    return (
        <div className="container">
            <div className='table-header'>
                <div>
                    <div className='input-container'>
                        <input
                            className='input-boxs'
                            placeholder="Search PPD Id"
                            value={filterVal}
                            onChange={(e) => {
                                handleFilter(e);
                            }}
                        />
                        <FiSearch className='icon' />
                    </div>

                    {/* {filterVal.length > 0 ? data.map((data, index) => {
                        return <div key={index}>{data.ppdId}</div>;
                    }) : ""} */}
                </div>
                <button className='property-button'><Link to={`/form/${email}`} className='link'>+ Add Property</Link></button>
            </div>
            <table className="table" >
                <tr className="table-row">
                    <th>PPD ID</th>
                    <th>Image</th>
                    <th>Property</th>
                    <th>Contact</th>
                    <th>Area</th>
                    <th>Views</th>
                    <th>Status</th>
                    <th>Day Left</th>
                    <th>Action</th>
                </tr>
                {data.map((data, index) => {
                    return (
                        <tr key={index} className="table-row">
                            <td>{data.ppdId}</td>
                            <td><FiImage className='table-icons' /></td>
                            <td>{data.propertyType[0]}</td>
                            <td>{data.mobile}</td>
                            <td>{data.totalArea}</td>
                            <td>{parseInt(Math.random() * 50)}</td>
                            <td><button className='status-button' onClick={() => { handleStatus() }}>{status}</button></td>
                            <td>{parseInt(Math.random() * 50)}</td>
                            <td>
                                <Link to={`/view/${data.ppdId}`}><button className='action'><FiEye className='table-icons' /></button></Link>
                                <button className='action' onClick={() => { handleDelete(data.ppdId) }}><FiDelete className='table-icons' /></button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}


export default Table