export class DOMHandler {
    locationInput = document.getElementById("searchWeatherInput");

    constructor(APIHandler) {
        this.APIHandler = APIHandler;

        this.locationInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                console.log("ented")
                this.getLocationInput(this.locationInput.value);
            }
        });
    }

    getLocationInput = async (location) => {
        try {
            await this.APIHandler.getLocation(location);
        } catch (err) {
            console.log("Enter a valid location");
        }
    };
}
