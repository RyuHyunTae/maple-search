"use client";

import { ocidState } from "@/recoil/states";
import { getCurrentDate } from "@/util/TimeUtil";
import { DatePickerProps, Radio, RadioChangeEvent } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

const MainBody = () => {
  const dateFormat = "YYYY-MM-DD";
  const nowDate = getCurrentDate();

  const setOcid = useSetRecoilState(ocidState);
  const router = useRouter();

  const [date, setDate] = useState<string | string[]>(nowDate);
  const [searchText, setSearchText] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");

  const [isApiKey, setIsApiKey] = useState<boolean>(false);

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleApiKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleSetIsApiKey = () => {
    setIsApiKey(!isApiKey);
  };

  const handleSearch = async () => {
    // const result = await getOcid({ character_name: searchText });
    // setOcid(result.ocid);
    switch (value) {
      case 1:
        router.push(`/info-csr?searchText=${searchText}&date=${date}&key=${apiKey}`);
        break;

      case 2:
        router.push(`/info-ssr?searchText=${searchText}&date=${date}&key=${apiKey}`);
        break;

      default:
        break;
    }
  };
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
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>CSR</Radio>
                  <Radio value={2}>SSR</Radio>
                </Radio.Group>
                <div className="flex items-center justify-start gap-4">
                  <DatePicker onChange={handleDateChange} defaultValue={dayjs(nowDate, dateFormat)} />
                  <div>데이터 기준 날짜 선택</div>
                </div>
                <div className="relative">
                  <input
                    className="flex h-[44px] w-full rounded-[2px] bg-[#EBEBEB] p-[15px_30px_15px_12px]"
                    placeholder="API KEY를 등록해주세요"
                    onChange={handleApiKeyChange}
                    value={apiKey}
                    disabled={isApiKey}
                    style={isApiKey ? { opacity: 0.5 } : {}}
                  />
                  <button className="absolute right-[13px] top-[13px] w-[18px]" onClick={handleSetIsApiKey}>
                    {isApiKey ? (
                      <span role="img" aria-label="close" className="anticon anticon-close">
                        <svg
                          fill-rule="evenodd"
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="close"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          fontSize="20px"
                        >
                          <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
                        </svg>
                      </span>
                    ) : (
                      <span role="img" aria-label="check-circle" className="anticon anticon-check-circle">
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="check-circle"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          fontSize="20px"
                        >
                          <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
                <div className="relative">
                  <input
                    className="flex h-[44px] w-full rounded-[2px] bg-[#EBEBEB] p-[15px_30px_15px_12px]"
                    placeholder="캐릭터 닉네임을 입력해주세요"
                    onChange={handleSearchTextChange}
                    value={searchText}
                    disabled={!isApiKey}
                    style={isApiKey ? {} : { opacity: 0.5 }}
                  />
                  <button className="absolute right-[13px] top-[13px] w-[18px]" onClick={handleSearch}>
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
