import { beatMap, beats } from "../gameConfig";

export function useMusic() {
  const sortedTs: number[] = Object.keys(beatMap)
    .map((k) => parseInt(k))
    .sort((a, b) => a - b);

  return {
    sortedTs,
    beats,
  };
}
