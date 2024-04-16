import React, {  useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData2 } from "../redux/dataSlice";
import { clearApiData1, } from "../redux/userSlice";

function Page2() {
  const dispatch = useDispatch();
  // const data = useSelector((state)=>state.data1.data)


  const datas = useSelector((state) => {
    console.log("state..", state.data1);
    return state.data1;
  });
  // useEffect(()=>{
  //   if(!data){
  //     dispatch(fetchData2())

  //   }
  // },[data,dispatch])

  const handleClearData = () => {
    dispatch(clearApiData1());
  };
  if (datas.isLoading) {
    return <h2>Loading...</h2>;
  }
  if (datas.isError !== null) {
    return <h3>{datas.isError}</h3>;
  }
  return (
    <>
      <ul>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>Username</th>
              <th>email</th>
              <th>Website</th>
              <button onClick={handleClearData}>Clear Data on Page 1</button>
            </tr>
          </thead>
          <tbody>
            {datas.data1.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                {/* <td>{data.title}</td>
                <td>{data.body}</td> */}
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td> 
                <td>{data.address.street}</td>
                <td>{data.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </>
  );
}

export default Page2;
