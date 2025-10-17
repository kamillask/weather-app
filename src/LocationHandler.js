export class LocationHandler {
    constructor(locationData){
        this.locationName = locationData.address;
        this.currTemp = locationData.currentConditions.temp;
        this.currConditions = locationData.currentConditions.conditions;
        this.hourlyConditions = locationData.days[0].hours;
        this.weeklyConditions = locationData.days;
        this.sunrise = locationData.currentConditions.sunrise;
        this.sunset = locationData.currentConditions.sunset;
        //populate hourly and weekly as ddadys, but then some of these parameters would be missing
        //how to go about that?
    }
}