import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/newsSlice";
import S from "../../style/component/home/homebody.module.scss";

import { Link } from "react-router-dom";
import Pagination from "../../shared/Pagination";

const HomeBody = () => {
  const newsList = useSelector((state) => state.news.news);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);

  const updatePage = (pageNo) => {
    if (pageNo > pageCount) {
      pageNo = 1;
    }
    const skip = (currentPage - 1) * limit;
    setCurrentPageData(newsList?.slice(skip, skip + limit));
    setCurrentPage(pageNo);
  };

  const onNext = () => {
    if (currentPage < pageCount) {
      updatePage(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    updatePage(currentPage);
  }, [currentPage]);

  return (
    <>
      {newsList?.length > 0 && (
        <div className="mt-auto ">
          <Pagination
            currentPage={currentPage}
            totalCount={newsList?.length}
            pageSize={limit}
            onNext={onNext}
            onPrev={onPrevious}
            onPageChange={updatePage}
          />
        </div>
      )}
      <div className={`${S.homeContainer}`}>
        {newsList?.length &&
          newsList.map((news) => (
            <div key={news?.publishedAt} className={`${S.card}`}>
              <h6>{news.title}</h6>
              <Link to={`/news/${news.publishedAt}`}>Click to view</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeBody;
