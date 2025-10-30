import { UIHandler } from "./UIHandler";

export class DOMHandler {
    locationInput = document.getElementById("searchWeatherInput");
    mainInfo = document.getElementById("mainInfo");

    constructor(APIHandler, LocationHandler) {
        this.APIHandler = APIHandler;
        this.LocationHandler = LocationHandler;
        this.UIHandler = new UIHandler(LocationHandler);

        this.locationInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.getLocationInput(this.locationInput.value);
            }
        });
    }

    clearElement = (element) => {
        const content = document.getElementById(element);
        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
    }

    clearAll = () => {
        this.clearElement("mainInfo");
        this.clearElement("hourlyInfo");
        this.clearElement("weeklyInfo");
    }

    //move to different class
    setDOMLocation = (location) => {
        const newLocation = this.LocationHandler.createLocation(location);
        this.LocationHandler = newLocation;
        const newUIHandler = this.UIHandler.createUIHandler(this.LocationHandler);
        this.UIHandler = newUIHandler;
    }
    //move to different class
    getLocationInput = async (location) => {
        try {
            const result = await this.APIHandler.getLocation(location);
            this.setDOMLocation(result);
            this.updateInfo();
        } catch (err) {
            console.log("Enter a valid location" + err);
        }
    };

    updateInfo = async () => {
        this.clearAll();
        this.UIHandler.createMainCard();
        this.UIHandler.createHourlyCard();
        this.updateWeeklyInfo();
    }

    updateHourlyInfo = () => {
        const hourlyInfo = document.getElementById("hourlyInfo");
        this.LocationHandler.hourlyConditions.forEach(element => {
            const hour = document.createElement("div");
            hour.textContent = element.datetime + " ::: " + element.temp;
            hourlyInfo.appendChild(hour);
        })
    }

    updateWeeklyInfo = () => { 
        const weeklyInfo = document.getElementById("weeklyInfo");
        this.LocationHandler.weeklyConditions.forEach(element => {
            const day = document.createElement("div");
            day.textContent = element.datetime + " ::: " + element.temp;
            weeklyInfo.appendChild(day);
        })
    }
}
