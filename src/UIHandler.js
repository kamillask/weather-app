import { APIHandler } from "./APIHandler";

export class UIHandler{

    constructor(LocationHandler){
        this.LocationHandler = LocationHandler;
        this.APIHandler = new APIHandler();
    }

    capitalizeWords = (string) => {
        const separatedString = string.split(" ");
        let result = "";
        separatedString.forEach(element => {
            const charArray = element.split("");
            charArray.splice(0, 1, charArray[0].toUpperCase());
            result+= charArray.join("")+" ";
        })
        return result.trim();
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
        const weatherIcon = await import(`./images/icons/${icon}.svg`);
        element.src = weatherIcon.default;
        return element;
    }

    createBackground = async (background, element) => {
        const weatherBackground = await import(`./images/backgrounds/${background}.jpg`);
        const result = weatherBackground.default;
        element.style.backgroundImage = `url("${result}")`;
    }

    createMainCard = async () => {
        const mainInfo = document.getElementById("mainInfo");
        const mainContainer = this.createElement("div", "mainContainer", "mainContainerID")
        const mainInfoReturn = this.LocationHandler.returnDayInfo();
        const locationName = this.createElement("div", "locationName", "locationNameID", this.capitalizeWords(mainInfoReturn.name));
        const currentTemp = this.createElement("div", "currentTemp", "currentTempID", mainInfoReturn.currentTemperature+"°");
        const hiLoTemp = this.createElement("div", "hiLo", "hiLoID", `Hi: ${mainInfoReturn.currentHigh}° Lo: ${mainInfoReturn.currentLow}°`);
        this.createBackground(mainInfoReturn.dayIcon, mainInfo);
        mainContainer.appendChild(locationName);
        mainContainer.appendChild(currentTemp);
        mainContainer.appendChild(hiLoTemp);
        mainInfo.appendChild(mainContainer);
    }

    createHourlyCard = async () => {
        const hourlyInfo = document.getElementById("hourlyInfo");
        for(let index = 0; index < this.LocationHandler.hourlyConditions.length ; index++){
            const hourContainer = this.createElement("div", "hourContainer", "hourContainer"+index);
            const hourCard = this.createElement("div", "hourCard", "hourCard"+index);
            const hourInfo = this.LocationHandler.returnHourlyInfo(index);
            const hourDateTime = this.createElement("div", "hourDateTime", "hourDateTime"+index, hourInfo.dateTime.toLocaleTimeString("en-US", this.LocationHandler.hoursAmPmOptions()));
            const hourTemp = this.createElement("div", "hourTemp", "hourTemp"+index, `${hourInfo.hourTemp}°`);
            const hourConditions = await this.createIcon("hourIcon", "hourIcon"+index, hourInfo.hourIcon);
            this.createBackground(hourInfo.hourIcon, hourCard);
            hourContainer.appendChild(hourDateTime);
            hourContainer.appendChild(hourTemp);
            hourContainer.appendChild(hourConditions);
            hourCard.appendChild(hourContainer);
            hourlyInfo.append(hourCard);
        }
    }

    createWeeklyCard = async () => {
        const weeklyInfo = document.getElementById("weeklyInfo");
        for(let index = 0; index < this.LocationHandler.weeklyConditions.length ; index++){
            const weekContainer = this.createElement("div", "weekContainer", "weekContainer"+index);
            const weekCard = this.createElement("div", "weekCard", "weekCard"+index);
            const weekInfo = this.LocationHandler.returnWeekInfo(index);
            const weekDateTime = this.createElement("div", "weekDateTime", "weekDateTime"+index, weekInfo.dateTime.toLocaleDateString("en-US", this.LocationHandler.monthDateOptions()));
            const weekHighLow = this.createElement("div", "weekHighLow", "weekHighLow"+index, `${weekInfo.weekHighTemp}° \ ${weekInfo.weekLowTemp}°`);
            const weekConditions = await this.createIcon("weekIcon", "weekIcon"+index, weekInfo.weekIcon);
            this.createBackground(weekInfo.weekIcon, weekCard);
            weekContainer.appendChild(weekDateTime);
            weekContainer.appendChild(weekHighLow);
            weekContainer.appendChild(weekConditions);
            weekCard.appendChild(weekContainer);
            weeklyInfo.appendChild(weekCard);
        }
    }
}