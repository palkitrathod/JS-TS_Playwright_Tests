/*Classify Js Basics Readiness Score
Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

Create a QA-friendly score classifier for practice readiness.

Rules:
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT. */


function classifyJsBasicsScore(score) {

  if (score >= 95) {
    return "EXCELLENT"
  }
  else if (score >= 75 && score <= 89) {
    return "GOOD";
  }
  else if (score >= 50 && score <= 74) {
    return "NEEDS_PRACTICE";
  }
  else {
    return "REVISIT";
  }
}
