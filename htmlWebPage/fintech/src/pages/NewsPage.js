import axios from "axios";
import React, { useState } from "react";
import Header from "../component/common/Header";
import NewsList from "../component/news/NewsList";
import Search from "../component/news/Search";

const NewsPage = () => {
  const [news, setnews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    console.log(value);
    setSearchText(value);
  };
  const handleClickSearchButton = () => {
    //   axios 요청 보내기
    console.debug("test");
    let newsUrl = `https://newsapi.org/v2/everything?from=2021-04-26&sortBy=publishedAt&q=${searchText}&apiKey=921be7b181dc4a5ba73ba4c1ee91027c&language=ko`;
    axios.get(newsUrl).then((response) => {
      let resultNewsList = response.data.articles;
      setnews(resultNewsList);
    });
  };

  return (
    <div>
      <Header title="뉴스검색"></Header>
      {/* Header 컴포넌트 작성 */}
      <Search
        handleChangeSearchInput={handleChangeInput}
        handleClickSearchButton={handleClickSearchButton}
      ></Search>
      {/* Search 컴포넌트 작성 */}
      <NewsList news={news}></NewsList>
      {/* NewsList 컴포넌트 작성 */}
    </div>
  );
};

export default NewsPage;
