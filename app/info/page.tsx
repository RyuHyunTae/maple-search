"use client";

import InfoItem from "@/components/info/InfoItem";
import InfoItemDetail from "@/components/info/InfoItemDetail";
import { ocidState } from "@/recoil/states";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Info = () => {
  const [is_popup, setIs_popup] = useState(false);
  const [tempOcid, setTempOcid] = useRecoilState(ocidState);
  return (
    <div className="flex-1 bg-body-green">
      <div className="flex justify-between lg:justify-center">
        <div className="mx-auto my-[25px] max-w-[100vw] mo:my-[10px] mo:max-w-full">
          <div className="flex gap-[20px] mo:flex-col">
            <div className="relative flex h-fit flex-col gap-5 rounded-[10px] bg-white p-[20px_25px]">
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-full border">
                      <img className="h-[15px]" src="../img/icon_star.png" alt="star" />
                    </div>
                    <div className="flex h-[27px] w-[27px] cursor-pointer items-center justify-center rounded-full border">
                      <img className="h-[15px]" src="./icon/icon_share.png" alt="share" />
                    </div>
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="flex items-center">데이터 기준 시간 : 2024-03-05</div>
                    <div className="relative">
                      <img className="relative flex h-[20px] w-[22px] cursor-pointer items-center" src="/icon/icon_guide.png" alt="스탯 조건" />
                      <div className="absolute left-[-18px] top-[35px] mo:left-auto mo:right-[-18px]" />
                    </div>
                    <div className="relative">
                      <img className="relative flex h-[20px] w-[22px] cursor-pointer items-center" src="/badge/total_5.svg" alt="뱃지 리스트" />
                      <div className="absolute left-[-18px] top-[35px] mo:left-auto mo:right-[-18px]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <img
                    className="w-[96px] -scale-x-100 rounded-full border"
                    src="https://open.api.nexon.com/static/maplestory/Character/IKILCIBHAJCDMLAKLIPDFCJFMEHJLHHHOOIOAFMKHEOPHJKFCEDCEGMGAJELDPCPCMKNOLIEMBOFPGGJNHBBHODDPHGOIBEODKAGGHJMHCFIMMAHIBBANLPKGDDNJGNJPHOOOECFJDCIMPMMJABLPPLGOOMNLAKAGPELKFHGNADFELCGJJBBNODPOBMFBPLDIGEOFEJCIMAGDKAPJHACPOCGPEIMJILMMIHJIHOBFKJHEHCKJPKFLDOBFPIGHHIF.png"
                  />
                  <div className="flex flex-col gap-[3px] text-[13px]">
                    <div className="flex items-center gap-[5px]">
                      <div className="text-[17px] font-bold">촉발</div>
                      <div className="flex items-center justify-center gap-1 rounded-[20px] border px-3 py-1">
                        <img className="h-[17px] w-[17px]" src="/world/elysium.png" />
                        <div className="truncate">엘리시움</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-[5px]">
                      <div className="max-w-[25rem] truncate">캐논슈터 | Lv.288 | BOSS </div>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex gap-3">
                        <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">무릉도장</span>
                        <div className="flex gap-2">
                          <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">85층</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">유니온</span>
                        <div className="flex gap-2">
                          <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">
                            종합 9203
                          </span>
                          <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">
                            아티팩트 Lv.44
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px]">
                      <div className="grid grid-cols-5 gap-1">
                        <div>
                          <img className="scale-100 transition-transform duration-300 relative cursor-pointer" src="/badge/total_3.svg" />
                        </div>
                        <div>
                          <img
                            className="scale-100 transition-transform duration-300 relative cursor-pointer"
                            src="/badge/dark_boss_accessory_2.svg"
                          />
                        </div>
                        <div>
                          <img
                            className="scale-100 transition-transform duration-300 relative cursor-pointer"
                            src="/badge/weapon_add_potential_1.svg"
                          />
                        </div>
                        <div>
                          <img className="scale-100 transition-transform duration-300 relative cursor-pointer" src="/badge/weapon_addoption_0.svg" />
                        </div>
                        <div>
                          <img className="scale-100 transition-transform duration-300 relative cursor-pointer" src="/badge/armor_potential_1.svg" />
                        </div>
                        <div>
                          <img className="scale-100 transition-transform duration-300 relative cursor-pointer" src="/badge/sole_erda_4.svg" />
                        </div>
                        <div>
                          <img className="scale-100 transition-transform duration-300 relative cursor-pointer" src="/badge/glove_cridmg_1.svg" />
                        </div>
                        <div>
                          <img className="scale-100 transition-transform duration-300 relative cursor-pointer" src="/badge/user_level_2.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[54px] p-[11px] text-[14px]">
                  <div className="font-bold">전투력</div>
                  <div className="flex gap-5">
                    <div className="false">2억 9444만 2997</div>
                    <div className="cursor-pointer">[적용 중인 프리셋]</div>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col gap-[5px] p-[11px]">
                  <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
                    <button className="relative " title="시뮬레이터 페이지로 이동하기">
                      환산
                    </button>
                  </span>
                  <div className="flex items-center justify-around">
                    <div className="flex flex-col">
                      <div className="text-[16px] font-bold " title="">
                        79165
                      </div>
                      <div className="flex justify-center text-[12px] text-[#989898]">무릉</div>
                    </div>
                    <div className="h-[24px] border-l" />
                    <div className="flex flex-col">
                      <div className="text-[16px] font-bold " title="">
                        79206
                      </div>
                      <div className="flex justify-center text-[12px] text-[#989898]">보스 300</div>
                    </div>
                    <div className="h-[24px] border-l" />
                    <div className="flex flex-col">
                      <div className="text-[16px] font-bold " title="">
                        79151
                      </div>
                      <div className="flex justify-center text-[12px] text-[#989898]">보스 380</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px] p-[11px] pt-0">
                  <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">헥사환산</span>
                  <div className="flex items-center justify-around">
                    <div className="flex flex-col">
                      <div className="text-[16px] font-bold " title="">
                        78804
                      </div>
                      <div className="flex justify-center text-[12px] text-[#989898]">무릉</div>
                    </div>
                    <div className="h-[24px] border-l" />
                    <div className="flex flex-col">
                      <div className="text-[16px] font-bold " title="">
                        78834
                      </div>
                      <div className="flex justify-center text-[12px] text-[#989898]">보스 300</div>
                    </div>
                    <div className="h-[24px] border-l" />
                    <div className="flex flex-col">
                      <div className="text-[16px] font-bold " title="">
                        78780
                      </div>
                      <div className="flex justify-center text-[12px] text-[#989898]">보스 380</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[10px] text-[13px]">
                <div className="flex items-center gap-3">
                  <div className="cursor-pointer">
                    <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#FFAE34] text-[#FFAE34] bg-[#FFFCE0]">
                      헥사
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#dfdfdf] text-[#c6c6c6] bg-[#fff]">
                      심볼
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-col items-start">
                  <div className="flex justify-center px-3">
                    <div className="my-3 grid grid-cols-8 grid-rows-1 flex-wrap items-center gap-x-[8px] self-start text-center">
                      <div>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img className="w-[28px] flex-1" src="./hexaskill/CannonMaster_2.png" alt="캐논 버스터" />
                          <div>30</div>
                          <div className="text-[10px] ">101%</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img className="w-[28px] flex-1" src="./hexaskill/CannonMaster_7.png" alt="미니 캐논볼" />
                          <div>30</div>
                          <div className="text-[10px] ">101%</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img className="w-[28px] flex-1" src="./hexaskill/CannonMaster_1.png" alt="캐논 익스플로젼" />
                          <div>30</div>
                          <div className="text-[10px] ">101%</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img className="w-[28px] flex-1" src="./hexaskill/CannonMaster_3.png" alt="캐논볼" />
                          <div>30</div>
                          <div className="text-[10px] ">101%</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img className="w-[28px] flex-1" src="./hexaskill/CannonMaster_4.png" alt="ICBM" />
                          <div>29</div>
                          <div className="text-[10px] text-blue-400">94%</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img className="w-[28px] flex-1" src="./hexaskill/CannonMaster_5.png" alt="몽키 에스코트" />
                          <div>30</div>
                          <div className="text-[10px] ">101%</div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img className="w-[28px] flex-1" src="./hexaskill/CannonMaster_6.png" alt="풀 메이커" />
                          <div>29</div>
                          <div className="text-[10px] text-blue-400">94%</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center divide-y rounded-[5px] border">
                        <img className="w-[28px]" src="./hexaskill/General/General_1_0.png" alt="솔 야누스" />
                        <div>15</div>
                        <div>-</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-fit items-center divide-x rounded-[10px] border py-6">
                    <div className="flex min-w-[75px] flex-col items-center px-7">
                      <img className="h-[35px] cursor-pointer" src="./images/sole_erda.png" alt="sole_erda" />
                      <div>
                        <strong>852</strong> 개
                      </div>
                    </div>
                    <div className="flex min-w-[75px] items-center px-7">
                      <div className="flex flex-col items-center">
                        <img className="h-[35px]" src="./images/sole_erda_piece.png" alt="sole_erda_piece" />
                        <div>
                          <strong>23278</strong> 개
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#FF4F4F] text-[#FF4F4F] bg-[#FFE4E4]">
                    적용 중인 세트효과
                  </div>
                </div>
                <div>
                  <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#dfdfdf] text-[#c6c6c6] bg-[#fff]">
                    무릉도장 예상 층수
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[10px] text-[13px]">
                <div className="grid grid-cols-2 flex-col gap-[5px]">
                  <div className="flex gap-[5px]">
                    <div className="truncate" title="앱솔랩스 세트(해적)">
                      앱솔랩스 세트(해적)
                    </div>
                    <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">5셋</span>
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="truncate" title="칠흑의 보스 세트">
                      칠흑의 보스 세트
                    </div>
                    <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">4셋</span>
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="truncate" title="소멸의 여로 세트">
                      소멸의 여로 세트
                    </div>
                    <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">5셋</span>
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="truncate" title="여명의 보스 세트">
                      여명의 보스 세트
                    </div>
                    <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">2셋</span>
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="truncate" title="칠요 세트">
                      칠요 세트
                    </div>
                    <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">2셋</span>
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="truncate" title="루타비스 세트(해적)">
                      루타비스 세트(해적)
                    </div>
                    <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">4셋</span>
                  </div>
                  <div className="flex gap-[5px]">
                    <div className="truncate" title="쁘띠 페어리 세트">
                      쁘띠 페어리 세트
                    </div>
                    <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">1셋</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-fit w-[90rem] flex-col rounded-[10px] bg-white p-[23px] mo:max-w-full">
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="flex gap-[5px]">
                    <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray bg-hover-gray mo:text-[11px]">
                      ALL
                    </button>
                    <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray mo:text-[11px]">
                      무보엠
                    </button>
                    <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray mo:text-[11px]">
                      방어구
                    </button>
                    <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray mo:text-[11px]">
                      장신구
                    </button>
                  </div>
                  <div>
                    <button className="rounded-[2px] bg-[#fff2e0] px-3 py-2 text-[13px] font-bold text-[#ff8d47]">프리셋 변경</button>
                  </div>
                </div>
                <div className="mt-[10px] grid grid-cols-2 gap-5 mo:grid-cols-1">
                  <InfoItem setIs_popup={setIs_popup} />
                  {/* <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEKBJGLG.png"
                          alt="ㅇ"
                          title="무기"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">제네시스 시즈건</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="../img/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div
                            className="relative flex items-center font-bold cursor-pointer hover:underline"
                            title="클릭하여 무기 추옵 기준을 변경할 수 있습니다.(1추 <=> 2추)"
                          >
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              1추&amp;보공5%
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]">보보공 에디 공21%</div>
                        </div>
                      </div>
                    </div>
                  </button> */}
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEMHJOMD.png"
                          alt="ㅇ"
                          title="보조무기"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">봄버드 센터파이어</div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]">보공공 에디 공21%</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOLLEOA.png"
                          alt="ㅇ"
                          title="엠블렘"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">골드 메이플리프 엠블렘</div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]">방공공 에디 공23%</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPCIPOA.png"
                          alt="ㅇ"
                          title="모자"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">하이네스 원더러햇</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              150
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 44.9%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            놀+주흔15%
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPGJFLJ.png"
                          alt="ㅇ"
                          title="상의"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">이글아이 원더러코트</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              145
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#7479FF] bg-[#E0E1FF]">에픽</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 38.6%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            놀+주흔15%
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPEJGII.png"
                          alt="ㅇ"
                          title="하의"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">트릭스터 원더러팬츠</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              128
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#FFAE34] bg-[#fffac8]">유닠</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 41.4%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            놀+주흔15%
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPFIHNE.png"
                          alt="ㅇ"
                          title="신발"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">앱솔랩스 파이렛슈즈</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              131
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#7479FF] bg-[#E0E1FF]">에픽</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 34.9%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            놀+주흔15%
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPKJBKB.png"
                          alt="ㅇ"
                          title="장갑"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">앱솔랩스 파이렛글러브</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              174
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]">크크</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            4.2/0.2작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOCJAHG.png"
                          alt="ㅇ"
                          title="망토"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">앱솔랩스 파이렛케이프</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              147
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 41.4%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            놀+주흔15%
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOHJGJI.png"
                          alt="ㅇ"
                          title="어깨장식"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">앱솔랩스 파이렛숄더</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 41.9%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            5/3.5작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPDJALG.png"
                          alt="ㅇ"
                          title="얼굴장식"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">트와일라이트 마크</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              121
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 48.3%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            6/0.9작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPAJFJJ.png"
                          alt="ㅇ"
                          title="눈장식"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">마력이 깃든 안대</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              154
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 50.7%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            5.5/2.9작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEPBJFND.png"
                          alt="ㅇ"
                          title="귀고리"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">오션 글로우 이어링</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              142
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 43.5%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            5.3/2.5작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOBJEOJ.png"
                          alt="ㅇ"
                          title="벨트"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">몽환의 벨트</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              160
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 49.8%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            5.5/2.3작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOAJGLB.png"
                          alt="ㅇ"
                          title="펜던트"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">도미네이터 펜던트</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              125
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 45.3%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            3/3.2작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOAJDNB.png"
                          alt="ㅇ"
                          title="펜던트2"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">고통의 근원</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              145
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 50.1%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            6/4.3작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEODIHHJ.png"
                          alt="ㅇ"
                          title="반지1"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">리스트레인트 링</div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]">Lv.4</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEODPEOG.png"
                          alt="ㅇ"
                          title="반지2"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">테네브리스 원정대 반지</div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#FFAE34] bg-[#fffac8]">유닠</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 39.2%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            5/10.9작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEODIEPH.png"
                          alt="ㅇ"
                          title="반지3"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">여명의 가디언 엔젤 링</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 47.2%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            6/1.5작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEODIHLE.png"
                          alt="ㅇ"
                          title="반지4"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">마이스터링</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 22
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 43.9%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            4/2작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOEJHGC.png"
                          alt="ㅇ"
                          title="포켓 아이템"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">저주받은 황의 마도서</div>
                          <div className="relative flex items-center font-bold" title="">
                            <div>
                              <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                              174
                            </div>
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3" />
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEJFJHKB.png"
                          alt="ㅇ"
                          title="기계 심장"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">티타늄 하트</div>
                          <div className="flex items-center font-bold">
                            <img className="mr-1 h-[14px] w-[14px]" src="./icon/icon_star_yellow.png" alt="star" /> 8
                          </div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3">
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
                          <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"> STR 41.6%</div>
                          <div
                            className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]"
                            title="방어구 작이 섞여있을 경우 더 가까운 쪽으로 표시됩니다.
  장신구는 프악스크롤/혼돈의주문서 작을 기준으로 환산합니다."
                          >
                            9.3/3.2작
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOKJFOB.png"
                          alt="ㅇ"
                          title="뱃지"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">칠요의 뱃지</div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3" />
                      </div>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
                      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                        <img
                          className="min-w-[4rem]"
                          src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEOGJOMD.png"
                          alt="ㅇ"
                          title="훈장"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-1 text-[1.3rem]">
                        <div className="flex items-center gap-2 text-[1.5rem]">
                          <div className="truncate font-black">칠요의 몬스터파커</div>
                        </div>
                        <div className="flex h-fit flex-wrap items-center gap-3" />
                      </div>
                    </div>
                  </button>
                </div>

                {is_popup && <InfoItemDetail setIs_popup={setIs_popup} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
