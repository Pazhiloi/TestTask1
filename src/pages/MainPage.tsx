import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import Product from '../components/Product/Product';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import s from './MainPage.module.css'

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
  const {posts, isFetching} = useTypedSelector(state => state.posts)
   const { fetchPosts } = useActions();
   useEffect(() => {
     fetchPosts();
   }, []);

   if (isFetching) {
    return <h2>Loading...</h2>;
   }

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
const howManyPages = Math.ceil(posts.length / postsPerPage);
  return (
    <div>
      <div className={s.products}>
        {currentPosts.map((post) => (
          <Product key={post.id} {...post} />
        ))}
      </div>
      <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MainPage;