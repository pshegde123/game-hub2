import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'5551b442db304cb29668577c2b66c829'
    }
})