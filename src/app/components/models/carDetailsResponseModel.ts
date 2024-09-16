import { CarDetails } from "./carDetails";
import { ResponseModel } from "./responseModel";

export interface carDetailsResponseModel extends ResponseModel{
    data:CarDetails[];
}