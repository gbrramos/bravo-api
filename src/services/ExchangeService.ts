import axios from 'axios';
import 'dotenv/config'

const Exchange: any = {};

Exchange.list = async () => {
   try {
      const response = await axios.get(`http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.api_key}`)
      return response.data;
   } catch (error: any) {
      console.error(error)
   }
}

module.exports = Exchange;