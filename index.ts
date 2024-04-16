import { Exception } from "./Exception";
import { AuthorisationError, NetworkError, PersistenceError } from "./Errors";

function thisThrowsAuthroisationError() {
  throw new AuthorisationError();
}

function thisThrowsNetworkError() {
  throw new Exception("Network", "Network error");
}

function isException(error: unknown) {
  return error instanceof Exception
}

function main(throwWhich: 1 | 2) {
  try {
    throwWhich === 1 && thisThrowsAuthroisationError();
  } catch (error) {
    if (error instanceof AuthorisationError) {
      console.log("Handling authorisation error: ", error.message);

      return;
    }
    if (error instanceof NetworkError) {
      console.log("Handling network error: ", error.message);

      return;
    }
    if (error instanceof PersistenceError) {
      console.log("Handling persistence error: ", error.message);

      return;
    }

    // Some other error so propagate so someone else can handle it
    throw error;
  }
  
  try {
    throwWhich === 2 && thisThrowsNetworkError();
  } catch (error) {
    if (!isException(error)) {
      // Some other error so propagate so someone else can handle it
      throw error;
    }

    switch (error.type) {
      case "Network":
        console.log("Handling network error: ", error.message);
        break;
      case "Authorisation":
        console.log("Handling authorisation error: ", error.message);
        break;
      case "Persistence":
        console.log("Handling persistence error: ", error.message);
        break;
    }
  }
}

main(2);
