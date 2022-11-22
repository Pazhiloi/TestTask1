import React from 'react';
import s from './Product.module.css'
import { locationn, bookmark } from "../../data";
import { convertToTimestamp, getTodayDate } from '../../helpers/date';
import { Link } from 'react-router-dom';
import Star from '../Star/Star';
const Product = (props: any) => {
  const { title, createdAt, address, pictures, id } = props;
 const dateTime = getTodayDate();
 const dateAgo = convertToTimestamp(createdAt, dateTime);
  return (
    <div className={s.product}>
      <div className={s.productRight}>
        <div className={s.stars}>
          <Star rating={5} />
        </div>
        <div className={s.wrapper}>
          <img src={bookmark} alt="" className={s.bookmark} />
          <div className={s.date}>Posted {dateAgo} years ago</div>
        </div>
      </div>
      <div className={s.productLeft}>
        <div>
          <img src={pictures[0]} alt="" className={s.productImage} />
        </div>
        <div className={s.productInfo}>
          <Link to={`/product/${id}`} className={s.productTitle}>
            {title}
          </Link>
          <div className={s.productText}>
            Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
          </div>
          <div className={s.productLocation}>
            <img src={locationn} alt="" className={s.locationImage} />
            <p className={s.location}>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;