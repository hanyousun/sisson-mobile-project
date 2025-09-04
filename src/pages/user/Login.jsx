import { useState } from "react";
import { useNavigate } from "react-router-dom";

import userData from "../../mock/user.json"; // 유저 mock 데이터

import Input from "../../components/form/Input";
import Button from "../../components/form/Button";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(userData.username);
  const [password, setPassword] = useState(userData.password);
  const [error, setError] = useState("");
  console.log(username);
  console.log(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 목데이터와 비교
    if (username === userData.username && password === userData.password) {
      localStorage.setItem("auth", JSON.stringify(userData)); // 로그인 상태 저장
      navigate("/", { replace: true }); // 로그인 성공시 메인으로 이동
    } else {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <>
      <div className="absolute left-0 z-10 w-full px-8 top-1/4">
        <div className="mb-9 px-2.5">
          <span className="text-sm font-bold tracking-wide text-whColor-2">siseon:)</span>
          <h1 className="pt-1.5 text-29 font-bold leading-10 tracking-tight">
            <span className="text-primary-1">로그인</span>하고
            <br />
            특별한 경험을 해보세요
          </h1>
        </div>
        <form className="pb-3.5" onSubmit={handleSubmit}>
          <fieldset>
            <Input
              type="text"
              placeholder="아이디를 입력하세요"
              className="mb-3"
              variant="dark"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="mb-3"
              variant="dark"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="mb-2.5 ml-6 text-sm text-red-600">{error}</p>}
            <Button type="submit" variant="primary" size="lg">
              로그인
            </Button>
            <div className="flex items-center justify-center gap-5 mt-8">
              <a href="#">
                <img src="/img/icon/icon-google.svg" alt="구글로그인" />
              </a>
              <a href="#">
                <img src="/img/icon/icon-naver.svg" alt="네이버로그인" />
              </a>
              <a href="#">
                <img src="/img/icon/icon-kakao.svg" alt="카카오로그인" />
              </a>
              <a href="#">
                <img src="/img/icon/icon-mail.svg" alt="메일로그인" />
              </a>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/img/login/login-bg01.svg"
          alt="로그인 배경 이미지1"
          className="absolute top-0 left-0 w-fit"
        />
        <img
          src="/img/login/login-bg02.svg"
          alt="로그인 배경 이미지2"
          className="absolute top-0 right-0 w-fit"
        />
        <img
          src="/img/login/login-bg03.svg"
          alt="로그인 배경 이미지3"
          className="absolute bottom-0 left-0 w-fit"
        />
        <img
          src="/img/login/login-bg04.svg"
          alt="로그인 배경 이미지4"
          className="absolute bottom-[2.375rem] right-0 w-fit"
        />
      </div>
    </>
  );
}

export default Login;
