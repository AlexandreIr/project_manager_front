import Precification from "./Precification";
import Specifications from "./Specifications";

export default interface Product extends Precification{
    id:number
    name:string
    description:string
    brand:string
    model:string
    image:string
    score:number
    tags:string[]
    videoReview: string
    specifications: Specifications
}