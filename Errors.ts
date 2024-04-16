class AuthorisationError extends Error {
  constructor() {
    super("Authorisation Error");
    this.name = "AuthorisationError";
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network Error");
    this.name = "NetworkError";
  }
}

class PersistenceError extends Error {
  constructor() {
    super("Persistence Error");
    this.name = "PersistenceError";
  }
}

export { AuthorisationError, NetworkError, PersistenceError };