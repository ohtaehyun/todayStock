export class Ticker {
  private readonly _value: string;
  constructor(ticker: string) {
    if (!/^[A-Z]{1,6}$/.test(ticker)) {
      throw new Error(`잘못된 티커 규칙입니다. 티커: ${ticker}`);
    }
    this._value = ticker.toUpperCase();
  }

  get value(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
