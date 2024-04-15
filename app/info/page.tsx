"use client";

import {
  getCharactorAbility,
  getCharactorBasic,
  getCharactorDojang,
  getCharactorHexaMatrix,
  getCharactorHyperStat,
  getCharactorLinkSkill,
  getCharactorSymbolEquipment,
  getItemEquipment,
  getOcid,
  getUserUnion,
  getUserUnionRaider,
} from "@/api/MapleApi";
import LeftInfo from "@/components/info/LeftInfo";
import RightInfo from "@/components/info/RightInfo";
import { HexaMatrix, HexaSum } from "@/interface/Hexamatrix";
import { ItemData, ItemEquipment } from "@/interface/ItemEquipment";
import { CharacterBasic } from "@/interface/character";
import { itemDetailPopupState, ocidState, preSetState } from "@/recoil/states";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { LinkSkill, LinkSkillDetail } from "@/interface/LinkSkill";
import { Ability, AbilityInfo } from "@/interface/Ability";
import { Dojang } from "@/interface/Dojang";
import { Union } from "@/interface/Union";
import { UnionRaider } from "@/interface/UnionRaider";
import { HyperStat, HyperStatDetail } from "@/interface/HyperStat";
import { Symbol } from "@/interface/Symbol";
import { PreSet } from "@/interface/PreSet";

interface InfoProps {
  params: {};
  searchParams: { searchText: string; date: string };
}

