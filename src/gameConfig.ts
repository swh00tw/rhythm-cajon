export const gameConfig = {
  showUpDuration: 2000, // how many second the dot will show up before the hitting timing
  tolerateDuration: 200, // how many second the dot will tolerate before or after the hitting timing
  gameOverDuration: 4000, // how many second the game will show the game over screen
} as const;

export type Beat = {
  type: "A" | "B";
  ts: number;
  hit?: boolean;
};

export const beatMap: Record<number, Beat> = {
  2000: {
    type: "A",
    ts: 2000,
  },
  3000: {
    type: "B",
    ts: 3000,
  },
  4000: {
    type: "A",
    ts: 4000,
  },
};

export const beats = Object.values(beatMap);
