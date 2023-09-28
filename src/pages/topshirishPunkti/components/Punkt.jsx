import Images from "@/assets/images";
import { useCallback, useState, useMemo } from "react";
import {
  FullscreenControl,
  Map,
  Placemark,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import usePurchaseContext from "../context/usePurchase";

const Punkt = () => {
  const {
    actions: { addressByPoint },
  } = usePurchaseContext();
  const [mapCenter /* setMapCenter */] = useState([41.2995, 69.2401]);
  const [mapZoom /* setMapZoom */] = useState(11);
  const [location, setLocation] = useState([41.2995, 69.2401]);
  const placeMarkOptions = useMemo(
    () => ({
      iconLayout: "default#image",
      iconImageHref: Images.location_pick, // Replace with the path to your custom icon
      iconImageSize: [30, 45], // Adjust the size of your custom icon
      iconImageOffset: [-14, -45], // Adjust the offset if needed
      zIndex: 1000,
      draggable: true,
    }),
    []
  );

  const onMapClick = useCallback((e) => {
    const latLng = e.get("coords") as [number, number];
    addressByPoint({
      latitude: latLng[0],
      longitude: latLng[1],
    });
    setLocation(latLng);
  }, []);

  return (
    <>
      <p className="text-gray">{${location[0]}, ${location[1]}}</p>
      <YMaps /* query={{ apikey: "8b56a857-f05f-4dc6-a91b-bc58f302ff21" }} */>
        <Map
          state={{ center: mapCenter, zoom: mapZoom }}
          // instanceRef={this.map}
          /* onLoad={(ymapsInstance: any) => {
          this.ymaps.current = ymapsInstance;
          this.addSearchControlEvents();
        }} */
          onMouseDown={onMapClick}
          width="100%"
          height="400px"
          // modules={["control.SearchControl"]}
        >
          <Placemark
            properties={{
              balloonContent: "<strong>crocodile's nose</strong> color",
              iconCaption: "Really, really long but super interesting text",
            }}
            options={placeMarkOptions}
            geometry={location}
          />
          <ZoomControl
            options={{ float: "none", position: { top: 100, right: 10 } }}
          />
          <FullscreenControl />
        </Map>
      </YMaps>
    </>
  );
};

export default Punkt;
