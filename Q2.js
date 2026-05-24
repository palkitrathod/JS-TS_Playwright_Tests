/*Validate Js Basics Identifier
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Write a validator for names used in helper functions, variables, or test data keys.

Rules:
- Value must be a non-empty string after trimming.
- It must start with a letter, underscore, or dollar sign.
- Remaining characters may include letters, digits, underscore, or dollar sign.
- Reject reserved words used in this chapter: let, const, var, class, function, return.*/


function isValidJsBasicsIdentifier(name) {

    // Remove spaces from start and end
    name = name.trim();

    // Check if string is empty after trimming
    if (name === "") {
      return false;
    }

    // Check if the name is a reserved JavaScript keyword
    if (name === "let" || name === "const" || name === "var" ||
      name === "class" || name === "function" || name === "return") {
      return false;
    }

    // Check valid identifier format:
    // First character must be a letter, _ or $
    // Remaining characters can be letters, numbers, _ or $
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) {
      return false;
    }

    // If all checks pass, identifier is valid
    return true;
  }