const Info = (props: InfoProps) => {
  const [is_popup, setIs_popup] = useState(false);
  const [ocid, setOcid] = useRecoilState(ocidState);
  const [itemDetailPopup, setItemDetailPopup] = useRecoilState<boolean>(itemDetailPopupState);
  const [preSet, setPreSet] = useRecoilState<PreSet>(preSetState);

  const [item, setItem] = useState<ItemEquipment>();
  const [hexa, setHexa] = useState<HexaMatrix>();
  const [characterBasic, setCharacterBasic] = useState<CharacterBasic>();
  const [linkSkill, setLinkSkill] = useState<LinkSkill>();
  const [ability, setAbility] = useState<AbilityInfo>();
  const [dojang, setDojang] = useState<Dojang>();
  const [union, setUnion] = useState<Union>();
  const [unionRaider, setUnionRaider] = useState<UnionRaider>();
  const [hyperStat, setHyperStat] = useState<HyperStat>();
  const [symbol, setSymbol] = useState<Symbol>();

  const [hexaSum, setHexaSum] = useState<HexaSum>();

  const [itemPreSet, setItemPreSet] = useState<ItemData[]>();
  const [hyperStatPreSet, setHyperStatPreSet] = useState<HyperStatDetail[]>();
  const [abilityPreSet, setAbilityPreSet] = useState<Ability[]>();
  const [unionRaiderPreSet, setUnionRaiderPreSet] = useState<string[]>();
  const [linkSkillPreSet, setLinkSkillPreSet] = useState<LinkSkillDetail[]>();

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
  } = useQuery(
    ["data1", { ocid: ocid, date: props.searchParams.date }],
    () => getItemEquipment({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
  } = useQuery(
    ["data2", { ocid: ocid, date: props.searchParams.date }],
    () => getCharactorBasic({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data3,
    isLoading: isLoading3,
    isError: isError3,
  } = useQuery(
    ["data3", { ocid: ocid, date: props.searchParams.date }],
    () => getCharactorHexaMatrix({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data4,
    isLoading: isLoading4,
    isError: isError4,
  } = useQuery(
    ["data4", { ocid: ocid, date: props.searchParams.date }],
    () => getCharactorLinkSkill({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data5,
    isLoading: isLoading5,
    isError: isError5,
  } = useQuery(
    ["data5", { ocid: ocid, date: props.searchParams.date }],
    () => getCharactorAbility({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data6,
    isLoading: isLoading6,
    isError: isError6,
  } = useQuery(
    ["data6", { ocid: ocid, date: props.searchParams.date }],
    () => getCharactorDojang({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data7,
    isLoading: isLoading7,
    isError: isError7,
  } = useQuery(
    ["data7", { ocid: ocid, date: props.searchParams.date }],
    () => getUserUnion({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data8,
    isLoading: isLoading8,
    isError: isError8,
  } = useQuery(
    ["data8", { ocid: ocid, date: props.searchParams.date }],
    () => getUserUnionRaider({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data9,
    isLoading: isLoading9,
    isError: isError9,
  } = useQuery(
    ["data9", { ocid: ocid, date: props.searchParams.date }],
    () => getCharactorHyperStat({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  const {
    data: data10,
    isLoading: isLoading10,
    isError: isError10,
  } = useQuery(
    ["data10", { ocid: ocid, date: props.searchParams.date }],
    () => getCharactorSymbolEquipment({ ocid: ocid, date: props.searchParams.date }),
    {
      enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
    }
  );

  useEffect(() => {
    setItem(data1);
    setItemPreSet(data1?.item_equipment);
  }, [data1]);

  useEffect(() => {
    setCharacterBasic(data2);
  }, [data2]);

  useEffect(() => {
    const skill = [
      { base: 5, piece: 100 },
      { base: 1, piece: 30 },
      { base: 1, piece: 35 },
      { base: 1, piece: 40 },
      { base: 2, piece: 45 },
      { base: 2, piece: 50 },
      { base: 2, piece: 55 },
      { base: 3, piece: 60 },
      { base: 3, piece: 65 },
      { base: 10, piece: 200 },
      { base: 3, piece: 80 },
      { base: 3, piece: 90 },
      { base: 4, piece: 100 },
      { base: 4, piece: 110 },
      { base: 4, piece: 120 },
      { base: 4, piece: 130 },
      { base: 4, piece: 140 },
      { base: 4, piece: 150 },
      { base: 5, piece: 160 },
      { base: 15, piece: 350 },
      { base: 5, piece: 170 },
      { base: 5, piece: 180 },
      { base: 5, piece: 190 },
      { base: 5, piece: 200 },
      { base: 5, piece: 210 },
      { base: 6, piece: 220 },
      { base: 6, piece: 230 },
      { base: 6, piece: 240 },
      { base: 7, piece: 250 },
      { base: 20, piece: 500 },
    ];

    const masterly = [
      { base: 3, piece: 50 },
      { base: 1, piece: 15 },
      { base: 1, piece: 18 },
      { base: 1, piece: 20 },
      { base: 1, piece: 23 },
      { base: 1, piece: 25 },
      { base: 1, piece: 28 },
      { base: 2, piece: 30 },
      { base: 2, piece: 33 },
      { base: 10, piece: 100 },
      { base: 2, piece: 40 },
      { base: 2, piece: 45 },
      { base: 2, piece: 50 },
      { base: 2, piece: 55 },
      { base: 2, piece: 60 },
      { base: 2, piece: 65 },
      { base: 2, piece: 70 },
      { base: 2, piece: 75 },
      { base: 3, piece: 80 },
      { base: 8, piece: 175 },
      { base: 3, piece: 85 },
      { base: 3, piece: 90 },
      { base: 3, piece: 95 },
      { base: 3, piece: 100 },
      { base: 3, piece: 105 },
      { base: 3, piece: 110 },
      { base: 3, piece: 115 },
      { base: 3, piece: 120 },
      { base: 4, piece: 125 },
      { base: 10, piece: 250 },
    ];

    const enhance = [
      { base: 4, piece: 75 },
      { base: 1, piece: 23 },
      { base: 1, piece: 27 },
      { base: 1, piece: 30 },
      { base: 2, piece: 34 },
      { base: 2, piece: 38 },
      { base: 2, piece: 42 },
      { base: 3, piece: 45 },
      { base: 3, piece: 49 },
      { base: 8, piece: 150 },
      { base: 3, piece: 60 },
      { base: 3, piece: 68 },
      { base: 3, piece: 75 },
      { base: 3, piece: 83 },
      { base: 3, piece: 90 },
      { base: 3, piece: 98 },
      { base: 3, piece: 105 },
      { base: 3, piece: 113 },
      { base: 4, piece: 120 },
      { base: 12, piece: 263 },
      { base: 4, piece: 128 },
      { base: 4, piece: 135 },
      { base: 4, piece: 143 },
      { base: 4, piece: 150 },
      { base: 4, piece: 158 },
      { base: 5, piece: 165 },
      { base: 5, piece: 173 },
      { base: 5, piece: 180 },
      { base: 6, piece: 188 },
      { base: 15, piece: 375 },
    ];

    const common = [
      { base: 7, piece: 125 },
      { base: 2, piece: 38 },
      { base: 2, piece: 44 },
      { base: 2, piece: 50 },
      { base: 3, piece: 57 },
      { base: 3, piece: 63 },
      { base: 3, piece: 69 },
      { base: 5, piece: 75 },
      { base: 5, piece: 82 },
      { base: 14, piece: 300 },
      { base: 5, piece: 110 },
      { base: 5, piece: 124 },
      { base: 6, piece: 138 },
      { base: 6, piece: 152 },
      { base: 6, piece: 165 },
      { base: 6, piece: 179 },
      { base: 6, piece: 193 },
      { base: 6, piece: 207 },
      { base: 7, piece: 220 },
      { base: 17, piece: 525 },
      { base: 7, piece: 234 },
      { base: 7, piece: 248 },
      { base: 7, piece: 262 },
      { base: 7, piece: 275 },
      { base: 7, piece: 289 },
      { base: 9, piece: 303 },
      { base: 9, piece: 317 },
      { base: 9, piece: 330 },
      { base: 10, piece: 344 },
      { base: 20, piece: 750 },
    ];

    let base_sum = 0;
    let piece_sum = 0;

    data3?.character_hexa_core_equipment.forEach((value: any) => {
      switch (value.hexa_core_type) {
        case "마스터리 코어":
          for (let i = 0; i < value.hexa_core_level; i++) {
            base_sum = base_sum + masterly[i].base;
            piece_sum = piece_sum + masterly[i].piece;
          }
          break;
        case "강화 코어":
          for (let i = 0; i < value.hexa_core_level; i++) {
            base_sum = base_sum + enhance[i].base;
            piece_sum = piece_sum + enhance[i].piece;
          }
          break;
        case "스킬 코어":
          for (let i = 0; i < value.hexa_core_level; i++) {
            base_sum = base_sum + skill[i].base;
            piece_sum = piece_sum + skill[i].piece;
          }
          break;
        case "공용 코어":
          for (let i = 0; i < value.hexa_core_level; i++) {
            base_sum = base_sum + common[i].base;
            piece_sum = piece_sum + common[i].piece;
          }
          break;

        default:
          break;
      }
    });
    setHexaSum({ base: base_sum, piece: piece_sum });
    setHexa(data3);
  }, [data3]);

  useEffect(() => {
    setLinkSkill(data4);
    setLinkSkillPreSet(data4?.character_link_skill);
  }, [data4]);

  useEffect(() => {
    setAbility(data5);
    setAbilityPreSet(data5?.ability_info);
  }, [data5]);

  useEffect(() => {
    setDojang(data6);
  }, [data6]);

  useEffect(() => {
    setUnion(data7);
  }, [data7]);

  useEffect(() => {
    setUnionRaider(data8);
    setUnionRaiderPreSet(data8?.union_occupied_stat);
  }, [data8]);

  useEffect(() => {
    setHyperStat(data9);
    switch (data9?.use_preset_no) {
      case "1":
        setHyperStatPreSet(data9?.hyper_stat_preset_1);
        break;
      case "2":
        setHyperStatPreSet(data9?.hyper_stat_preset_2);
        break;
      case "3":
        setHyperStatPreSet(data9?.hyper_stat_preset_3);
        break;
      default:
        setHyperStatPreSet(data9?.hyper_stat_preset_1);
        break;
    }
  }, [data9]);

  useEffect(() => {
    setSymbol(data10);
  }, [data10]);

  useEffect(() => {
    const settingData = async () => {
      const { searchText } = props.searchParams;
      const result = await getOcid({ character_name: searchText });
      setOcid(result.ocid); // 결과를 사용하여 ocid 설정
    };

    settingData();
  }, []);

  useEffect(() => {
    switch (preSet.item) {
      case "1":
        setItemPreSet(item?.item_equipment_preset_1);
        break;
      case "2":
        setItemPreSet(item?.item_equipment_preset_2);
        break;
      case "3":
        setItemPreSet(item?.item_equipment_preset_3);
        break;

      case "0":
      default:
        setItemPreSet(item?.item_equipment);
        break;
    }
  }, [preSet.item]);

  useEffect(() => {
    switch (preSet.hyper) {
      case "1":
        setHyperStatPreSet(hyperStat?.hyper_stat_preset_1);
        break;
      case "2":
        setHyperStatPreSet(hyperStat?.hyper_stat_preset_2);
        break;
      case "3":
        setHyperStatPreSet(hyperStat?.hyper_stat_preset_3);
        break;
      case "0":
      default:
        switch (hyperStat?.use_preset_no) {
          case "1":
            setHyperStatPreSet(hyperStat?.hyper_stat_preset_1);
            break;
          case "2":
            setHyperStatPreSet(hyperStat?.hyper_stat_preset_2);
            break;
          case "3":
            setHyperStatPreSet(hyperStat?.hyper_stat_preset_3);
            break;
          default:
            setHyperStatPreSet(hyperStat?.hyper_stat_preset_1);
            break;
        }
        break;
    }
  }, [preSet.hyper]);

  useEffect(() => {
    switch (preSet.ability) {
      case "1":
        setAbilityPreSet(ability?.ability_preset_1.ability_info);
        break;
      case "2":
        setAbilityPreSet(ability?.ability_preset_2.ability_info);
        break;
      case "3":
        setAbilityPreSet(ability?.ability_preset_3.ability_info);
        break;

      case "0":
      default:
        setAbilityPreSet(ability?.ability_info);
        break;
    }
  }, [preSet.ability]);

  useEffect(() => {
    switch (preSet.union) {
      case "1":
        setUnionRaiderPreSet(unionRaider?.union_raider_preset_1.union_occupied_stat);
        break;
      case "2":
        setUnionRaiderPreSet(unionRaider?.union_raider_preset_2.union_occupied_stat);
        break;
      case "3":
        setUnionRaiderPreSet(unionRaider?.union_raider_preset_3.union_occupied_stat);
        break;
      case "0":
      default:
        setUnionRaiderPreSet(unionRaider?.union_occupied_stat);
        break;
    }
  }, [preSet.union]);

  useEffect(() => {
    switch (preSet.link) {
      case "1":
        setLinkSkillPreSet(linkSkill?.character_link_skill_preset_1);
        break;
      case "2":
        setLinkSkillPreSet(linkSkill?.character_link_skill_preset_2);
        break;
      case "3":
        setLinkSkillPreSet(linkSkill?.character_link_skill_preset_3);
        break;
      case "0":
      default:
        setLinkSkillPreSet(linkSkill?.character_link_skill);
        break;
    }
  }, [preSet.link]);

  return (
    <div className="flex-1 bg-body-green">
      <div className="flex justify-between lg:justify-center">
        <div className="mx-auto my-[25px] max-w-[100vw] mo:my-[10px] mo:max-w-full">
          <div className="flex gap-[20px] mo:flex-col">
            <LeftInfo
              characterBasic={characterBasic}
              hexa={hexa}
              title={item?.title}
              date={props.searchParams.date}
              dojang={dojang}
              union={union}
              symbol={symbol}
              hexaSum={hexaSum}
              hyperStatPreSet={hyperStatPreSet}
              abilityPreSet={abilityPreSet}
              unionRaiderPreSet={unionRaiderPreSet}
              linkSkillPreSet={linkSkillPreSet}
            />
            <RightInfo itemPreSet={itemPreSet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
