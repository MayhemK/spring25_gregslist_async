import { houseService } from "../services/HouseService.js";
import { Pop } from "../utils/Pop.js";

export class HouseController {
  constructor() {
    console.log('yerp');
    this.getHouses()

  }

  async getHouses() {
    try {
      console.log('howdy');

      await houseService.getHouse()
    } catch (error) {
      console.error('COULD NOT GET HOUSES', error);
      Pop.error(error, 'Could not can')

    }

  }
}