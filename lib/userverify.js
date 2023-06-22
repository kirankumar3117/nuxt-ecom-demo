import axios from "axios";


export const verifyUser=async(token)=>{
    try{

        const res = await axios.get('https://amused-gray-zebra.cyclic.app/protected',{
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
                }
        })
        return res.data
    }catch(err){
        return "error"
    }
}