# Mapping_Earthquakes
## Project Overview
In order to generate buzz about the Disaster Reporting Network, Basil is requesting an easy-to-use interactive map that will plot and display real-time earthquake data from the past 7 days.  Basil is requesting a map with color indicators relating to the magnitude, as well as a legend.  He also prefers if the radius of the point is larger, based on magnitude.  Finally, he wants pop-up for each event to show basic information about the Earthquake.

## Methods
- Mapping data was set up and styled using the Leaflet and Mapbox libraries.  
- In order to give user preference, 3 different map styles were added.
- Data was retrieved using D3 and linking to external json files.
- Separate functions were created for 3 different overlays and nested within the primary function.
- Legend was created showing color scheme for magnitudes.


## Additional Elements Not Originally Requested
- Map Center was moved to a more globally centric location to allow for more intuitive view of tectonic plates.
- Fill Opacity was reduced to 70% for All Earthquakes and Major Earthquakes.
- Date and Time added to each pop up for more information.
- Legend updated to accomodate for Magnitude 6+ earthquakes.

## Future Projects
- Add a "Minor Earthquakes" layer to toggle for earthquakes less than or equal to Magnitude 4.0.
- Possibly add layers for each level on the Richter Scale.