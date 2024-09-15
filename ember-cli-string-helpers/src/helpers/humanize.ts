import { helper } from '@ember/component/helper';
import { isHTMLSafe } from '@ember/template';

const regex = /_+|-+/g;
const replacement = ' ';

// The substituted value will be contained in the result variable
export function humanize([string]: [string]) {
  if (isHTMLSafe(string)) {
    // @ts-expect-error: string is a SafeString
    string = string.string;
  }

  if (string === undefined || string === null) {
    return '';
  }

  const result = string.toLowerCase().replace(regex, replacement);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export default helper(humanize);
