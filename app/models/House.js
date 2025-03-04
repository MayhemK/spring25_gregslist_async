export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get card() {
    return `
    <div class="col-12">
      <div class="row bg-light shadow car-border mb-3" ;">
        <div class="col-md-4 px-0">
          <img src="${this.imgUrl}" alt="A picture of a ${this.bedrooms} bedroom ${this.bathrooms} bathroom house for sale" class="car-img">
        </div>
        <div class="col-md-8">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <p class="fs-3 mb-1">${this.year} ${this.bedrooms} ${this.bathrooms}</p>
              <div class="d-flex mt-1 justify-content-between align-items-center">
                <p class="fs-3">$${this.price.toLocaleString()}</p>
                <p class="fs-4">Floors: ${this.levels}</p>
              </div>
              <p>${this.description}</p>
            </div>
            <div class="d-flex justify-content-between mb-1">
              <div>
                <img src="${this.creator.picture}" alt="${this.creator.name}" class="creator-img">
                <span>${this.creator.name}</span>
              </div>
             ${this.deleteButton}
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}