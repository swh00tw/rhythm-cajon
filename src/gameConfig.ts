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

export const yellowBeats: Beat[] = [
  {
    type: "A",
    ts: 13368,
  },
  {
    type: "B",
    ts: 14074,
  },
  {
    type: "A",
    ts: 14682,
  },
  {
    type: "A",
    ts: 15041,
  },
  {
    type: "B",
    ts: 15491,
  },
  {
    type: "A",
    ts: 16156,
  },
  {
    type: "B",
    ts: 16853,
  },
  {
    type: "A",
    ts: 17529,
  },
  {
    type: "A",
    ts: 17888,
  },
  {
    type: "B",
    ts: 18248,
  },
  {
    type: "A",
    ts: 18923,
  },
  {
    type: "B",
    ts: 19643,
  },
  {
    type: "A",
    ts: 20331,
  },
  {
    type: "A",
    ts: 20667,
  },
  {
    type: "B",
    ts: 21026,
  },
  {
    type: "A",
    ts: 21701,
  },
  {
    type: "B",
    ts: 22354,
  },
  {
    type: "A",
    ts: 23053,
  },
  {
    type: "A",
    ts: 23448,
  },
  {
    type: "B",
    ts: 23761,
  },
  {
    type: "A",
    ts: 24436,
  },
  {
    type: "B",
    ts: 25145,
  },
  {
    type: "A",
    ts: 25876,
  },
  {
    type: "A",
    ts: 26213,
  },
  {
    type: "B",
    ts: 26551,
  },
  {
    type: "A",
    ts: 27205,
  },
  {
    type: "B",
    ts: 27856,
  },
  {
    type: "A",
    ts: 28577,
  },
  {
    type: "A",
    ts: 28902,
  },
  {
    type: "B",
    ts: 29274,
  },
  {
    type: "A",
    ts: 30027,
  },
  {
    type: "B",
    ts: 30658,
  },
  {
    type: "A",
    ts: 31389,
  },
  {
    type: "A",
    ts: 31704,
  },
  {
    type: "B",
    ts: 32043,
  },
  {
    type: "A",
    ts: 32763,
  },
  {
    type: "B",
    ts: 33425,
  },
  {
    type: "A",
    ts: 34158,
  },
  {
    type: "A",
    ts: 34473,
  },
  {
    type: "B",
    ts: 34855,
  },
  {
    type: "A",
    ts: 35609,
  },
  {
    type: "B",
    ts: 36228,
  },
  {
    type: "A",
    ts: 36946,
  },
  {
    type: "A",
    ts: 37238,
  },
  {
    type: "B",
    ts: 37577,
  },
  {
    type: "A",
    ts: 38344,
  },
  {
    type: "B",
    ts: 38973,
  },
  {
    type: "A",
    ts: 39737,
  },
  {
    type: "A",
    ts: 40051,
  },
  {
    type: "B",
    ts: 40425,
  },
  {
    type: "A",
    ts: 41155,
  },
  {
    type: "B",
    ts: 41786,
  },
  {
    type: "A",
    ts: 42405,
  },
  {
    type: "A",
    ts: 42776,
  },
  {
    type: "B",
    ts: 43100,
  },
  {
    type: "A",
    ts: 43832,
  },
  {
    type: "B",
    ts: 44442,
  },
  {
    type: "A",
    ts: 45263,
  },
  {
    type: "A",
    ts: 45508,
  },
  {
    type: "B",
    ts: 45879,
  },
  {
    type: "A",
    ts: 46500,
  },
  {
    type: "B",
    ts: 47219,
  },
  {
    type: "A",
    ts: 47963,
  },
  {
    type: "A",
    ts: 48357,
  },
  {
    type: "B",
    ts: 48680,
  },
  {
    type: "A",
    ts: 49391,
  },
  {
    type: "B",
    ts: 50021,
  },
  {
    type: "A",
    ts: 50741,
  },
  {
    type: "A",
    ts: 51090,
  },
  {
    type: "B",
    ts: 51426,
  },
  {
    type: "A",
    ts: 52160,
  },
  {
    type: "B",
    ts: 52777,
  },
  {
    type: "A",
    ts: 53430,
  },
  {
    type: "A",
    ts: 53767,
  },
  {
    type: "B",
    ts: 54115,
  },
  {
    type: "A",
    ts: 54883,
  },
  {
    type: "B",
    ts: 55602,
  },
  {
    type: "A",
    ts: 56265,
  },
  {
    type: "A",
    ts: 56625,
  },
  {
    type: "B",
    ts: 56996,
  },
  {
    type: "A",
    ts: 57649,
  },
  {
    type: "B",
    ts: 58312,
  },
  {
    type: "A",
    ts: 59044,
  },
  {
    type: "A",
    ts: 59370,
  },
  {
    type: "B",
    ts: 59730,
  },
  {
    type: "A",
    ts: 60530,
  },
  {
    type: "B",
    ts: 61113,
  },
  {
    type: "A",
    ts: 61868,
  },
  {
    type: "A",
    ts: 62136,
  },
  {
    type: "B",
    ts: 62530,
  },
  {
    type: "A",
    ts: 63173,
  },
  {
    type: "B",
    ts: 63794,
  },
  {
    type: "A",
    ts: 64535,
  },
  {
    type: "A",
    ts: 64893,
  },
  {
    type: "B",
    ts: 65242,
  },
  {
    type: "A",
    ts: 65965,
  },
  {
    type: "B",
    ts: 66616,
  },
  {
    type: "A",
    ts: 67370,
  },
  {
    type: "A",
    ts: 67706,
  },
  {
    type: "B",
    ts: 68068,
  },
  {
    type: "A",
    ts: 68641,
  },
  {
    type: "B",
    ts: 69385,
  },
  {
    type: "A",
    ts: 70115,
  },
  {
    type: "A",
    ts: 70464,
  },
  {
    type: "B",
    ts: 70801,
  },
  {
    type: "A",
    ts: 71467,
  },
  {
    type: "B",
    ts: 72185,
  },
  {
    type: "A",
    ts: 72827,
  },
  {
    type: "A",
    ts: 73220,
  },
  {
    type: "B",
    ts: 73580,
  },
  {
    type: "A",
    ts: 74280,
  },
  {
    type: "B",
    ts: 74976,
  },
  {
    type: "A",
    ts: 75662,
  },
  {
    type: "A",
    ts: 75987,
  },
  {
    type: "B",
    ts: 76313,
  },
  {
    type: "A",
    ts: 77035,
  },
  {
    type: "B",
    ts: 77608,
  },
  {
    type: "A",
    ts: 78486,
  },
  {
    type: "A",
    ts: 78799,
  },
  {
    type: "B",
    ts: 79172,
  },
  {
    type: "A",
    ts: 79780,
  },
  {
    type: "B",
    ts: 80411,
  },
  {
    type: "A",
    ts: 81186,
  },
  {
    type: "A",
    ts: 81500,
  },
  {
    type: "B",
    ts: 81916,
  },
  {
    type: "A",
    ts: 82660,
  },
  {
    type: "B",
    ts: 83189,
  },
  {
    type: "A",
    ts: 83944,
  },
  {
    type: "A",
    ts: 84235,
  },
  {
    type: "B",
    ts: 84661,
  },
  {
    type: "A",
    ts: 85271,
  },
  {
    type: "B",
    ts: 86012,
  },
  {
    type: "A",
    ts: 86688,
  },
  {
    type: "A",
    ts: 87047,
  },
  {
    type: "B",
    ts: 87408,
  },
  {
    type: "A",
    ts: 88082,
  },
  {
    type: "A",
    ts: 88375,
  },
  {
    type: "B",
    ts: 88769,
  },
  {
    type: "A",
    ts: 89073,
  },
  {
    type: "A",
    ts: 89476,
  },
  {
    type: "A",
    ts: 89803,
  },
  {
    type: "B",
    ts: 90188,
  },
  {
    type: "A",
    ts: 90963,
  },
  {
    type: "B",
    ts: 91593,
  },
  {
    type: "A",
    ts: 92347,
  },
  {
    type: "A",
    ts: 92627,
  },
  {
    type: "B",
    ts: 92988,
  },
  {
    type: "A",
    ts: 93764,
  },
  {
    type: "B",
    ts: 94418,
  },
  {
    type: "A",
    ts: 95093,
  },
  {
    type: "A",
    ts: 95385,
  },
  {
    type: "B",
    ts: 95688,
  },
  {
    type: "A",
    ts: 96352,
  },
  {
    type: "B",
    ts: 97039,
  },
  {
    type: "A",
    ts: 97871,
  },
  {
    type: "A",
    ts: 98173,
  },
  {
    type: "B",
    ts: 98534,
  },
  {
    type: "A",
    ts: 99244,
  },
  {
    type: "B",
    ts: 99929,
  },
  {
    type: "A",
    ts: 100650,
  },
  {
    type: "A",
    ts: 100952,
  },
  {
    type: "B",
    ts: 101200,
  },
  {
    type: "A",
    ts: 101944,
  },
  {
    type: "B",
    ts: 102630,
  },
  {
    type: "A",
    ts: 103419,
  },
  {
    type: "A",
    ts: 103732,
  },
  {
    type: "B",
    ts: 104046,
  },
  {
    type: "A",
    ts: 104714,
  },
  {
    type: "B",
    ts: 105411,
  },
  {
    type: "A",
    ts: 106096,
  },
  {
    type: "A",
    ts: 106398,
  },
  {
    type: "B",
    ts: 106781,
  },
  {
    type: "A",
    ts: 107412,
  },
];

const genBeatMap = (beats: Beat[]) => {
  return beats.reduce((acc, beat) => {
    acc[beat.ts] = beat;
    return acc;
  }, {} as Record<number, Beat>);
};

export const yellowBeatMap = genBeatMap(yellowBeats);
