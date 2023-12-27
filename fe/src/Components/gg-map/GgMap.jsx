import React, { useState } from "react";
import styles from "./GgMap.module.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

const libraries = ["places"];

function GgMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA66KwUrjxcFG5u0exynlJ45CrbrNe3hEc",
    libraries,
  });

  const defaultCenter = { lat: 10.870524, lng: 106.778258 };
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  const handleMarkerClick = () => {
    setShowInfoWindow(!showInfoWindow);
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={defaultCenter}
        zoom={17}
        mapStyle={{}}
      >
        <Marker position={defaultCenter} onClick={handleMarkerClick}>
          {showInfoWindow && (
            <InfoWindow onCloseClick={() => setShowInfoWindow(false)}>
              <div className={styles.marker}>
                <h4>HomeTek</h4>
                <p>
                  669 QL1A <br />
                  Khu phố 3 <br /> Thủ Đức <br /> Thành phố Hồ Chí Minh <br />{" "}
                  Việt Nam
                </p>
                <a
                  className={styles.link}
                  href="https://www.google.com/maps/place/Vietnam+National+University+HCM,+University+of+Economics+and+Law/@10.870524,106.77837,18z/data=!4m14!1m7!3m6!1s0x3175277ded87338b:0xf5d333d8b8363b2d!2zQ8SDbiB0aW4gVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBLaW5oIHThur8gLSBMdeG6rXQ!8m2!3d10.8713105!4d106.7778105!16s%2Fg%2F11gcf1q0mf!3m5!1s0x3175277dbf11a271:0x4567e34b99494e3f!8m2!3d10.8705048!4d106.7782705!16s%2Fm%2F0ds8rvh?hl=en-US&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </div>
  );
}

export default GgMap;
