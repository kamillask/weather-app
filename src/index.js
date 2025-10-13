import { APIHandler } from "./APIHandler";
import { DOMHandler } from "./DOMHandler";
import { LocationHandler } from "./LocationHandler";
import "./styles.css";

const APIHandlerTest = new APIHandler();
const LocationHandlerTest = new LocationHandler();
const DOMHandlerTest = new DOMHandler(APIHandlerTest);
APIHandlerTest.getLocation("greenpoint");