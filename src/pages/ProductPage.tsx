import React, { useEffect } from 'react';
import Job from '../components/Job/Job';
import Map from '../components/Map/Map';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import s from "./ProductPage.module.css";
const ProductPage = () => {
 const { isFetching, posts } = useTypedSelector((state) => state.posts);
 const { fetchPosts } = useActions();
useEffect(() => {
  fetchPosts();
}, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className='container'>
      <div className={s.inner}>
      <Job posts={posts}/>
      <Map posts={posts}/>
      </div>
    </div>
  );
};

export default ProductPage;