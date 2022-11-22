import React, { useState, useEffect } from "react";
import { left, right } from '../../data';
import s from "./Pagination.module.css";

interface PaginationI {
  pages: Number;
  setCurrentPage: any;
}

const Pagination = ({ pages, setCurrentPage }: PaginationI) => {
  const [currentButton, setCurrentButton]: any = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
  
  const numberOfPages: any[] = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    let tempNumberOfPages: any = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (
    <div className={s.block}>
      <div
        className={`${currentButton === 1 ? s.disabled : s.left}`}
        onClick={() =>
          setCurrentButton((prev: any) => (prev <= 1 ? prev : prev - 1))
        }
      >
        <img src={left} alt="" className={s.leftImage} />
      </div>
      <div className={s.pagination}>
        {arrOfCurrButtons.map((item, index) => (
          <div
            key={index}
            className={`${currentButton === item ? s.itemActive : s.item}`}
            onClick={() => setCurrentButton(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className={s.right}
        onClick={() =>
          setCurrentButton((prev: any) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      >
        <img
          src={right}
          alt=""
          className={`${
            currentButton === numberOfPages.length ? s.disabled : s.rightImage
          } `}
        />
      </div>
    </div>
  );
};

export default Pagination;