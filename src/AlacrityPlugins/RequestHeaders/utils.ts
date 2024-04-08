type rule = (value: string) => boolean | string;

// TODO 这里改成Composable
function baseRule(reg: RegExp, errMsg: string): rule {
  return (value: string): boolean | string => {
    // Empty strings are accepted.
    if (!value) {
      return true;
    }
    if (!reg.test(value)) {
      return errMsg;
    }
    return true;
  };
}

const urlRule = baseRule(
  /^(?:(http|https):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i,
  "不是有效的URL格式",
);

/* eslint-disable */
export { urlRule };
