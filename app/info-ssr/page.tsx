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
import ErrorPage from "@/components/info/error";
import SsrInfo from "@/components/info/info";

const getData = async (date: string, searchText: string, key: string) => {
  try {
  } catch (error) {}
  const result = await getOcid({ character_name: searchText, key: key });
  const ocid = result.ocid;

  // 병렬 호출로 데이터 가져오기
  const [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11] = await Promise.all([
    getItemEquipment({ ocid, date, key }),
    getCharactorBasic({ ocid, date, key }),
    getCharactorHexaMatrix({ ocid, date, key }),
    getCharactorLinkSkill({ ocid, date, key }),
    getCharactorAbility({ ocid, date, key }),
    getCharactorDojang({ ocid, date, key }),
    getUserUnion({ ocid, date, key }),
    getUserUnionRaider({ ocid, date, key }),
    getCharactorHyperStat({ ocid, date, key }),
    getCharactorSymbolEquipment({ ocid, date, key }),
    getCharactorSetEffect({ ocid, date, key }),
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
  const { date, searchText, key } = props.searchParams;
  try {
    const { data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11 } = await getData(date, searchText, key);
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
  } catch (error) {
    return <ErrorPage />;
  }
};

export default ssr2;
