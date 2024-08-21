function lengthOfLongestSubstring2(s: string): number {
  let result = 0;
  let left = 0;
  const objectChecker = {};

  for (let i = 0; i < s.length; i++) {
    if (objectChecker[s[i]] !== undefined && objectChecker[s[i]] >= left) {
      left = objectChecker[s[i]] + 1;
    }

    objectChecker[s[i]] = i;

    if (result < i - left + 1) {
      result = i - left + 1;
    }
  }
  return result;
}
