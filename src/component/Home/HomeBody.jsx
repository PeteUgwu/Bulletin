import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/news/newsSlice";
import S from "../../style/component/home/homebody.module.scss";

const HomeBody = () => {
  const newsList = useSelector((state) => state.news.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <div className={`${S.homeContainer}`}>
        {newsList?.length &&
          newsList.map((news) => (
            <div key={news?.publishedAt} className={`${S.card}`}>
              <h6>{news.title}</h6>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeBody;
