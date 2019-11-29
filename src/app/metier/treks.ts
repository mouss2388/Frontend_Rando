import { Picture } from './picture';

export class Treks {
  
    constructor(
        public id: number,
        public dateDeCreation: Date,
        public dateDeroulement: Date,
        public description:string,
        public nom:string,
        public organisateur:string,
        public image: Picture) { }

}