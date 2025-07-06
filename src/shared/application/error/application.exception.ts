export class ApplicationException extends Error {
  readonly code: string;

  constructor(code: string, message?: string) {
    super(message ?? code);
    this.code = code;
    this.name = 'ApplicationException';
  }
}
