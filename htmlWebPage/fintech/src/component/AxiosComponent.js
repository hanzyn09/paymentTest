import React, { useState } from "react";
import axios from "axios";

const AxiosComponent = () => {
  const [data, setdata] = useState("");
  const getData = () => {
    axios
      .get("https://naver.com")
      .then(function (response) {
        setdata(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div>
      <button onClick={getData}>데이터 가져오기</button>
      {data}
    </div>
  );
};

export default AxiosComponent;
