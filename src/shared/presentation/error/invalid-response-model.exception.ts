export class InvalidResponseException extends Error {
  readonly code: string;

  constructor(message?: string) {
    super(message ?? '응답 객체를 생성할 수 없습니다.');
    this.name = 'InvalidResponseException';
  }
}
