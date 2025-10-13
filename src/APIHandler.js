export class APIHandler{
    constructor(){
        this.APIKey = "Y7CKTJ3E4NJPSSRBPNQEXN47L";
    }

    getLocation = async location => {
        try{
            const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"/?key="+this.APIKey);
            const locationData = await response.json();
            console.log(locationData);
        } catch(err){
            console.log("Location not found.")
        }
    }
}