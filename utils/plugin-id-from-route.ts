// noinspection JSUnusedGlobalSymbols

export default function (route: string) {
  // Path is like "/plugins/${id}", we need to get the id.
  return route.split("/")[2];
}
