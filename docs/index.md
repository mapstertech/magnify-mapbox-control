<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css' rel='stylesheet' />
    
## Magnify Mapbox Control

This is a control meant to help with accessibility for people who have vision impairments and wish to be able to see elements more clearly on Mapbox maps. You can easily add this control and customize the amount of magnification it allows.

### Example

<div>
    <div id="map" style="width:100%;height:400px;"></div>
</div>

<script type="text/javascript">

    mapboxgl.accessToken = 'pk.eyJ1IjoidGVtcHJhbm92YSIsImEiOiJjaWd0c3M2MW4wOHI2dWNrbzZ5dWo1azVjIn0.x5sm8OjRxO9zO_uUmxYEqg';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    });
  
</script>

### Support or Contact

Having any trouble? Get in touch with us at [https://mapster.me](https://mapster.me).
