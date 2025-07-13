export class EntityNotFoundError extends Error {
  constructor(entityName: string, identifier?: string | number) {
    const message = identifier
      ? `${entityName} with identifier ${identifier} not found`
      : `${entityName} not found`;
    super(message);
    this.name = 'EntityNotFoundError';
  }
}
