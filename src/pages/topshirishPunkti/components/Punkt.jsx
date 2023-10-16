// import { Fullscreen } from "@mui/icons-material";
import React from "react";
import { FullscreenControl, Map, Placemark, TrafficControl, YMaps, ZoomControl } from "react-yandex-map";

const Punkt = () => {
  return (
    <div className="maps">
      <YMaps>
        <Map
          defaultState={{
            center: [41.374531, 69.295915],
            zoom: 11,
          }}
        >
          <Placemark geometry={[41.374531, 69.295915]} />
          <Placemark geometry={[41.3711, 69.265426]} />
          <ZoomControl options={{ float: "left" }} />
          <TrafficControl options={{float:"right"}} />
          <FullscreenControl options={{float:"left"}} />

        </Map>
      </YMaps>
    </div>
  );
};

export default Punkt;
