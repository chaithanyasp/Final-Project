import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../MainPage.css"
import { FiLogOut } from 'react-icons/fi'
function Header() {
  let [userId, setUserId] = useState()
  let [ppdId, setPpdId] = useState()
  useEffect(() => {
    const fetchData = () => {
      fetch("/api/signup")
        .then((response) => response.json())
        .then(function (response) {
          console.log(response)
          setUserId(response.email)
          setPpdId(response.ppdId)
        })
        .catch((error) => {
          console.error('Error:', error);
        });;
    };
    fetchData();
  }, []);




  return (
    <header className='header'>
      <div>{ppdId}</div>
      <div><span>{userId}</span><Link to="/"><FiLogOut /></Link></div>

    </header>
  )
}

export default Header

// import React, { useEffect, useState } from 'react'
// import { Link, useParams} from 'react-router-dom'
// import "../MainPage.css"
// import { FiLogOut } from 'react-icons/fi'


// function Header() {
//   let {email} = useParams()
//   let [data, setData]=useState({})
//   const fetchData = () => {
//     fetch(`/api/login/${email}`)
//         .then((response) => response.json())
//         .then((data) => {
//             setData(data[0]);
//         });
// };http://localhost:8000/api/user/login
// useEffect(() => {
//     fetchData();
// }, []);
//   let userid="sourabh@123.com  "
//   return (
//     <header className='header'>
//       <div>{data.ppdId}</div> 

//     <div><span>{data.email}</span><abbr title="Logout"><Link to="/"><FiLogOut /></Link></abbr></div>
//     </header>
//   )
// }

// export default Header