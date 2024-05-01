import axios, { AxiosRequestConfig } from "axios";

interface GetOcidParams {
  character_name: string;
  key: string;
}

interface APIParams {
  ocid: string;
  date: string;
  key: string;
}

export const getOcid = async (params: GetOcidParams) => {
  const { character_name, key } = params;
  const config: AxiosRequestConfig = {
    params: { character_name }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/id", config);
  return data;
};

export const getItemEquipment = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/item-equipment", config);
  return data;
};

export const getCharactorBasic = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/basic", config);
  return data;
};

export const getCharactorPopularity = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/popularity", config);
  return data;
};

export const getCharactorStat = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/stat", config);
  return data;
};

export const getCharactorHyperStat = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/hyper-stat", config);
  return data;
};

export const getCharactorPropensity = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/propensity", config);
  return data;
};

export const getCharactorAbility = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/ability", config);
  return data;
};

export const getCharactorSymbolEquipment = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/symbol-equipment", config);
  return data;
};

export const getCharactorSetEffect = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/set-effect", config);
  return data;
};

export const getCharactorHexaMatrix = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/hexamatrix", config);
  return data;
};

export const getCharactorHexaMatrixStat = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/hexamatrix-stat", config);
  return data;
};

export const getCharactorDojang = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/dojang", config);
  return data;
};

export const getCharactorLinkSkill = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/character/link-skill", config);
  return data;
};

export const getUserUnion = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/user/union", config);
  return data;
};

export const getUserUnionRaider = async (params: APIParams) => {
  const { ocid, date, key } = params;
  const config: AxiosRequestConfig = {
    params: { ocid, date }, // params 객체를 설정
    headers: { "x-nxopen-api-key": key }, // 헤더 정보 설정
  };
  const { data } = await axios.get("https://open.api.nexon.com/maplestory/v1/user/union-raider", config);
  return data;
};
