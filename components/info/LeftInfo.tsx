import { Ability, AbilityInfo } from "@/interface/Ability";
import { CharacterBasic } from "@/interface/character";
import { Dojang } from "@/interface/Dojang";
import { HexaMatrix, HexaSum } from "@/interface/Hexamatrix";
import { HyperStat, HyperStatDetail } from "@/interface/HyperStat";
import { ItemData, title } from "@/interface/ItemEquipment";
import { LinkSkill, LinkSkillDetail } from "@/interface/LinkSkill";
import { Symbol } from "@/interface/Symbol";
import { Union } from "@/interface/Union";
import { UnionRaider } from "@/interface/UnionRaider";
import { useState } from "react";
import InfoPopup from "./InfoPopup";

interface LeftInfoProps {
  hexa: HexaMatrix | undefined;
  characterBasic: CharacterBasic | undefined;
  date: string;
  title: title | undefined;
  dojang: Dojang | undefined;
  union: Union | undefined;
  symbol: Symbol | undefined;
  hexaSum: HexaSum | undefined;
  hyperStatFreeSet: HyperStatDetail[] | undefined;
  abilityFreeSet: Ability[] | undefined;
  unionRaiderFreeSet: string[] | undefined;
  linkSkillFreeSet: LinkSkillDetail[] | undefined;
}

