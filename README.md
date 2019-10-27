
# Project Overview

## Project Description
This application will be one that users can search and find hikes in their local area. While searching they will be able to select the difficulty of the hike and mark it as a favorite.

Deployable Link: https://all-hikes-of-life.surge.sh

## Project Schedule
 

|  Day | Deliverable | Status
|---|---| ---|
|Sep 30th| Project Description | Complete
|Sep 30th| Wireframes / Priority Matrix / Functional Components | Complete
|Sep 30th| Pseudocode / actual code | Complete
|Oct 1st| Core Application Structure (HTML, CSS, etc.) | Complete
|Oct 2nd| Initial Clickable Model  | Complete
|Oct 3rd| MVP | Complete
|Oct 4th| Present | Complete






## Wireframes
https://ninjastorage.blob.core.windows.net/html/C32TTFx/4ce915a8-40ed-02cd-3ca9-0b7ed9d1e8a1.html



## API Data Sample
https://www.hikingproject.com/data

```
{
    "trails": [
        {
            "id": 7000130,
            "name": "Bear Peak Out and Back",
            "type": "Featured Hike",
            "summary": "A must-do hike for Boulder locals and visitors alike!",
            "difficulty": "blueBlack",
            "stars": 4.6,
            "starVotes": 108,
            "location": "Boulder, Colorado",
            "url": "https://www.hikingproject.com/trail/7000130/bear-peak-out-and-back",
            "imgSqSmall": "https://cdn-files.apstatic.com/hike/7005382_sqsmall_1554312030.jpg",
            "imgSmall": "https://cdn-files.apstatic.com/hike/7005382_small_1554312030.jpg",
            "imgSmallMed": "https://cdn-files.apstatic.com/hike/7005382_smallMed_1554312030.jpg",
            "imgMedium": "https://cdn-files.apstatic.com/hike/7005382_medium_1554312030.jpg",
            "length": 5.7,
            "ascent": 2541,
            "descent": -2540,
            "high": 8342,
            "low": 6103,
            "longitude": -105.2755,
            "latitude": 39.9787,
            "conditionStatus": "All Clear",
            "conditionDetails": "",
            "conditionDate": "2019-08-10 16:37:58"
        },

```
  

#### MVP

- Find and use external api 
- render images
- Render data on page 
- Allow user to choose a specific hike

#### PostMVP
- Add second API that gets city 
- Use local storage to save user favorites
- use map for locating maps


## React Component Hierarchy

https://www.lucidchart.com/invitations/accept/33710cf4-4487-484f-8bd1-163c24fd7710


## Priority Matrix

https://ninjastorage.blob.core.windows.net/html/C32TTFx/578a06b4-20d8-a67e-cd9b-5158bacfb72a.html

## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
|APP| This will render all components as they are utilized | 
| Header | This will render the header include the nav | 
| HikeDetail | This will render a separate page that will list specific details about the hike | 
| Hike | This will render the opening page where users can select hikes | 
| HikeList | This will render the hikes currently available in the area by geoLocation and has a searchable function | 
| SearchResult | This will contain a form that will populate the hikeList from a city/state search | 
| NotFound | This will render an image stating that the location is not found | 
| Favorites| This will render the hiker favs | 
| Footer | This will render the footer include the nav | 



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | M | 1hrs| 1hrs | 1hrs |
| Working with API | H | 2hrs| 2hrs | 2hrs |
| Header | M | 3hrs| 1hrs |1hrs |
| Footer | M | 2hrs| 1hrs | 1hrs |
| HikeList | H | 3hrs| 5hrs | 5hrs |
| HikeDetail| H | 3hrs| 5hrs | 5hrs |
| SearchResults| M | 4hrs| 2.5hrs | 2.5hrs | PMVP |
| Favorites| H | 4hrs| hrs | hrs |  PMVP |
| NotFound| L | 1hrs| 1 hrs | 1hrs |
| Styling| H | 6hrs| 6hrs | 6hrs |
| WireFraming| H | 2hrs| 1hrs | 1hrs |
| Total | M | 31hrs| 26.5hrs | 26.5hrs |

## Additional Libraries
 https://api.opencagedata.com/geocode/v1/json?q=newyork&key=15ff9fe808984f1ca9d347f81db54d48
 Allowed me to call a city and get that city's latitude and longitude to input into the hikingproject api.
 

## Code Snippet

This call allowed for geolocation. 

```
  axiosCallByCoordinates() {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(async position => {
                let lat = position.coords.latitude;

                let lon = position.coords.longitude;
              
                this.setState({
                    lat: lat,
                    lon: lon
                })
                const url = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lon}&maxResults=40&key=200602842-d85aaa22cf9dc2a1ba17569b62a04f4e`
                const response = await axios(url)
                console.log(response.data.trails)
                this.setState({
                    trails: response.data.trails,
                })
            }, 
                error => {
                    console.log("Error:", error)
                },
                { enableHighAccuracy: true })
        }
    }
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object