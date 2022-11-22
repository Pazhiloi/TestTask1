import React from "react";
import { arrow, bookmark, share, star } from "../../data";
import Button from "../Button/Button";
import MainButton from "../MainButton/MainButton";
import { Link, useParams } from "react-router-dom";
import s from "./Job.module.css";
import { convertToTimestamp, getTodayDate } from "../../helpers/date";


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

const Job = ({ posts }: any) => {
  const { id } = useParams();
  const post = posts.find((p: PostObject) => p.id === id);
  
  const dateTime = getTodayDate();
  const dateAgo = convertToTimestamp(post?.createdAt, dateTime);

  return (
    <div>
      <div className={s.top}>
        <div className="title">Job Details</div>
        <div className={s.wrapper}>
          <div className={s.imageWrapper}>
            <img src={bookmark} alt="" className={s.markImage} />
            <img src={star} alt="" className={s.starImage} />
            <p className="text">Save to my list</p>
          </div>
          <div className={s.imageWrapper}>
            <img src={share} alt="" className={s.image} />
            <p className="text">Share</p>
          </div>
        </div>
      </div>
      <div className={s.mainButton}>
        <MainButton />
      </div>
      <div className={s.info}>
        <div className={s.infoWrapper}>
          <div className={s.infoTitle}>{post?.title}</div>
          <div className={s.infoPrice}>
            <div className={s.price}>€ {post?.salary}</div>
            <div className="text">Brutto, per year</div>
          </div>
        </div>
        <div className={s.dateWrapper}>
          <div className={s.date}>Posted {dateAgo} years ago</div>
          <div className={s.mediaPrice}>
            <div className={s.price}>€ {post?.salary}</div>
            <div className="text">Brutto, per year</div>
          </div>
        </div>
        <div className={s.textWrapper}>
          <p className="text mb40">{post?.description}</p>
          <div className={s.subtitle}>Responsibilities</div>
          <p className="text mb40">
            Wellstar Medical Group, a physician-led multi-specialty group in
            Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
            surgeon to join their existing cardiovascular program. This is an
            opportunity to play a key role on a multidisciplinary team of
            cardiologists and surgeons.
          </p>
          <p className="text mb40">
            The ideal candidate will have five or more years of experience in
            cardiac surgery. This candidate should be facile with off-pump
            revascularization, complex aortic surgery, minimally invasive valve
            and valve repair, transcatheter valve replacement, surgical atrial
            fibrillation ablation, ventricular assist device placement, and
            extra corporeal membrane oxygenation.
          </p>
          <p className="text mb40">
            Wellstar is one of the largest integrated healthcare systems in the
            Southeast with 11 hospitals in Atlanta metro region. With two open
            heart programs at Kennestone Regional Medical Center and Atlanta
            Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac
            procedures per year. The cardiac service line is the only center in
            Georgia with the Joint Commission’s Comprehensive Cardiac Center
            certification.
          </p>
        </div>
        <div className={s.subtitle}>Compensation & Benefits:</div>
        <div className={s.textWrapper}>
          <p className="text">
            Our physicians enjoy a wide range of benefits, including:
          </p>
        </div>
        <ul className={s.list}>
          <li className={s.listItem}>
            Very competitive compensation package with bonuses
          </li>
          <li className={s.listItem}>Medical, Dental, and Vision Insurance</li>
          <li className={s.listItem}>Occurrence-based Malpractice Coverage</li>
          <li className={s.listItem}>
            Short-term and Long-term Disability Insurance and life insurance
          </li>
        </ul>
        <div className={s.buttonWrapper}>
          <MainButton />
        </div>
      </div>
      <div className={s.additionalWrapper}>
        <div className={s.additional}>
          <div className={s.titleWrapper}>
            <div className="title mb25">Additional info</div>
          </div>
          <div className="text mb10">Employment type</div>
          <div className={s.buttons}>
            {post?.employment_type.map((item:string, i:number) => (
              <div key={i} className={s.button}>
                <Button title={item} color="blue" />
              </div>
            ))}
          </div>
          <div className="text mb10">Benefits</div>
          <div className={s.buttons}>
            {post?.benefits.map((item:string, i:number) => (
              <div key={i} className={s.button}>
                <Button title={item} color="yellow" />
              </div>
            ))}
          </div>
        </div>
        <div className={s.images}>
          <div className={s.titleWrapper}>
            <div className="title mb30 ">Attached images</div>
          </div>

          <div className={s.items}>
            {post?.pictures.map((item: string, i: number) => (
              <div key={i} className={s.itemWrapper}>
                <img src={item} alt="" className={s.item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link to={"/"} className={s.link}>
          {" "}
          <img src={arrow} alt="" className={s.arrow} /> RETURN TO JOB BOARD
        </Link>
      </div>
    </div>
  );
};

export default Job;


