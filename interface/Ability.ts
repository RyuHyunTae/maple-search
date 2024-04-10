export interface Ability {
  ability_no: string;
  ability_grade: string;
  ability_value: string;
}

interface AbilityPreset {
  ability_preset_grade: string;
  ability_info: Ability[];
}

export interface AbilityInfo {
  date: string;
  ability_grade: string;
  ability_info: Ability[];
  remain_fame: number;
  preset_no: number;
  ability_preset_1: AbilityPreset;
  ability_preset_2: AbilityPreset;
  ability_preset_3: AbilityPreset;
}
