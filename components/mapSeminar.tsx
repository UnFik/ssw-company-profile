"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
  ViewState,
} from "react-map-gl/maplibre";
import Image from "next/image";
import "maplibre-gl/dist/maplibre-gl.css";
import seminarData from "../data/seminar.json";
import { ItemSlider } from "./slider";
import Slider from "react-slick";

const locations = seminarData;

interface Location {
  id: number;
  name: string;
  region: string;
  address: string;
  long: number;
  lat: number;
  img: string;
  is_active: number;
  time: string;
}

const MapSeminar = () => {
  const sliderRef = useRef<Slider | null>(null);
  const mapRef = useRef<any | null>(null);

  const [popupInfo, setPopupInfo] = useState<Location | null>(null);

  const scrollToSlide = useCallback(
    (index: number) => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(index);
      }
    },
    [sliderRef]
  );

  const handleJumpTo = useCallback(
    (long: number, lat: number) => {
      mapRef.current.easeTo(
        {
          center: [long, lat],
          zoom: 13,
          bearing: 0,
          pitch: 0,
        },
        {
          duration: 2000,
          easing: (t: number) => t,
        }
      );
    },
    [mapRef]
  );

  const pins = useMemo(
    () =>
      locations.map((location: Location, index: number) => (
        <Marker
          key={`marker-${index}`}
          longitude={location.long}
          latitude={location.lat}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(location);
            scrollToSlide(index);
            handleJumpTo(location.long, location.lat);
          }}
        >
          <Image
            className="h-8 w-8"
            src="/icon/icon-building.svg"
            alt="Marker"
            sizes="(max-width: 768px) 100vw, 700px"
            width={40}
            height={40}
          />
        </Marker>
      )),
    [handleJumpTo, scrollToSlide]
  );

  return (
    <div>
      <Map
        reuseMaps
        ref={mapRef}
        initialViewState={{
          longitude: 106.88713287251107,
          latitude: -6.333167585418251,
          zoom: 9.5,
          bearing: 0,
          pitch: 0,
        }}
        style={{ width: "100%", height: " calc(100vh - 250px)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=WFertlSF3oXMdAiFWVMX"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.long)}
            latitude={Number(popupInfo.lat)}
            onClose={() => setPopupInfo(null)}
          >
            <div className="mb-3">
              <h2 className="font-semibold text-lg">{popupInfo.name}</h2>
              <div className="flex flex-row gap-1 mb-2">
                <Image
                  className="my-auto hover:opacity-80 "
                  src="icon/icon-time.svg"
                  alt="Seminar Time"
                  width={14}
                  height={14}
                />
                <p className="my-auto">{popupInfo.time}</p>
              </div>
              <p>{popupInfo.address}</p>
            </div>
            <Image
              className="object-cover rounded-sm w-full h-auto"
              src={popupInfo.img}
              alt="Marker"
              sizes="(max-width: 768px) 100vw, 700px"
              width={40}
              height={40}
            />
          </Popup>
        )}
      </Map>
      <div className="py-8 px-5 w-full bg-primary">
        <ItemSlider
          locations={locations}
          ref={sliderRef}
          handleJumpTo={handleJumpTo}
          setPopupInfo={setPopupInfo}
        />
      </div>
    </div>
  );
};

export default MapSeminar;
