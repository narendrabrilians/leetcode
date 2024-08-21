function lengthOfLongestSubstring1(s: string): number {
  if (s.length === 1) {
    return 1;
  }
  let longestLength = 0;
  let currentLength = 0;
  let objectChecker: { [index: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    if (objectChecker[s[i]] === undefined) {
      currentLength += 1;
      objectChecker[s[i]] = i;
      if (longestLength < currentLength) {
        longestLength = currentLength;
      }
    } else {
      i = objectChecker[s[i]] + 1;
      objectChecker = {};
      objectChecker[s[i]] = i;
      currentLength = 1;
    }
  }
  return longestLength;
}
