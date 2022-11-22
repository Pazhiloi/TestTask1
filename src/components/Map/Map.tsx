import React from "react";
import { locationn, marker } from "../../data";
import { useParams } from "react-router-dom";
import s from "./Map.module.css";
import GoogleMapReact from "google-map-react";
import { darkStyle } from "./mapStyles";

interface Location {
  lat: Number;
  long: Number;
}
interface PostObject {
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  name: string;
  phone: string;
  salary: string;
  title: string;
  updatedAt: string;
  pictures: string[];
  location: Location;
  employment_type: string[];
  id: string;
}
const Map = ({ posts }: any) => {
  const { id } = useParams();
  const post = posts.find((p: PostObject) => p.id === id);
  const defaultProps = {
    center: {
      lat: post?.location.lat,
      lng: post?.location.long,
    },
    zoom: 14,
  };
  const Marker = ({ text }: any) => {
    return <img src={text} alt="" />;
  };

  return (
    <>
      <div className={s.mainTitle}>Contacts</div>
      <div className={s.block}>
        <div className={s.top}>
          <div className={s.title}>
            Department name. University Hospital Giessen.
          </div>
          <div className={s.wrapper}>
            <img src={locationn} alt="" className={s.smallLocation} />
            <p className="text white">{post?.address} </p>
          </div>
          <p className="text mb10 white">{post?.phone},</p>
          <p className="text white">{post?.email}</p>
        </div>
        <div className={s.map} id="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAIvo4zUjhlMa3wbZFIIhpArwRlODBO2hs",
            }}
            options={{ styles: darkStyle }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <Marker
              lat={post?.location.lat}
              lng={post?.location.long}
              text={marker}
            />
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
};

export default Map;
