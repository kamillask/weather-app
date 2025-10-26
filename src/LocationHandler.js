export class LocationHandler {
    constructor(locationData){
        this.locationName = locationData.address;
        this.currTemp = locationData.currentConditions.temp;
        this.lowTemp = locationData.days[0].tempmin;
        this.highTemp = locationData.days[0].tempmax;
        this.currConditions = locationData.currentConditions.conditions;
        this.hourlyConditions = locationData.days[0].hours;
        this.weeklyConditions = locationData.days;
        this.sunrise = locationData.currentConditions.sunrise;
        this.sunset = locationData.currentConditions.sunset;
        //populate hourly and weekly as days, but then some of these parameters would be missing
        //how to go about that?
    }

    createLocation(location) {
        return new LocationHandler(location);
    }
}