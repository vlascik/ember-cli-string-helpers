import { helper } from '@ember/component/helper';
import { isHTMLSafe } from '@ember/template';

export function truncate([string, characterLimit = 140, useEllipsis = true]: [
  string,
  number,
  boolean,
]) {
  const limit = useEllipsis ? characterLimit - 3 : characterLimit;

  if (isHTMLSafe(string)) {
    // @ts-expect-error: string is a SafeString
    string = string.string;
  }

  if (string && string.length > limit) {
    return useEllipsis
      ? `${string.substring(0, limit)}...`
      : string.substring(0, limit);
  } else {
    return string;
  }
}

export default helper(truncate);
