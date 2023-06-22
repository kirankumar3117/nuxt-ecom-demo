import axios from "axios";




export const userToken = async(email,password)=>{
    try{

        const token = await axios.post('https://amused-gray-zebra.cyclic.app/login',{
         email:email,
         password:password
        })
        const res = await token.data;
         return res.accessToken
    }catch(err){
        return "user not found"
    }
}
