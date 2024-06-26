export interface HyperStatDetail {
  stat_type: string;
  stat_point: number | null;
  stat_level: number | null;
  stat_increase: string | null;
}

interface HyperStatPreset {
  hyper_stat: HyperStatDetail[];
  remain_point: number;
}

export interface HyperStat {
  date: string;
  character_class: string;
  use_preset_no: string;
  use_available_hyper_stat: number;
  hyper_stat_preset_1: HyperStatDetail[];
  hyper_stat_preset_2: HyperStatDetail[];
  hyper_stat_preset_3: HyperStatDetail[];
  hyper_stat_preset_1_remain_point: number;
  hyper_stat_preset_2_remain_point: number;
  hyper_stat_preset_3_remain_point: number;
}
