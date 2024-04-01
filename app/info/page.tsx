"use client";

import {
  getCharactorAbility,
  getCharactorBasic,
  getCharactorDojang,
  getCharactorHexaMatrix,
  getCharactorHyperStat,
  getCharactorLinkSkill,
  getCharactorStat,
  getItemEquipment,
  getOcid,
  getUserUnion,
  getUserUnionRaider,
} from "@/api/MapleApi";
import LeftInfo from "@/components/info/LeftInfo";
import RightInfo from "@/components/info/RightInfo";
import { HexaMatrix } from "@/interface/Hexamatrix";
import { ItemEquipment } from "@/interface/ItemEquipment";
import { CharacterBasic } from "@/interface/character";
import { itemDetailPopupState, ocidState } from "@/recoil/states";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { LinkSkill } from "@/interface/LinkSkill";

interface InfoProps {
  params: {};
  searchParams: { searchText: string; date: string };
}

const Info = (props: InfoProps) => {
  const [is_popup, setIs_popup] = useState(false);
  const [ocid, setOcid] = useRecoilState(ocidState);
  const [itemDetailPopup, setItemDetailPopup] = useRecoilState<boolean>(itemDetailPopupState);

  const [item, setItem] = useState<ItemEquipment>();
  const [hexa, setHexa] = useState<HexaMatrix>();
  const [characterBasic, setCharacterBasic] = useState<CharacterBasic>();
  const [linkSkill, setLinkSkill] = useState<LinkSkill>();

  const {
    data: data1,
    isLoading: isLoading1,
    isError: isError1,
  } = useQuery(["data1", { ocid: ocid, date: props.searchParams.date }], () => getItemEquipment({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
  } = useQuery(["data2", { ocid: ocid, date: props.searchParams.date }], () => getCharactorBasic({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

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
  } = useQuery(["data4", { ocid: ocid, date: props.searchParams.date }], () => getCharactorLinkSkill({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

  const {
    data: data5,
    isLoading: isLoading5,
    isError: isError5,
  } = useQuery(["data5", { ocid: ocid, date: props.searchParams.date }], () => getCharactorAbility({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

  const {
    data: data6,
    isLoading: isLoading6,
    isError: isError6,
  } = useQuery(["data6", { ocid: ocid, date: props.searchParams.date }], () => getCharactorDojang({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

  const {
    data: data7,
    isLoading: isLoading7,
    isError: isError7,
  } = useQuery(["data7", { ocid: ocid, date: props.searchParams.date }], () => getUserUnion({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

  const {
    data: data8,
    isLoading: isLoading8,
    isError: isError8,
  } = useQuery(["data8", { ocid: ocid, date: props.searchParams.date }], () => getUserUnionRaider({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

  const {
    data: data9,
    isLoading: isLoading9,
    isError: isError9,
  } = useQuery(["data9", { ocid: ocid, date: props.searchParams.date }], () => getCharactorHyperStat({ ocid: ocid, date: props.searchParams.date }), {
    enabled: !!ocid, // 이 부분은 중요합니다. ocid가 변경될 때만 useQuery가 실행됩니다.
  });

  useEffect(() => {}, [data7]);

  useEffect(() => {}, [data8]);

  useEffect(() => {
    setItem(data1);
  }, [data1]);

  useEffect(() => {
    setCharacterBasic(data2);
  }, [data2]);

  useEffect(() => {
    setHexa(data3);
  }, [data3]);

  useEffect(() => {
    setLinkSkill(data4);
  }, [data4]);

  useEffect(() => {}, [ocid]);

  useEffect(() => {
    // setItem(tempItemData);
    const settingData = async () => {
      const { searchText } = props.searchParams;
      const result = await getOcid({ character_name: searchText });
      console.log(result);
      setOcid(result.ocid); // 결과를 사용하여 ocid 설정
    };

    settingData();
  }, []);
  return (
    <div className="flex-1 bg-body-green">
      <div className="flex justify-between lg:justify-center">
        <div className="mx-auto my-[25px] max-w-[100vw] mo:my-[10px] mo:max-w-full">
          <div className="flex gap-[20px] mo:flex-col">
            <LeftInfo characterBasic={characterBasic} hexa={hexa} title={item?.title} linkSkill={linkSkill} date={props.searchParams.date} />
            <RightInfo item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
