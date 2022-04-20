import React,{useEffect} from 'react'
import authApi from './../api/authApi';
const Testauth = () => {
  const Login = async () => {
    const user = await authApi.LoginApi('ducdz0712','Dduc@123');
    console.log(user.access_token);
  }
  useEffect(()=>{
    Login();
  },[])

  return (
    <div>testauth</div>
  )
}

export default Testauth