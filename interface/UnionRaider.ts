export interface UnionRaiderDetail {
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_inner_stat: UnionInnerStat[];
}

export interface UnionRaider {
  union_raider_stat: string[];
  union_occupied_stat: string[];
  union_inner_stat: UnionInnerStat[];
  union_raider_preset_1: UnionRaiderDetail;
  union_raider_preset_2: UnionRaiderDetail;
  union_raider_preset_3: UnionRaiderDetail;
  union_raider_preset_4: UnionRaiderDetail;
  union_raider_preset_5: UnionRaiderDetail;
}

interface UnionInnerStat {
  stat_field_id: string;
  stat_field_effect: string;
}
