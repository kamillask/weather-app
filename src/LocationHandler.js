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
        let setUnits = 0;  //0 = fahrenheit, 1 = celsius
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

    monthDateOptions = () => {
        const options = {
            month: "short",
            day: "numeric"
        }
        return options;
    }

    returnDayInfo = () => {
        const day = {

        }
        return day;
    }

    returnHourlyInfo = (index) => {
        const hour = {
            dateTime: new Date(`${this.weeklyConditions[0].datetime}T${this.hourlyConditions[index].datetime}`),
            hourTemp: this.hourlyConditions[index].temp,
            hourIcon: this.hourlyConditions[index].icon
        }
        return hour;
    }

    returnWeekInfo = (index) => {
        const week = {
            dateTime: new Date(`${this.weeklyConditions[index].datetime}T${this.hourlyConditions[index].datetime}`),
            weekHighTemp : this.weeklyConditions[index].tempmax,
            weekLowTemp : this.weeklyConditions[index].tempmin,
            weekIcon : this.weeklyConditions[index].icon
        }
        return week;
    }
}