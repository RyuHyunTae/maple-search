import { CharacterBasic } from "@/interface/character";
import { HexaMatrix } from "@/interface/Hexamatrix";
import { title } from "@/interface/ItemEquipment";
import { LinkSkill } from "@/interface/LinkSkill";

interface LeftInfoProps {
  hexa: HexaMatrix | undefined;
  characterBasic: CharacterBasic | undefined;
  date: string;
  title: title | undefined;
  linkSkill: LinkSkill | undefined;
}

const LeftInfo = (props: LeftInfoProps) => {
  const { characterBasic, hexa, title, linkSkill, date } = props;
  return (
    <div className="relative flex h-fit flex-col gap-5 rounded-[10px] bg-white p-[20px_25px]">
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center justify-between">
          <div className="flex gap-[5px]">
            <div className="flex items-center">데이터 기준 시간 : {date}</div>
            <div className="relative">
              <img className="relative flex h-[20px] w-[22px] cursor-pointer items-center" src="../img/icon_guide_wrong.png" alt="스탯 조건" />
              <div className="absolute left-[-18px] top-[35px] mo:left-auto mo:right-[-18px]">
                <div className='relative z-[15] w-[45rem] max-w-[98vw] rounded-[5px] bg-[#000000de] text-[12px] text-white after:absolute after:left-[30px] after:top-0 after:ml-[-10px] after:mt-[-10px] after:h-0 after:w-0 after:border-[10px] after:border-t-0 after:border-solid after:border-transparent after:border-b-[#000000de] after:content-[""] mo:after:left-auto mo:after:right-[18px]'>
                  <button className="absolute right-[15px] top-[15px] flex w-[20px] rounded-full bg-[#ffffffde] p-[3px] hover:bg-white">
                    <img className="" src="../img/icon_close.png" alt="" />
                  </button>
                  <div className="flex h-full w-full flex-col p-[15px]">
                    <div className="flex h-[35rem] flex-col gap-[5px] overflow-y-auto pr-5 scrollbar-hide">
                      <div className="flex flex-col gap-3 divide-y divide-dashed divide-[#454545]  [&>div]:py-[7px]">
                        <div className="!pt-0 text-[15px] font-bold">적용 중인 옵션</div>
                        <div className="my-1 py-1">
                          - 어빌리티
                          <div className="mt-3 flex flex-col rounded-xl text-[#fff]">
                            <div className="my-1 flex items-center rounded-lg border px-3 bg-[rgb(164,199,0)] pl-3">
                              <span className="truncate" title="보스 몬스터 공격 시 데미지 20% 증가">
                                보스 몬스터 공격 시 데미지 20% 증가
                              </span>
                            </div>
                            <div className="my-1 flex items-center rounded-lg border px-3 bg-[rgb(232,156,0)] pl-3">
                              <span className="truncate" title="상태 이상에 걸린 대상 공격 시 데미지 8% 증가">
                                상태 이상에 걸린 대상 공격 시 데미지 8% 증가
                              </span>
                            </div>
                            <div className="my-1 flex items-center rounded-lg border px-3 bg-[rgb(232,156,0)] pl-3">
                              <span className="truncate" title="공격력 21 증가">
                                공격력 21 증가
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="my-1 py-1">
                          - 유니온
                          <div className="mt-3 flex flex-col rounded-xl border bg-[#ffffffde] p-3 text-black">
                            <div>STR 75 증가</div>
                            <div>크리티컬 데미지 20.00% 증가</div>
                            <div>LUK 5 증가</div>
                            <div>크리티컬 확률 15% 증가</div>
                            <div>공격력 12 증가</div>
                            <div>보스 몬스터 공격 시 데미지 40% 증가</div>
                            <div>DEX 5 증가</div>
                            <div>방어율 무시 40% 증가</div>
                          </div>
                        </div>
                        <div className="my-1 py-1">
                          - 링크
                          <div className="mt-3 grid grid-cols-4 gap-y-[2px]">
                            {linkSkill?.character_link_skill.map((value, idx) => {
                              return (
                                <div className="flex gap-[5px]">
                                  <img src={value.skill_icon} title={value.skill_name} />
                                  <div className="flex items-center">Lv.{value.skill_level}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="my-1 py-1">
                          - 하이퍼스탯
                          <div className="mt-3 flex flex-col rounded-xl border bg-[#ffffffde] p-3 text-black">
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">힘 120 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">민첩성 60 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">크리티컬 확률 4% 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">크리티컬 데미지 14% 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">방어율 무시 33% 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">데미지 39% 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">보스 몬스터 공격 시 데미지 51% 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">상태 이상 내성 1 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">공격력과 마력 18 증가</div>
                            </div>
                            <div className="flex gap-[5px]">
                              <div className="flex items-center">일반 몬스터 공격 시 데미지 3% 증가</div>
                            </div>
                          </div>
                        </div>
                        <div className="py-13 my-1 gap-3">
                          - 길드 노블레스 / 드랍 메획 수치
                          <div className="mt-3 flex gap-3">
                            <div className="rounded-xl border bg-[#ffffffde] px-3 text-black">길드노블 : 60p</div>
                            <div className="rounded-xl border bg-[#ffffffde] px-3 text-black">드랍 12%</div>
                            <div className="rounded-xl border bg-[#ffffffde] px-3 text-black">메획 16%</div>
                          </div>
                        </div>
                        <div className="my-1 py-1">
                          - 칭호
                          <div className="mt-3 flex items-center gap-3">
                            <img src={title?.title_icon} />
                            <div> {title?.title_name}</div>
                          </div>
                          <div className="mt-3 rounded-xl border bg-[#ffffffde] p-3 text-black">{title?.title_description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <img className="w-[96px] -scale-x-100 rounded-full border" src={characterBasic?.character_image} />
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
                {characterBasic?.character_class} | Lv.{characterBasic?.character_level} | {characterBasic?.character_guild_name}
              </div>
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
                  <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">종합 9203</span>
                  <span className="w-fit flex-none rounded-[2px] p-[2px_4px] text-[11px] font-bold bg-[#FFE6E6] text-[#FF4D4D]">아티팩트 Lv.44</span>
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
                      <div className="text-[10px] ">{Math.round(value.hexa_core_level * 3.3 + 1)}%</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-fit items-center divide-x rounded-[10px] border py-6">
            <div className="flex min-w-[75px] flex-col items-center px-7">
              <img className="h-[35px] cursor-pointer" src="../img/sole_erda.png" alt="sole_erda" />
              <div>
                <strong>852</strong> 개
              </div>
            </div>
            <div className="flex min-w-[75px] items-center px-7">
              <div className="flex flex-col items-center">
                <img className="h-[35px]" src="../img/sole_erda_piece.png" alt="sole_erda_piece" />
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
  );
};

export default LeftInfo;
