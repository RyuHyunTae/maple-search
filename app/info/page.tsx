"use client";

import { tempItemData } from "@/api/data";
import { getItemEquipment } from "@/api/MapleApi";
import InfoItem from "@/components/info/InfoItem";
import InfoItemDetail from "@/components/info/InfoItemDetail";
import { ItemEquipment } from "@/interface/ItemEquipment";
import { ocidState } from "@/recoil/states";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";

interface InfoProps {
  params: {};
  searchParams: { searchText: string; date: string };
}

const Info = (props: InfoProps) => {
  const [is_popup, setIs_popup] = useState(false);
  const [ocid, setOcid] = useRecoilState(ocidState);

  const [item, setItem] = useState<ItemEquipment>();

  // const { data, isLoading, isError } = useQuery(["data", { ocid: ocid, date: props.searchParams.date }], () =>
  //   getItemEquipment({ ocid: ocid, date: props.searchParams.date })
  // );

  // useEffect(() => {
  //   setItem(data);
  // }, [data]);

  useEffect(() => {
    setItem(tempItemData);
  }, []);

  // useEffect(() => {
  //   if (ocid.length === 0) {
  //     const fetch = async () => {
  //       const {
  //         searchParams: { searchText },
  //       } = props;
  //       if (API_KEY) {
  //         setAPIKey(API_KEY);
  //       }

  //       const result = await getOCID(searchText);
  //       setOcid(result.ocid);

  //       handleCharacterItemEquipment(result.ocid);
  //     };
  //     fetch();
  //   } else {
  //     handleCharacterItemEquipment();
  //   }
  // }, []);

  const handleCharacterItemEquipment = async (tempOcid = ocid) => {
    const {
      searchParams: { date },
    } = props;
  };
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
                  {item &&
                    item.item_equipment.map((value) => {
                      return <InfoItem setIs_popup={setIs_popup} value={value} />;
                    })}
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
