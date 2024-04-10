export interface LinkSkillDetail {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}

interface OwnedLinkSkillDetail {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}

export interface LinkSkill {
  date: string;
  character_class: string;
  character_link_skill: LinkSkillDetail[];
  character_link_skill_preset_1: LinkSkillDetail[];
  character_link_skill_preset_2: LinkSkillDetail[];
  character_link_skill_preset_3: LinkSkillDetail[];
  character_owned_link_skill_preset_1: OwnedLinkSkillDetail;
  character_owned_link_skill_preset_2: OwnedLinkSkillDetail;
  character_owned_link_skill_preset_3: OwnedLinkSkillDetail;
}
