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
    async getProductByName(name,type)
    {
        return (await this.api.post('/api/product/name' , {productName : name+"" , type: type*1})).data
    }
    async getProductByPID(PID)
    {
        return (await this.api.get(`/api/product/${PID}`)).data
    }
    async deleteProduct(PID)
    {
        return (await this.api.delete(`/api/product/${PID}`)).data
    }
    async updateProduct(PID,data)
    {
        data.price = data.price*1
        data.quantity = data.quantity*1
        return (await this.api.put(`/api/product/${PID}` , data)).data
    }
    async addProduct(data)
    {
        data.price = data.price*1
        data.quantity = data.quantity*1
        return (await this.api.post('/api/product' , data)).data
    }

    async getAllType()
    {
        return (await this.api.get('/api/type')).data
    }
    async getCart(uid)
    {
        return (await this.api.get(`/api/cart/${uid}`)).data
    }
    async addProductToCart(uid , product)
    {
        return (await this.api.post(`/api/cart/${uid}` , product )).data
    }
    async updateCart(uid , data)
    {
        return (await this.api.put(`/api/cart/${uid}` , data )).data
    }

}

export default new AxiosAPI()