import axios,{
    AxiosResponse,
    AxiosError,
} from "../../node_modules/axios/index"
import { ICar } from "./ICar";

let Contentelement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

function showAllCars():void {
    axios.get<ICar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")
    .then(function (response: AxiosResponse<ICar[]>) : void{
        console.log(response);
    })
    .catch(function(error:AxiosError) : void{
            console.log("Error!");
            console.log(error);
        })
        console.log("Er i slutningen af showAllCars function");
}

showAllCars();