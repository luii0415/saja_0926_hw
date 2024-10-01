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

function Signup() {
  const [signupId, setSignupId] = useState("");
  const [signupPW, setSignupPW] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const onChangeSignUpId = (e) => {
    setSignupId(e.target.value);
  };
  const onChangeSignUpPW = (e) => {
    setSignupPW(e.target.value);
  };
  const onChangeSignUpEmail = (e) => {
    setSignupEmail(e.target.value);
  };
  const onSignUp = async () => {
    if (signupId != "" && signupPW != "") {
      if (signupEmail == "" || signupEmail.includes("@")) {
        try {
          const response = await axios.post(`${API_URL}/api/user/signup`, {
            userId: signupId,
            password: signupPW,
            email: signupEmail,
          });
          if (response.status == 200) {
            alert(
              `상태코드 : ${response.status} | 정상적으로 회원가입이 완료되었습니다.`
            );
          }
        } catch (error) {
          if (error.response.status === 401) {
            alert(
              `상태코드 : ${error.response.status} | 사용할 수 없는 id입니다. (중복된 회원)`
            );
          }
        }
      } else {
        alert("이메일에 @문자를 포함시켜주세요.");
      }
    } else if (signupId == "") {
      alert("회원가입 : ID가 입력되지 않았습니다.");
    } else if (signupPW == "") {
      alert("회원가입 : Password가 입력되지 않았습니다.");
    }
  };
  return (
    <Section>
      <Title>회원가입</Title>
      <Input type="text" placeholder="userId *" onChange={onChangeSignUpId} />
      <Input
        type="password"
        placeholder="password *"
        onChange={onChangeSignUpPW}
      />
      <Input type="email" placeholder="email" onChange={onChangeSignUpEmail} />
      <AlarmText>
        * 표시가 있는 userId와 password란은 필수 입력란입니다.
      </AlarmText>
      <Button type="submit" onClick={onSignUp}>
        전송
      </Button>
    </Section>
  );
}
export default Signup;
