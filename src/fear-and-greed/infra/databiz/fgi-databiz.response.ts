export interface IFearAndGreedDatabizResponse {
  fear_and_greed: IDatabizScore;
  market_momentum_sp500: IDatabizScore;
  stock_price_strength: IDatabizScore;
  stock_price_breadth: IDatabizScore;
  put_call_options: IDatabizScore;
  market_volatility_vix: IDatabizScore;
  junk_bond_demand: IDatabizScore;
  safe_haven_demand: IDatabizScore;
}

interface IDatabizScore {
  score: number;
  timestamp: number;
  rating: string;
}
