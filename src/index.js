import { APIHandler } from "./APIHandler";
import { DOMHandler } from "./DOMHandler";
import { LocationHandler } from "./LocationHandler";
import "./styles.css";

const initializeApp = async () => {
    try{
        const APIHandlerTest = new APIHandler();
        const greenpointWeather = await APIHandlerTest.getLocation("greenpoint");
        const LocationHandlerTest = new LocationHandler(greenpointWeather);
        const DOMHandlerTest = new DOMHandler(APIHandlerTest, LocationHandlerTest);
        DOMHandlerTest.updateInfo();
    } catch(err){
        console.error("Failed to initialize the app: ", err);
    }
}

initializeApp();


