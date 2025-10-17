export class APIHandler{
    constructor(){
        this.APIKey = "Y7CKTJ3E4NJPSSRBPNQEXN47L";
    }

    getLocation = async location => {
        try{
            const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"/?key="+this.APIKey);
            const locationData = await response.json();
            console.clear();
            console.log(locationData);
            console.log(locationData.address);
            console.log(locationData.currentConditions.temp);
            console.log(locationData.currentConditions.conditions);
            console.log(locationData.days[0].hours);
            console.log(locationData.days);
            console.log(locationData.currentConditions.sunrise);
            console.log(locationData.currentConditions.sunset);
            return locationData;
        } catch(err){
            console.log("Location not found.")
        }
    }
}