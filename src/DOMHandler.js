export class DOMHandler {
    locationInput = document.getElementById("searchWeatherInput");
    mainInfo = document.getElementById("mainInfo");

    constructor(APIHandler, LocationHandler) {
        this.APIHandler = APIHandler;
        this.LocationHandler = LocationHandler;

        this.locationInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                this.getLocationInput(this.locationInput.value);
            }
        });
    }

    setDOMLocation = (location) => {
        this.LocationHandler = location;
    }

    getLocationInput = async (location) => {
        try {
            const result = await this.APIHandler.getLocation(location);
            this.setDOMLocation(result);
            this.updateInfo();
        } catch (err) {
            console.log("Enter a valid location");
        }
    };

    updateInfo = () => {
        this.mainInfo.textContent = this.LocationHandler.address;
    }
}
