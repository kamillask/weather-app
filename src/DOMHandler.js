import { UIHandler } from "./UIHandler";

export class DOMHandler {
    locationInput = document.getElementById("searchWeatherInput");
    toggleUnits = document.getElementById("toggleUnits");
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

        this.toggleUnits.addEventListener("click", () => {
            this.LocationHandler.toggleUnits();
            this.updateInfo();
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


    setDOMLocation = (location) => {
        const newLocation = this.LocationHandler.createLocation(location);
        this.LocationHandler = newLocation;
        const newUIHandler = this.UIHandler.createUIHandler(this.LocationHandler);
        this.UIHandler = newUIHandler;
    }

    getLocationInput = async (location) => {
        try {
            const result = await this.APIHandler.getLocation(location);
            this.setDOMLocation(result);
            this.locationInput.setCustomValidity("");
            this.locationInput.reportValidity();
            this.updateInfo();
        } catch (err) {
            console.log("Enter a valid location" + err);
            this.locationInput.setCustomValidity("Enter a valid location.");
            this.locationInput.reportValidity();
        }
        this.locationInput.checkValidity();
    };

    updateInfo = async () => {
        this.clearAll();
        this.UIHandler.createMainCard();
        this.UIHandler.createHourlyCard();
        this.UIHandler.createWeeklyCard();
    }
}
