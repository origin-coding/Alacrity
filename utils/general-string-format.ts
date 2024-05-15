export default function (
  source: string,
  prefix: string = "",
  suffix: string = "",
) {
  return `${prefix}${source}${suffix}`;
}
