import {
  getCharactorAbility,
  getCharactorBasic,
  getCharactorDojang,
  getCharactorHexaMatrix,
  getCharactorHyperStat,
  getCharactorLinkSkill,
  getCharactorSetEffect,
  getCharactorSymbolEquipment,
  getItemEquipment,
  getOcid,
  getUserUnion,
  getUserUnionRaider,
} from "@/api/MapleApi";
import SsrInfo from "@/components/info/info";

const getData = async (date: string, searchText: string) => {
  const result = await getOcid({ character_name: searchText });
  console.log("result", result.ocid);
  const ocid = result.ocid;

  // 병렬 호출로 데이터 가져오기
  const [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11] = await Promise.all([
    getItemEquipment({ ocid, date }),
    getCharactorBasic({ ocid, date }),
    getCharactorHexaMatrix({ ocid, date }),
    getCharactorLinkSkill({ ocid, date }),
    getCharactorAbility({ ocid, date }),
    getCharactorDojang({ ocid, date }),
    getUserUnion({ ocid, date }),
    getUserUnionRaider({ ocid, date }),
    getCharactorHyperStat({ ocid, date }),
    getCharactorSymbolEquipment({ ocid, date }),
    getCharactorSetEffect({ ocid, date }),
  ]);
  return {
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
    data11,
  };
};

const ssr2 = async (props: any) => {
  const { date, searchText } = props.searchParams;
  // const searchText = (context.query?.searchText as string) ?? "";
  // const date = (context.query?.date as string) ?? "";
  const { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11 } = await getData(date, searchText);
  return (
    <SsrInfo
      data1={data1}
      data2={data2}
      data3={data3}
      data4={data4}
      data5={data5}
      data6={data6}
      data7={data7}
      data8={data8}
      data9={data9}
      data10={data10}
      data11={data11}
    />
  );
};

export default ssr2;
