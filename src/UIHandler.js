import { LocationHandler } from "./LocationHandler";
import cloudy from "./images/cloudy.png";

export class UIHandler{

    constructor(LocationHandler){
        this.LocationHandler = LocationHandler;
    }

    createUIHandler(location){
        return new UIHandler(location);
    }

    createElement(elementType, elementClass, elementID, textContent){
        const element = document.createElement(elementType);
        element.className = elementClass;
        element.id = elementID;
        element.textContent = textContent;
        return element;
    }

    createIcon = async (elementClass, elementID, icon) => {
        const element = document.createElement("img");
        element.className = elementClass;
        element.id = elementID;
        //working on this, cant get icon to work dynamically
        const weatherIcon = await import(`./images/${icon}.png`);
        element.src = weatherIcon.default;
        return element;
    }

    createMainCard(){
        //does this need a separate container? is maininfo enough?
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

    createHourlyCard = async () => {
        const hourlyInfo = document.getElementById("hourlyInfo");
        for(let index = 0; index<this.LocationHandler.hourlyConditions.length; index++){
            const hourCard = this.createElement("div", "hourCard", "hourCard"+index);
            const hourInfo = this.LocationHandler.returnHourlyInfo(index);
            const hourDateTime = this.createElement("div", "hourDateTime", "hourDateTime"+index, hourInfo.dateTime);
            const hourTemp = this.createElement("div", "hourTemp", "hourTemp"+index, hourInfo.hourTemp);
            const hourFeelsLike = this.createElement("div", "hourFeelsLike", "hourFeelsLike"+index, hourInfo.hourFeelsLike);
            const hourConditions = await this.createIcon("hourIcon", "hourIcon"+index, hourInfo.hourIcon);
            hourCard.appendChild(hourDateTime);
            hourCard.appendChild(hourTemp);
            hourCard.appendChild(hourFeelsLike);
            hourCard.appendChild(hourConditions);
            hourlyInfo.append(hourCard);
        }
    }

    createWeeklyCard(){

    }
}