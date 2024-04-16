type ErrorType = "Authorisation" | "Network" | "Persistence";

class Exception extends Error {
  type: ErrorType;
  constructor(code: ErrorType, message: string) {
    super(message);
    this.type = code;
  }
}

export { Exception };
