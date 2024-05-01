const Update = () => {
  return (
    <div className="flex-1 bg-body-green">
      <div className="flex justify-between lg:justify-center">
        <div className="mx-auto my-[25px] max-w-[100vw] mo:my-[10px] mo:max-w-full">
          <div>
            <div className="flex gap-5 md:flex-col">
              <div className="h-[550px] w-[400px]">
                <div className="h-full w-full max-w-[100vw] rounded-xl border-none bg-white p-5">
                  <div className="flex items-center justify-center border-b-[5px] pb-2 text-[20px]">
                    사이트 이용 안내 <span className="ml-5 flex h-fit rounded-xl border px-4 py-1 text-[10px]">자주 묻는 질문</span>
                  </div>
                  <div className="flex h-[90%] flex-col gap-4 overflow-y-scroll px-5">
                    <div className="flex flex-col gap-7 pt-3">
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 border-b font-black">
                          <span>API KEY 등록방법</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A1. </span>
                          <span>
                            <a href="https://openapi.nexon.com/">https://openapi.nexon.com/</a> 홈페이지 접속
                          </span>
                        </div>
                      </div>
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A2-1. </span>
                          <span> 로그인 - MY 애플리케이션 - 애플리케이션 등록</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A2-2. </span>
                          <span> 로그인 - MY 애플리케이션 - 애플리케이션 목록</span>
                        </div>
                      </div>
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A3. </span>
                          <span> API KEY 복사</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
