interface SymbolDetail {
  symbol_name: string;
  symbol_icon: string;
  symbol_description: string;
  symbol_force: string;
  symbol_level: number;
  symbol_str: string;
  symbol_dex: string;
  symbol_int: string;
  symbol_luk: string;
  symbol_hp: string;
  symbol_growth_count: number;
  symbol_require_growth_count: number;
}

export interface Symbol {
  symbol: SymbolDetail[];
}
