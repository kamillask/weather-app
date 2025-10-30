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
    }

    createLocation = (location) => {
        return new LocationHandler(location);
    }

    //should this be in UI instead?
    hoursAmPmOptions = () => {
        const options = {
            hour: "numeric",
            hour12: true
        }
        return options;
    }

    returnHourlyInfo = (index) => {
        const hour = {
            dateTime: new Date(`${this.weeklyConditions[0].datetime}T${this.hourlyConditions[index].datetime}`),
            hourTemp: this.hourlyConditions[index].temp,
            hourFeelsLike: this.hourlyConditions[index].feelslike,
            hourIcon: this.hourlyConditions[index].icon
        }
        return hour;
    }

    returnWeekInfo = () => {

    }
}