import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { oneNews } from "../../redux/news/newsSlice";
import S from "../../style/component/detail/detail.module.scss";

const IndividualNews = () => {
  const newsDetail = useSelector((state) => state.news.singleNews);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneNews(id));
  }, [dispatch, id]);

  if (!newsDetail) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      <div className={`${S.detailContainer}`}>
        <h5>{newsDetail?.title}</h5>
        <div className={`${S.detailImage}`}>
          <img src={newsDetail?.urlToImage} alt="article" />
          <div className={`${S.authorPub}`}>
            <span>
              Written By:
              {newsDetail?.author}
            </span>
            <span>{newsDetail?.publishedAt}</span>
          </div>
        </div>
        <p className={`${S.description}`}>{newsDetail?.description}</p>
        <span>{newsDetail?.content}</span>
      </div>
    </>
  );
};

export default IndividualNews;
