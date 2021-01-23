import Leaflet from 'leaflet';

import mapMarkerImg from '../Images/icon-map.png';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [70, 70],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

  export default mapIcon;