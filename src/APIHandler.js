export class APIHandler{
    constructor(){
        this.weatherAPIKey = "Y7CKTJ3E4NJPSSRBPNQEXN47L";
        this.giphyAPIKey = "t9hvInbDYCBWd7kGzRvn6aOr29ZI4DDz";
    }

    getLocation = async location => {
        try{
            const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"/?key="+this.weatherAPIKey);
            const locationData = await response.json();
            console.clear();
            console.log(locationData);
            return locationData;
        } catch(err){
            console.log("Location not found.")
        }
    }

    getImage = async search => {
        try{
            const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=" + this.giphyAPIKey + "&s=" + search);
            const imageData = await response.json();
            console.log(imageData.data.images.original.url)
            return imageData.data.images.original.url;

        } catch(err){
            console.log(err.message);
        }
    }
}