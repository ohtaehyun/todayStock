export class Ticker {
  private readonly _value: string;
  constructor(ticker: string) {
    if (!/^[A-Z]{1,6}$/.test(ticker)) {
      throw new Error(`Invalid ticker format: ${ticker}`);
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
