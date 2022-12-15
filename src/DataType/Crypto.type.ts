export type CryptoType = {
  Asset?: AssetType;
  market_data?: MarketDataType;
};

export type AssetType = {
  id?: string;
  serial_id?: number;
  symbol?: string;
  name?: string;
  slug?: string;
  contract_addresses?: string;
  _internal_temp_agora_id?: string;
};

export type MarketDataType = {
  price_usd: number;
  price_btc: number;
  price_eth: number;
  volume_last_24_hours: number;
  real_volume_last_24_hours: number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_1_hour?: number;
  percent_change_btc_last_1_hour?: number;
  percent_change_eth_last_1_hour?: number;
  percent_change_usd_last_24_hours?: number;
  percent_change_btc_last_24_hours?: number;
  percent_change_eth_last_24_hours?: number;
  ohlcv_last_1_hour?: number;
  ohlcv_last_24_hour?: number;
  last_trade_at?: string;
};
