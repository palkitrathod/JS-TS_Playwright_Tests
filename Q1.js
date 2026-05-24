//Normalize Js Basics Label
//Derived from JavaScript chapters 1 to 3: JavaScript basics, engine setup, comments, identifiers, literals, null, undefined, and equality.

//Create a reusable label normalizer for JavaScript QA utilities.

//Rules:
//- Trim leading and trailing spaces.
//- Convert text to lowercase.
//- Replace non-alphanumeric groups with a single hyphen.
//- Prefix the result with "js-basic-"


function normalizeJsBasicsLabel(label)
{
  let result = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return result ? `js-basic-${result}` : 'js-basic';
}