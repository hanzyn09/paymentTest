import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";
import axios from "axios";

const AuthResultPage = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);

  const getAccessToken = () => {
    const option = {
      method: "POST",
      url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        code: code,
        client_id: "858e1a20-d771-402b-b282-18c1b202f60d",
        client_secret: "47914ce7-f278-4e96-869b-9912088feaef",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <Header title={"사용자 발급 토큰 확인"}></Header>
      <p>사용자가 발급받은 사용자 코드는</p>
      <p>{code}</p>
      <AuthButton title={"토큰받기"} handleClick={getAccessToken}></AuthButton>
    </>
  );
};

export default AuthResultPage;
