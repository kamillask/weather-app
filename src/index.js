import { APIHandler } from "./APIHandler";
import { DOMHandler } from "./DOMHandler";
import "./styles.css";

const APIHandlerTest = new APIHandler();
const DOMHandlerTest = new DOMHandler(APIHandlerTest);
APIHandlerTest.getLocation("greenpoint");