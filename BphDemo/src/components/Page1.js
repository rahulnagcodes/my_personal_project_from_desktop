import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearApiData2 } from "../redux/dataSlice";
import {fetchData} from "../redux/userSlice";
let users;
let data;
function Page1() {
  const dispatch = useDispatch();
   users=useSelector((state)=>state.users.users)
   data = useSelector((state) => {
    console.log("state..", state.users);
    return state.users;
  });

  useEffect(()=>{
    console.log(data.users)
    if(!data.users){
      dispatch(fetchData())

    }
  },[])

  const handleClearData = () => {
    dispatch(clearApiData2());
  };
  // if (data.isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  // if (data.isError !== null) {
  //   return <h3>{data.isError}</h3>;
  // }

  {data.isLoading && <h2>Loading...</h2>}
  {data.isError && <h3>{data.isError}</h3>}

  return (
    <>
      <ul>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>login</th>
          <th>node_id</th>
          <th>type</th>
          <button onClick={handleClearData}>Clear Data on Page 2</button>
        </tr>
      </thead>
      <tbody>
        {data?.users?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.login}</td>
            <td>{user.node_id}</td>
            <td>{user.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </ul>
    </>
  );
}

export default Page1;

