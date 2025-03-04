import { api } from "../utils/Axios.js";

class HouseService {
  async getHouse() {
    const response = await api.get('api/houses')
    console.log('got Houses', response.data);

  }
}

export const houseService = new HouseService()