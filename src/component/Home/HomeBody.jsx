import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { fetchNews } from "../../redux/news/newsSlice";
import S from "../../style/component/home/homebody.module.scss";
import Pagination from "../../shared/Pagination";
import newsList from "../../shared/Data.json";

const HomeBody = () => {
  // const newsList = useSelector((state) => state.news.news);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(4);
  const [pageCount] = useState(Math.ceil(newsList.length / limit));
  const [currentPageData, setCurrentPageData] = useState(
    newsList.slice(0, limit)
  );
  // const [articleList, setArticleList] = useState([]);
  const [articles, setArticles] = useState("");

  const updatePage = (pageNo) => {
    if (pageNo > pageCount) {
      // eslint-disable-next-line no-param-reassign
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
  }, []);

  useEffect(() => {
    if (articles) {
      const time = setTimeout(() => {
        const filterArticles = newsList.filter((arti) =>
          arti.source.name.toLowerCase().includes(articles.toLowerCase())
        );
        setCurrentPageData(filterArticles);
        setCurrentPage(1);
      }, 1000);
      return () => clearTimeout(time);
    }
    updatePage(currentPage);
  }, [articles]);

  const handleSearch = (text) => {
    setArticles(text);
  };

  return (
    <>
      <div className={`${S.mainContainer}`}>
        <div className={`${S.searchField}`}>
          <input
            type="text"
            placeholder="Search An Article"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          totalCount={newsList?.length}
          pageSize={limit}
          onNext={onNext}
          onPrev={onPrevious}
          onPageChange={updatePage}
        />
      </div>

      <div className={`${S.homeContainer}`}>
        {currentPageData?.length &&
          currentPageData.map((news) => (
            <div key={news?.publishedAt} className={`${S.card}`}>
              <h6>{news.title}</h6>
              <p>{news.description}</p>
              <div className={`${S.authorPub}`}>
                <p>
                  Written by:
                  {news.author}
                </p>
                <p>
                  Published at: {moment(news.publishedAt).format("MMM Do YY")}
                </p>
              </div>
              <Link to={`/news/${news.publishedAt}`}>Click to view</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeBody;
