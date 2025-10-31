import { LocationHandler } from "./LocationHandler";

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
        const weatherIcon = await import(`./images/${icon}.png`);
        element.src = weatherIcon.default;
        return element;
    }

    createMainCard(){
        const mainInfo = document.getElementById("mainInfo");
        const locationName = this.createElement("div", "locationName", "locationNameID", this.LocationHandler.locationName);
        const currentTemp = this.createElement("div", "currentTemp", "currentTempID", this.LocationHandler.currTemp);
        const hiLoTemp = this.createElement("div", "hiLo", "hiLoID", `Hi: ${this.LocationHandler.highTemp}° Lo: ${this.LocationHandler.lowTemp}°`);
        mainInfo.appendChild(locationName);
        mainInfo.appendChild(currentTemp);
        mainInfo.appendChild(hiLoTemp);;
    }

    createHourlyCard = async () => {
        const hourlyInfo = document.getElementById("hourlyInfo");
        for(let index = 0; index < this.LocationHandler.hourlyConditions.length ; index++){
            const hourCard = this.createElement("div", "hourCard", "hourCard"+index);
            const hourInfo = this.LocationHandler.returnHourlyInfo(index);
            const hourDateTime = this.createElement("div", "hourDateTime", "hourDateTime"+index, hourInfo.dateTime.toLocaleTimeString("en-US", this.LocationHandler.hoursAmPmOptions()));
            const hourTemp = this.createElement("div", "hourTemp", "hourTemp"+index, `${hourInfo.hourTemp}°`);
            const hourConditions = await this.createIcon("hourIcon", "hourIcon"+index, hourInfo.hourIcon);
            hourCard.appendChild(hourDateTime);
            hourCard.appendChild(hourTemp);
            hourCard.appendChild(hourConditions);
            hourlyInfo.append(hourCard);
        }
    }

    createWeeklyCard = async () => {
        const weeklyInfo = document.getElementById("weeklyInfo");
        for(let index = 0; index < this.LocationHandler.weeklyConditions.length ; index++){
            const weekCard = this.createElement("div", "weekCard", "weekCard"+index);
            const weekInfo = this.LocationHandler.returnWeekInfo(index);
            const weekDateTime = this.createElement("div", "weekDateTime", "weekDateTime"+index, weekInfo.dateTime.toLocaleDateString("en-US", this.LocationHandler.monthDateOptions()));
            const weekHighLow = this.createElement("div", "weekHighLow", "weekHighLow"+index, `${weekInfo.weekHighTemp}° \ ${weekInfo.weekLowTemp}°`);
            const weekConditions = await this.createIcon("weekIcon", "weekIcon"+index, weekInfo.weekIcon);
            weekCard.appendChild(weekDateTime);
            weekCard.appendChild(weekHighLow);
            weekCard.appendChild(weekConditions);
            weeklyInfo.appendChild(weekCard);
        }
    }
}