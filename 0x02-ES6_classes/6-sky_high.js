import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getters
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // Methods
  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors`);
  }
}

