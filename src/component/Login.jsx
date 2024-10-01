import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const API_URL = process.env.REACT_APP_URL;

const Section = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 15px;
`;
const AlarmText = styled.p`
  text-align: center;
  font-size: 10px;
  color: red;
`;
const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Button = styled.button`
  height: 30px;
  width: 45%;
  margin-left: 30%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: skyblue;
  color: #fff;

  &:hover {
    background-color: #123456;
  }
`;
function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPW, setLoginPW] = useState("");
  const onChangeLoginId = (e) => {
    setLoginId(e.target.value);
  };
  const onChangeLoginPW = (e) => {
    setLoginPW(e.target.value);
  };
  const onLogin = async () => {
    if (loginId != "" && loginPW != "") {
      try {
        const response = await axios.post(`${API_URL}/api/user/login`, {
          usetId: loginId,
          password: loginPW,
        });
        console.log(response);
        if (response.status == 200 && response.data == "오류임") {
          alert(`상태코드 : ${response.status} | 오류발생`);
        } else if (
          response.status == 200 &&
          response.data == "로그인되었습니다."
        ) {
          alert(`상태코드 : ${response.status} | 로그인 되었습니다.`);
        }
      } catch (error) {
        console.log(error.response);
      }
    } else if (loginId == "") {
      alert("userId란이 입력되지 않았습니다.");
    } else if (loginPW == "") {
      alert("password란이 입력되지 않았습니다.");
    }
  };

  return (
    <Section>
      <Title>로그인</Title>
      <Input type="text" placeholder="userId" onChange={onChangeLoginId} />
      <Input
        type="password"
        placeholder="password"
        onChange={onChangeLoginPW}
      />
      <AlarmText>
        * 표시가 있는 userId와 password란은 필수 입력란입니다.
      </AlarmText>
      <Button type="submit" onClick={onLogin}>
        전송
      </Button>
    </Section>
  );
}
export default Login;
