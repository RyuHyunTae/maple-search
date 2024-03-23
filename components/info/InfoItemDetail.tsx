import { ItemData, ItemDataArray, ItemDetail } from "@/interface/ItemEquipment";
import { itemDataState } from "@/recoil/states";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

interface InfoItemDetailProps {
  setIs_popup: (value: boolean) => void;
}

const InfoItemDetail = (props: InfoItemDetailProps) => {
  const { setIs_popup } = props;
  const [itemData, setItemData] = useRecoilState<ItemData>(itemDataState);
  const [detailInfo, setDetailInfo] = useState<ItemDetail[]>([]);
  const onClick = () => {
    setIs_popup(false);
  };

  useEffect(() => {
    const datailInfo: ItemDetail[] = [
      {
        str: {
          name: "STR",
          total: itemData.item_total_option.str,
          base: itemData.item_base_option.str,
          add: itemData.item_add_option.str,
          etc: itemData.item_etc_option.str,
          starforce: itemData.item_starforce_option.str,
        },
      },
      {
        dex: {
          name: "DEX",
          total: itemData.item_total_option.dex,
          base: itemData.item_base_option.dex,
          add: itemData.item_add_option.dex,
          etc: itemData.item_etc_option.dex,
          starforce: itemData.item_starforce_option.dex,
        },
      },
      {
        int: {
          name: "INT",
          total: itemData.item_total_option.int,
          base: itemData.item_base_option.int,
          add: itemData.item_add_option.int,
          etc: itemData.item_etc_option.int,
          starforce: itemData.item_starforce_option.int,
        },
      },
      {
        luk: {
          name: "LUK",
          total: itemData.item_total_option.luk,
          base: itemData.item_base_option.luk,
          add: itemData.item_add_option.luk,
          etc: itemData.item_etc_option.luk,
          starforce: itemData.item_starforce_option.luk,
        },
      },
      {
        max_hp: {
          name: "최대 HP",
          total: itemData.item_total_option.max_hp,
          base: itemData.item_base_option.max_hp,
          add: itemData.item_add_option.max_hp,
          etc: itemData.item_etc_option.max_hp,
          starforce: itemData.item_starforce_option.max_hp,
        },
      },
      {
        max_mp: {
          name: "초대 MP",
          total: itemData.item_total_option.max_mp,
          base: itemData.item_base_option.max_mp,
          add: itemData.item_add_option.max_mp,
          etc: itemData.item_etc_option.max_mp,
          starforce: itemData.item_starforce_option.max_mp,
        },
      },
      {
        max_hp_rate: {
          name: "최대 HP",
          total: itemData.item_total_option.max_hp_rate,
          base: itemData.item_base_option.max_hp_rate,
        },
      },
      {
        max_mp_rate: {
          name: "최대 MP",
          total: itemData.item_total_option.max_mp_rate,
          base: itemData.item_base_option.max_mp_rate,
        },
      },
      {
        attack_power: {
          name: "공격력",
          total: itemData.item_total_option.attack_power,
          base: itemData.item_base_option.attack_power,
          add: itemData.item_add_option.attack_power,
          etc: itemData.item_etc_option.attack_power,
          starforce: itemData.item_starforce_option.attack_power,
        },
      },
      {
        magic_power: {
          name: "마력",
          total: itemData.item_total_option.magic_power,
          base: itemData.item_base_option.magic_power,
          add: itemData.item_add_option.magic_power,
          etc: itemData.item_etc_option.magic_power,
          starforce: itemData.item_starforce_option.magic_power,
        },
      },
      {
        all_stat: {
          name: "올스텟",
          total: itemData.item_total_option.all_stat,
          base: itemData.item_base_option.all_stat,
          add: itemData.item_add_option.all_stat,
        },
      },
      {
        boss_damage: {
          name: "보스 몬스터 공격 시 데미지",
          total: itemData.item_total_option.boss_damage,
          base: itemData.item_base_option.boss_damage,
          add: itemData.item_add_option.boss_damage,
        },
      },
      {
        ignore_monster_armor: {
          name: "몬스터 방어율 무시",
          total: itemData.item_total_option.ignore_monster_armor,
          base: itemData.item_base_option.ignore_monster_armor,
        },
      },
    ];
    setDetailInfo(datailInfo);
  }, [itemData]);

  return (
    <div
      id="ModalContainer"
      className="fixed bottom-0 left-0 right-0 top-0 z-[500] h-screen min-h-screen w-full bg-[rgba(0,0,0,0)]"
      onClick={onClick}
    >
      <div className="z-15 fixed left-[50%] top-[50%] min-w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-[5px] bg-[#000000de] text-[12px] text-white">
        <div className="flex h-full w-full flex-col divide-y divide-dashed divide-[#454545] p-[15px] [&>div]:py-[7px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <div className="flex w-[200px] flex-wrap items-center justify-center gap-x-[5px]">
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_white.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_white.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_white.png" alt="star" />
              </div>
            </div>
            <div className="text-[16px]  text-[rgb(204,255,0)]">위대한 시그너스의 </div>
            <div className="text-[15px] font-bold">
              {itemData.item_name} (+{itemData.scroll_upgrade})
            </div>
            <div>({itemData.potential_option_grade})</div>
          </div>
          <div className="flex items-center gap-[10px] !py-[20px]">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[10px] border-2 border-[rgb(119,238,0)] bg-white py-[10px]">
              <img className="h-[50px] w-auto" src={itemData.item_icon} alt="img" />
            </div>
            <div className="flex gap-3" />
          </div>
          <div>
            <div>장비분류 : {itemData.item_equipment_slot}</div>
            <ul>
              {detailInfo.map((item: ItemDetail, idx: number) =>
                Object.keys(item).map((key) => {
                  let percent = false;
                  if (
                    key === "max_hp_rate" ||
                    key === "max_mp_rate" ||
                    key === "all_stat" ||
                    key === "boss_damage" ||
                    key === "ignore_monster_armor"
                  ) {
                    percent = true;
                  } else {
                    percent = false;
                  }

                  return (
                    <div className="flex gap-3" key={idx}>
                      {Number(item[key].total) !== 0 && (
                        <>
                          <div className="text-[#030f0f]">{item[key].name} : </div>
                          <div className="text-[rgb(102,255,255)]">
                            +{item[key].total}
                            {percent && "%"}
                          </div>
                          <div className="flex gap-1">
                            <div>(</div>

                            {Number(item[key].base) !== 0 && item[key].base !== undefined && (
                              <div>
                                {item[key].base}
                                {percent && "%"}
                              </div>
                            )}
                            {Number(item[key].etc) !== 0 && item[key].etc !== undefined && (
                              <div className="text-[rgb(170,170,255)]">
                                +{item[key].etc}
                                {percent && "%"}
                              </div>
                            )}
                            {Number(item[key].add) !== 0 && item[key].add !== undefined && (
                              <div className="text-[rgb(204,255,0)]">
                                +{item[key].add}
                                {percent && "%"}
                              </div>
                            )}
                            {Number(item[key].starforce) !== 0 && item[key].starforce !== undefined && (
                              <div className="text-[rgb(255,204,0)]">
                                +{item[key].starforce}
                                {percent && "%"}
                              </div>
                            )}
                            <div>)</div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })
              )}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-[5px] text-[rgb(119,238,0)]">
              <div
                className="mt-[2px] h-[12px] w-[12px] rounded-[2px] border-[1px] bg-[rgb(119,238,0)] text-center text-[9px] font-semibold leading-[9px] text-white"
                style={{
                  textShadow:
                    "rgb(68, 68, 68) -1px -1px 0px, rgb(68, 68, 68) 1px -1px 0px, rgb(68, 68, 68) -1px 1px 0px, rgb(68, 68, 68) 1px 1px 0px",
                }}
              >
                L
              </div>
              <div>잠재옵션</div>
            </div>
            <ul>
              <div>공격력 : +12%</div>
              <div>보스 몬스터 공격 시 데미지 : +30%</div>
              <div>보스 몬스터 공격 시 데미지 : +30%</div>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-[5px] text-[rgb(119,238,0)]">
              <div
                className="mt-[2px] h-[12px] w-[12px] rounded-[2px] border-[1px] bg-[rgb(119,238,0)] text-center text-[9px] font-semibold leading-[9px] text-white"
                style={{
                  textShadow:
                    "rgb(68, 68, 68) -1px -1px 0px, rgb(68, 68, 68) 1px -1px 0px, rgb(68, 68, 68) -1px 1px 0px, rgb(68, 68, 68) 1px 1px 0px",
                }}
              >
                L
              </div>
              <div>에디셔널 잠재옵션</div>
            </div>
            <ul>
              <div>공격력 : +12%</div>
              <div>DEX : +9%</div>
              <div>공격력 : +9%</div>
            </ul>
          </div>
          <div>
            <div className="flex flex-col items-start gap-[5px]">
              <div className="flex items-center text-yellow-300">위대한 시그너스의 소울 적용</div>
              <div className="flex items-center">공격력 : +3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoItemDetail;
