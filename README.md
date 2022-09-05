# Mapping_Earthquakes
## Project Overview
In order to generate buzz about the Disaster Reporting Network, Basil is requesting an easy-to-use interactive map that will plot and display real-time earthquake data from the past 7 days.  Basil is requesting a map with color indicators relating to the magnitude, as well as a legend.  He also prefers if the radius of the point is larger, based on magnitude.  Finally, he wants pop-up for each event to show basic information about the Earthquake.

## Methods
- Mapping data was set up and styled using the Leaflet and Mapbox libraries.  
- In order to give user preference, 3 different map styles were added.
![MapStyles](https://user-images.githubusercontent.com/106561880/188359157-a48bfba4-c21b-461b-bcb4-05db108e68ec.png)

- Data was retrieved using D3 and linking to external json files.
- Separate functions were created for 3 different overlays and nested within the primary function.
![MapLayers](https://user-images.githubusercontent.com/106561880/188359176-ce8eb5f9-dbd8-4fdc-8f06-5545da0c53d8.png)

- Legend was created showing color scheme for magnitudes.
![Legend](https://user-images.githubusercontent.com/106561880/188359185-109624c0-e115-40c2-b970-4483139dbb50.png)


## Additional Elements Not Originally Requested
- Map Center was moved to a more globally centric location to allow for more intuitive view of tectonic plates.
- Fill Opacity was reduced to 70% for All Earthquakes and Major Earthquakes.
- Date and Time added to each pop up for more information.
- Legend updated to accomodate for Magnitude 6+ earthquakes, as seen above.

## Future Projects
- Add a "Minor Earthquakes" layer to toggle for earthquakes less than or equal to Magnitude 4.0.
- Possibly add layers for each level on the Richter Scale.
