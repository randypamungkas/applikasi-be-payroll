export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "error";
    this.message = message;
  }
  toJSON() {
    return {
      status: this.name,
      message: JSON.parse(this.message),
      data: null,
    };
  }
}