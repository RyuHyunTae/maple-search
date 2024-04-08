interface HexaSkill {
  hexa_skill_id: string;
}

interface HexaCore {
  hexa_core_name: string;
  hexa_core_level: number;
  hexa_core_type: string;
  linked_skill: HexaSkill[];
}

export interface HexaMatrix {
  date: string;
  character_hexa_core_equipment: HexaCore[];
}

export interface HexaSum {
  base: number;
  piece: number;
}
