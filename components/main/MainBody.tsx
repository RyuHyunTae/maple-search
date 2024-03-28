"use client";

import { getOcid } from "@/api/MapleApi";
import { ocidState } from "@/recoil/states";
import { API_KEY } from "@/util/APIKey";
import { getCurrentDate } from "@/util/TimeUtil";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";

import { useRouter } from "next/navigation";

import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";

const MainBody = () => {
  const dateFormat = "YYYY-MM-DD";
  const nowDate = getCurrentDate();

  const setOcid = useSetRecoilState(ocidState);
  const router = useRouter();

  const [date, setDate] = useState<string | string[]>(nowDate);
  const [searchText, setSearchText] = useState<string>("");

  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async () => {
    // const result = await getOcid({ character_name: searchText });
    // setOcid(result.ocid);
    router.push(`/info?searchText=${searchText}&date=${date}`);
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
                <div className="flex items-center justify-start gap-4">
                  <DatePicker onChange={handleDateChange} defaultValue={dayjs(nowDate, dateFormat)} />
                  <div>데이터 기준 날짜 선택</div>
                </div>
                <div className="relative">
                  <input
                    className="flex h-[44px] w-full rounded-[2px] bg-[#EBEBEB] p-[15px_30px_15px_12px]"
                    placeholder="캐릭터 닉네임을 입력해주세요"
                    onChange={handleSearchTextChange}
                    value={searchText}
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
