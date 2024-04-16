export interface SetEffectDetail {
  set_count: number;
  set_option: string;
}

export interface SetEffect {
  set_name: string;
  total_set_count: number;
  set_effect_info: SetEffectDetail[];
}
