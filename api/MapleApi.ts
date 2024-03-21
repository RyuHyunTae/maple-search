import { API_KEY } from "@/util/APIKey";
import axios, { AxiosRequestConfig } from "axios";

interface GetOcidParams {
  character_name: string;
}

interface GetItemEquipmentParams {
  ocid: string;
  date: string;
}

export const getOcid = async (params: GetOcidParams) => {
  const { character_name } = params;
  const config: AxiosRequestConfig = {
    params: { character_name }, // params 객체를 설정
    headers: { "x-nxopen-api-key": API_KEY }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/id", config);
  return data;
};

export const getItemEquipment = async (params: GetItemEquipmentParams) => {
  const { ocid, date } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": API_KEY }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/item-equipment", config);
  return data;
};
