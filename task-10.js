export function formatString(string) {
    return string.length > 40 ? string.slice(0, 40) + '...' : string;
  }
  