const LeftInfo = (props: LeftInfoProps) => {
  const {
    characterBasic,
    hexa,
    title,
    date,
    dojang,
    union,
    symbol,
    hexaSum,
    hyperStatFreeSet,
    abilityFreeSet,
    unionRaiderFreeSet,
    linkSkillFreeSet,
  } = props;
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const [btnState, setBtnState] = useState<string>("hexa");

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleBtnState = (value: string) => {
    setBtnState(value);
  };

  return (
    <div className="relative flex h-fit flex-col gap-5 rounded-[10px] bg-white p-[20px_25px]">
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <div className="flex gap-[5px]">
            <div className="flex items-center">데이터 기준 시간 : {date}</div>
            <div className="relative">
              <img
                className="relative flex h-[20px] w-[22px] cursor-pointer items-center"
                src="../img/icon_guide_wrong.png"
                alt="스탯 조건"
                onClick={handlePopup}
              />
              <div className="absolute left-[-18px] top-[35px] mo:left-auto mo:right-[-18px]">
                {isPopup && (
                  <InfoPopup
                    title={title}
                    handlePopup={handlePopup}
                    unionRaiderFreeSet={unionRaiderFreeSet}
                    hyperStatFreeSet={hyperStatFreeSet}
                    abilityFreeSet={abilityFreeSet}
                    linkSkillFreeSet={linkSkillFreeSet}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <img
            className="w-[96px] -scale-x-100 rounded-full border"
            src={characterBasic?.character_image}
          />
          <div className="flex flex-col gap-[3px] text-[13px]">
            <div className="flex items-center gap-[5px]">
              <div className="text-[17px] font-bold">{characterBasic?.character_name}</div>
              <div className="flex items-center justify-center gap-1 rounded-[20px] border px-3 py-1">
                <img className="h-[17px] w-[17px]" src="../img/elysium.png" />
                <div className="truncate">{characterBasic?.world_name}</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-[5px]">
              <div className="max-w-[25rem] truncate">
                {characterBasic?.character_class} | Lv.{characterBasic?.character_level} |{" "}
                {characterBasic?.character_guild_name}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="flex gap-3">
                <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
                  무릉도장
                </span>
                <div className="flex gap-2">
                  <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">
                    {dojang?.dojang_best_floor}층
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
                  유니온
                </span>
                <div className="flex gap-2">
                  <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">
                    종합 {union?.union_level}
                  </span>
                  <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">
                    아티팩트 Lv.{union?.union_artifact_level}
                  </span>
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
      </div>
      <div className="flex w-full flex-col gap-[10px] text-[13px]">
        {btnState === "hexa" && (
          <>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer" onClick={() => handleBtnState("hexa")}>
                <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#FFAE34] text-[#FFAE34] bg-[#FFFCE0]">
                  헥사
                </div>
              </div>
              <div className="cursor-pointer" onClick={() => handleBtnState("symbol")}>
                <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#dfdfdf] text-[#c6c6c6] bg-[#fff]">
                  심볼
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-col items-start">
              <div className="flex justify-center px-3">
                <div className="my-3 grid grid-cols-8 grid-rows-1 flex-wrap items-center gap-x-[8px] self-start text-center">
                  {hexa?.character_hexa_core_equipment.map((value, idx) => {
                    return (
                      <div key={idx}>
                        <div className="flex flex-col items-center divide-y rounded-[5px] border">
                          <img
                            className="w-[28px] flex-1"
                            src={
                              hexa?.character_hexa_core_equipment.length - 1 !== idx
                                ? `../img/CannonMaster_` + (idx + 1) + `.png`
                                : `../img/General_1_0.png`
                            }
                            alt="캐논 버스터"
                          />
                          <div>{value.hexa_core_level}</div>
                          <div className="text-[10px] ">
                            {Math.round(value.hexa_core_level * 3.3 + 1)}%
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex w-fit items-center divide-x rounded-[10px] border py-6">
                <div className="flex min-w-[75px] flex-col items-center px-7">
                  <img
                    className="h-[35px] cursor-pointer"
                    src="../img/sole_erda.png"
                    alt="sole_erda"
                  />
                  <div>
                    <strong>{hexaSum?.base}</strong> 개
                  </div>
                </div>
                <div className="flex min-w-[75px] items-center px-7">
                  <div className="flex flex-col items-center">
                    <img
                      className="h-[35px]"
                      src="../img/sole_erda_piece.png"
                      alt="sole_erda_piece"
                    />
                    <div>
                      <strong>{hexaSum?.piece}</strong> 개
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {btnState === "symbol" && (
          <>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer" onClick={() => handleBtnState("hexa")}>
                <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#dfdfdf] text-[#c6c6c6] bg-[#fff]">
                  헥사
                </div>
              </div>
              <div className="cursor-pointer" onClick={() => handleBtnState("symbol")}>
                <div className="inline-flex h-[22px] w-fit min-w-[87px] items-center justify-center rounded-[10px] border px-[10px] py-[3px] text-[13px] font-bold border-[#509CA7] text-[#509CA7] bg-[#D9F4F8]">
                  심볼
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-start gap-4">
              <div className="flex justify-center px-3">
                <div className="grid grid-cols-6 grid-rows-2 flex-wrap items-center gap-x-[5px] gap-y-[5px] self-start text-center">
                  {symbol?.symbol.map((value, idx) => {
                    return (
                      <div
                        className="flex flex-col items-center divide-y rounded-[10px] border p-3"
                        key={idx}
                      >
                        <img className="w-[28px]" src={value.symbol_icon} alt={value.symbol_name} />
                        <div>Lv.{value.symbol_level}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
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
            <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
              5셋
            </span>
          </div>
          <div className="flex gap-[5px]">
            <div className="truncate" title="칠흑의 보스 세트">
              칠흑의 보스 세트
            </div>
            <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
              4셋
            </span>
          </div>
          <div className="flex gap-[5px]">
            <div className="truncate" title="소멸의 여로 세트">
              소멸의 여로 세트
            </div>
            <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
              5셋
            </span>
          </div>
          <div className="flex gap-[5px]">
            <div className="truncate" title="여명의 보스 세트">
              여명의 보스 세트
            </div>
            <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
              2셋
            </span>
          </div>
          <div className="flex gap-[5px]">
            <div className="truncate" title="칠요 세트">
              칠요 세트
            </div>
            <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
              2셋
            </span>
          </div>
          <div className="flex gap-[5px]">
            <div className="truncate" title="루타비스 세트(해적)">
              루타비스 세트(해적)
            </div>
            <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
              4셋
            </span>
          </div>
          <div className="flex gap-[5px]">
            <div className="truncate" title="쁘띠 페어리 세트">
              쁘띠 페어리 세트
            </div>
            <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#E7F1FF] text-[#329DFF]">
              1셋
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftInfo;
