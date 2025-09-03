function Input() {
  const inputInfo = [
    { type: "text", placeholder: "아이디를 입력하세요" },
    { type: "password", placeholder: "비밀번호를 입력하세요" },
  ];
  return (
    <>
      {inputInfo.map((item, i) => (
        <div className="mb-3">
          <input
            type={item}
            placeholder={item.placeholder}
            className="h-12 w-full rounded-full border border-transparent bg-bgColor-8 px-6 text-[0.9375rem] placeholder-whColor-6 focus:outline-none focus:border-primary-1"
            key={i}
          />
        </div>
      ))}
    </>
  );
}

export default Input;
