import { LocationHandler } from "./LocationHandler";

export class UIHandler{

    constructor(LocationHandler){
        this.LocationHandler = LocationHandler;
    }

    createElement(elementType, elementClass, elementID, textContent){
        const element = document.createElement(elementType);
        element.className = elementClass;
        element.id = elementID;
        element.textContent = textContent;
        return element;
    }

    createMainCard(){
        const mainInfo = document.getElementById("mainInfo");
        const mainContainer = this.createElement("div", "mainCard", "mainCardElement");
        const locationName = this.createElement("div", "locationName", "locationNameID", this.LocationHandler.locationName);
        const currentTemp = this.createElement("div", "currentTemp", "currentTempID", this.LocationHandler.currTemp);
        const hiLoTemp = this.createElement("div", "hiLo", "hiLoID", `Hi: ${this.LocationHandler.highTemp} Lo: ${this.LocationHandler.lowTemp}`);
        mainContainer.appendChild(locationName);
        mainContainer.appendChild(currentTemp);
        mainContainer.appendChild(hiLoTemp);
        mainInfo.appendChild(mainContainer);
    }

    createHourlyCard(){

    }

    createWeeklyCard(){

    }
}