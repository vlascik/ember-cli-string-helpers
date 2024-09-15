import { isHTMLSafe } from '@ember/template';
import type { SafeString } from '@ember/template';

export default function (
  stringFunction: (input: string) => string | SafeString,
): (args: [string | SafeString]) => string | SafeString {
  return function ([input]: [string | SafeString]) {
    if (isHTMLSafe(input)) {
      // @ts-expect-error: SafeString is not assignable to string
      input = input.string;
    }

    input = input || '';
    return stringFunction(input as string);
  };
}
