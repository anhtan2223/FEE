import AxiosInstance from "./Axios.Setup"
const defaultURL = 'http://localhost:3000'

class AxiosAPI 
{
    constructor(URL = defaultURL )
    {
        this.api = AxiosInstance(URL)
    }
    async Login(username , password)
    {
        const data = 
        {
            username : username , 
            password : password
        }
        const result = (await this.api
            .post('/api/account/login',data)).data
        return result
    }
    async Register(data)
    {
        const result = (await this.api.post('/api/account',data)).data
        return result
    }
    async UpdateAccount(id,data)
    {
        return (await this.api.put(`/api/account/${id}` , data )).data
    }
    async getAllProduct()
    {
        return (await this.api.get('/api/product')).data
    }
}

export default new AxiosAPI()