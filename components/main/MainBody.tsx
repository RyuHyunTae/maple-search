const MainBody = () => {
  return (
    <div className="flex-1 bg-body-green">
      <div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ins
            className="kakao_ad_area"
            data-ad-unit="DAN-Nkvzm5iPn6sJZrCR"
            data-ad-width={728}
            data-ad-height={90}
            id="kakao_ad_rvsU83"
            style={{
              display: "inline-block",
              position: "relative",
              textDecoration: "none",
              minWidth: 728,
              minHeight: 90,
              width: 728,
              height: 90,
            }}
          >
            <div
              data-ad-creative-wrap="outer"
              className="adfit__banner__outer adfit__debug-toolbar-container"
              style={{ position: "absolute", inset: 0 }}
            >
              <div className="adfit__border adfit__border--left" data-ad-creative-wrap="border" style={{ backgroundColor: "rgb(0, 0, 0)" }} />
              <div className="adfit__border adfit__border--right" data-ad-creative-wrap="border" style={{ backgroundColor: "rgb(0, 0, 0)" }} />
              <div className="adfit__border adfit__border--top" data-ad-creative-wrap="border" style={{ backgroundColor: "rgb(0, 0, 0)" }} />
              <div className="adfit__border adfit__border--bottom" data-ad-creative-wrap="border" style={{ backgroundColor: "rgb(0, 0, 0)" }} />
            </div>
          </ins>
        </div>
      </div>
      <div className="flex justify-between lg:justify-center">
        <div className="mx-auto my-[25px] max-w-[100vw] mo:my-[10px] mo:max-w-full">
          <div className="my-[50px] flex min-h-[480px] max-w-[90vw] mo:m-0">
            <div className="rounded-l-[10px] bg-[#80A694] p-[43px] text-[40px] font-bold text-white mo:hidden">
              <div>Welcome</div>
              <div>Back!</div>
            </div>
            <div className="flex w-[500px] flex-col gap-[13px] rounded-r-[10px] bg-white p-[30px] mo:rounded-l-[10px] mo:p-[10px]">
              <div className="mb-[10px] mt-[40px] text-center text-[40px] font-bold mo:text-[30px]">환산 주스탯</div>
              <div className="flex w-full flex-col gap-[8px] px-[48px] mo:px-[24px]">
                <div className="flex items-center justify-start gap-4">
                  <div className="ant-picker ant-picker-outlined css-1rqnfsa w-[20rem]">
                    <div className="ant-picker-input">
                      {/* <input aria-inv alid="false" autoComplete="off" size={12} placeholder="Select date" defaultValue="2024-02-26" /> */}
                      {/* <span className="ant-picker-suffix">
                    <span role="img" aria-label="calendar" className="anticon anticon-calendar">
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="calendar"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" />
                      </svg>
                    </span>
                  </span> */}
                      {/* <span className="ant-picker-clear" role="button">
                    <span role="img" aria-label="close-circle" className="anticon anticon-close-circle">
                      <svg
                        fillRule="evenodd"
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="close-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" />
                      </svg>
                    </span>
                  </span> */}
                    </div>
                  </div>
                  <div>데이터 기준 날짜 선택</div>
                </div>
                <div className="relative">
                  <input
                    className="flex h-[44px] w-full rounded-[2px] bg-[#EBEBEB] p-[15px_30px_15px_12px]"
                    placeholder="캐릭터 닉네임을 입력해주세요"
                  />
                  <button className="absolute right-[13px] top-[13px] w-[18px]">
                    <img src="../img/icon_search_gray.png" title="검색하기" />
                  </button>
                </div>
              </div>
              <div className='relative text-center before:absolute before:left-0 before:top-[10px] before:z-0 before:h-[1px] before:w-full before:bg-[#f2f2f5] before:content-[""]'>
                <span className="z-5 relative inline-block h-[21px] w-[100px] bg-white text-[15px] font-bold">사용 전 필독</span>
              </div>
              <div className="px-[48px] text-[13px] mo:px-[24px]">
                <div className="font-black text-red-500">* 넥슨 API 데이터는 "어제"까지만 제공됩니다.</div>
                <div className="font-black text-black">* 오랜 기간 접속하지 않은 캐릭터는 검색이 안 됩니다.</div>
                <div className="font-black text-black">* 닉네임은 대소문자를 구분합니다.</div>
              </div>
              <div className='relative mt-[20px] text-center before:absolute before:left-0 before:top-[10px] before:z-0 before:h-[1px] before:w-full before:bg-[#f2f2f5] before:content-[""]'>
                <span className="z-5 relative inline-block h-[21px] w-[80px] bg-white text-[12px]">즐겨찾기</span>
              </div>
              <div className="mb-[20px] flex flex-wrap gap-[8px] gap-y-10 px-[48px] mo:px-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
