type rule = (value: string) => boolean | string;

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
  /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i,
  "不是有效的URL格式",
);

const phoneRule = baseRule(
  /^1(3[0-9]|4[57]|5[0-35-9]|7[0678]|8[0-9])\d{8}$/,
  "不是有效的电话号码格式",
);

const emailRule = baseRule(
  /^[A-Za-z0-9]+([-._][A-Za-z0-9]+)*@[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[A-Za-z]{2,6}|[A-Za-z]{2,4}\.[A-Za-z]{2,3})$/,
  "不是有效地电子邮箱地址",
);

export { urlRule, phoneRule, emailRule };
