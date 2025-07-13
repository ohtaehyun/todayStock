import Decimal from 'decimal.js';

export class FearAndGreedScore {
  private readonly _value: Decimal;

  constructor(score: number | string | Decimal) {
    this._value = new Decimal(score).toDecimalPlaces(1);
  }

  get value(): Decimal {
    return new Decimal(this._value);
  }

  toNumber(): number {
    return this.toNumber();
  }
}
