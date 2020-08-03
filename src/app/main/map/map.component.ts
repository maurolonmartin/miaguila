import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { MapService } from '../services/map/map.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  mapa: Mapboxgl.Map;
  locations: any = [];
  stateForm: FormGroup;

  myLocation = {lat: 6.236654, lng: -75.580432};

  constructor(private mapService: MapService,
              fb: FormBuilder ) {
                this.stateForm = fb.group({
                  selectedState: new FormControl('Cundinamarca')
                });
               }

  ngOnInit() {
    this.loadMyPosition();
    Mapboxgl.accessToken = environment.mapBoxKey;

    this.mapService.getAddress().subscribe((response: any) => {
      this.locations = response;
    });

  }

  loadMyPosition() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        this.setMyLocationOnMap.bind(this),
        err => {
          console.log('No podemos acceder a su localización actual, se usara una localización por defecto', err);
          this.setMyLocationOnMap({
            coords: {
              latitude: 6.208488,
              longitude: -75.563577
            }
          });
        }
      );
    } else {
      alert('Su navegador no soporta Geolocalización');
    }
  }

  setMyLocationOnMap(position) {
    this.myLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
    this.drawMap();
  }

  drawMap() {
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.myLocation.lng, this.myLocation.lat ],
      zoom: 16
    });
  }

  setNewLocation(location) {
    this.myLocation = { lat: location.lat, lng: location.long};
    this.drawMap();
  }
}
