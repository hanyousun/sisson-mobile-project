import Input from "../../login/Input";

function Login() {
  return (
    <>
      <div className="absolute left-0 z-10 w-full px-8">
        <div className="mb-9 px-2.5">
          <span className="text-sm font-bold tracking-wide text-whColor-2">siseon:)</span>
          <h1 className="pt-1.5 text-29 font-bold leading-10 tracking-tight">
            <span className="text-primary-1">로그인</span>하고
            <br />
            특별한 경험을 해보세요
          </h1>
        </div>
        <form className="pb-3.5">
          <fieldset>
            <Input />

            <button
              type="submit"
              className="w-full h-12 font-bold text-white rounded-full bg-primary-1"
            >
              로그인
            </button>
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
