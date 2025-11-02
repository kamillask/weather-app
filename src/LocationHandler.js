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
        this.setUnits = 0;  //0 = fahrenheit, 1 = celsius
    }

    createLocation = (location) => {
        return new LocationHandler(location);
    }

    toggleUnits = () => {
        if(this.setUnits===0){
            this.setUnits=1;
        } else{
            this.setUnits=0;
        }
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

    calculateCelsius(temperature){
        return Math.round((temperature-32) * (5/9)*10)/10;
    }

    returnDayInfo = () => {
        const day = {
            name: this.locationName,
            currentTemperature: this.setUnits===0 ? this.currTemp : this.calculateCelsius(this.currTemp),
            currentHigh: this.setUnits===0 ? this.highTemp : this.calculateCelsius(this.highTemp),
            currentLow: this.setUnits===0 ? this.lowTemp : this.calculateCelsius(this.lowTemp)
        }
        return day;
    }

    returnHourlyInfo = (index) => {
        const hour = {
            dateTime: new Date(`${this.weeklyConditions[0].datetime}T${this.hourlyConditions[index].datetime}`),
            hourTemp: this.setUnits===0 ? this.hourlyConditions[index].temp : this.calculateCelsius(this.hourlyConditions[index].temp),
            hourIcon: this.hourlyConditions[index].icon
        }
        return hour;
    }

    returnWeekInfo = (index) => {
        const week = {
            dateTime: new Date(`${this.weeklyConditions[index].datetime}T${this.hourlyConditions[index].datetime}`),
            weekHighTemp : this.setUnits===0 ? this.weeklyConditions[index].tempmax : this.calculateCelsius(this.weeklyConditions[index].tempmax),
            weekLowTemp : this.setUnits===0 ? this.weeklyConditions[index].tempmin : this.calculateCelsius(this.weeklyConditions[index].tempmin),
            weekIcon : this.weeklyConditions[index].icon
        }
        return week;
    }
}