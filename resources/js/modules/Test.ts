import axios from "axios";
let data
let addData = async (url,data)=>{
    await axios.post(url,data).then(resp=>{
        return resp.data
    });
}

let getData = async (url)=>{
    await axios.get(url).then(resp=>{
        data=resp.data
    })
}
export {
    data,
    getData,
    addData
}
