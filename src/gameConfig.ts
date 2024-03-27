export const gameConfig = {
  showUpDuration: 2000, // how many second the dot will show up before the hitting timing
  tolerateDuration: 200, // how many second the dot will tolerate before or after the hitting timing
} as const;

export const beatMap: Record<
  number,
  {
    type: "A" | "B";
    ts: number;
    hit: boolean;
  }
> = {
  2000: {
    type: "A",
    ts: 2000,
    hit: false,
  },
  3000: {
    type: "B",
    ts: 3000,
    hit: false,
  },
  4000: {
    type: "A",
    ts: 4000,
    hit: false,
  },
};

export const beats = Object.values(beatMap);
