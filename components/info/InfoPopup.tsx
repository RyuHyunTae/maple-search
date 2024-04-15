import { Ability, AbilityInfo } from "@/interface/Ability";
import { HyperStat, HyperStatDetail } from "@/interface/HyperStat";
import { title } from "@/interface/ItemEquipment";
import { LinkSkill, LinkSkillDetail } from "@/interface/LinkSkill";
import { UnionRaider } from "@/interface/UnionRaider";

interface InfoPopupProps {
  title: title | undefined;
  unionRaiderPreSet: string[] | undefined;
  hyperStatPreSet: HyperStatDetail[] | undefined;
  abilityPreSet: Ability[] | undefined;
  linkSkillPreSet: LinkSkillDetail[] | undefined;
  handlePopup: () => void;
}

const InfoPopup = (props: InfoPopupProps) => {
  const { title, unionRaiderPreSet, hyperStatPreSet, abilityPreSet, linkSkillPreSet, handlePopup } =
    props;
  return (
    <div className='relative z-[15] w-[45rem] max-w-[98vw] rounded-[5px] bg-[#000000de] text-[12px] text-white after:absolute after:left-[30px] after:top-0 after:ml-[-10px] after:mt-[-10px] after:h-0 after:w-0 after:border-[10px] after:border-t-0 after:border-solid after:border-transparent after:border-b-[#000000de] after:content-[""] mo:after:left-auto mo:after:right-[18px]'>
      <button
        className="absolute right-[15px] top-[15px] flex w-[20px] rounded-full bg-[#ffffffde] p-[3px] hover:bg-white"
        onClick={handlePopup}
      >
        <img className="" src="../img/icon_close.png" alt="" />
      </button>
      <div className="flex h-full w-full flex-col p-[15px]">
        <div className="flex h-[35rem] flex-col gap-[5px] overflow-y-auto pr-5 scrollbar-hide">
          <div className="flex flex-col gap-3 divide-y divide-dashed divide-[#454545]  [&>div]:py-[7px]">
            <div className="!pt-0 text-[15px] font-bold">적용 중인 옵션</div>
            <div className="my-1 py-1">
              - 어빌리티
              <div className="mt-3 flex flex-col rounded-xl text-[#fff]">
                {abilityPreSet?.map((value, idx) => {
                  return (
                    <div
                      className={
                        value.ability_grade === "레전드리"
                          ? "my-1 flex items-center rounded-lg border px-3 bg-[rgb(164,199,0)] pl-3"
                          : value.ability_grade === "유니크"
                          ? "my-1 flex items-center rounded-lg border px-3 bg-[rgb(232,156,0)] pl-3"
                          : value.ability_grade === "에픽"
                          ? "my-1 flex items-center rounded-lg border px-3 bg-[rgb(170,17,238)] pl-3"
                          : "my-1 flex items-center rounded-lg border px-3 bg-[rgb(34,187,255)] pl-3"
                      }
                      key={idx}
                    >
                      <span className="truncate" title="보스 몬스터 공격 시 데미지 20% 증가">
                        {value.ability_value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="my-1 py-1">
              - 유니온
              <div className="mt-3 flex flex-col rounded-xl border bg-[#ffffffde] p-3 text-black">
                {unionRaiderPreSet?.map((value, idx) => {
                  return <div key={idx}>{value}</div>;
                })}
              </div>
            </div>
            <div className="my-1 py-1">
              - 링크
              <div className="mt-3 grid grid-cols-4 gap-y-[2px]">
                {linkSkillPreSet?.map((value, idx) => {
                  return (
                    <div className="flex gap-[5px]" key={idx}>
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
                {hyperStatPreSet?.map((value, idx) => {
                  return (
                    <div className="flex gap-[5px]" key={idx}>
                      <div className="flex items-center">{value.stat_increase}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="py-13 my-1 gap-3">
              - 길드 노블레스
              <div className="mt-3 flex gap-3">
                <div className="rounded-xl border bg-[#ffffffde] px-3 text-black">
                  길드노블 : 60p
                </div>
              </div>
            </div>
            <div className="my-1 py-1">
              - 칭호
              <div className="mt-3 flex items-center gap-3">
                <img src={title?.title_icon} />
                <div> {title?.title_name}</div>
              </div>
              <div className="mt-3 rounded-xl border bg-[#ffffffde] p-3 text-black">
                {title?.title_description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
