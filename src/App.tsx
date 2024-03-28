import { cn } from "./utils/cn";
import { motion } from "framer-motion";
import { useRef } from "react";
import { gameConfig, beatMap } from "./gameConfig";
import { useGameControl } from "./hooks/useGameControl";

function App() {
  const sortedTs: number[] = Object.keys(beatMap)
    .map((k) => parseInt(k))
    .sort((a, b) => a - b);
  const gameStartTimeRef = useRef(new Date().getTime());

  const { pressed, countHit } = useGameControl({
    gameStartTimeRef,
    sortedTs,
  });

  return (
    <div
      className={cn(
        "bg-black",
        "w-full",
        "h-[100svh]",
        "text-white",
        "flex",
        "justify-center",
        "items-center"
      )}
    >
      <div
        className={cn(
          "w-[50%]",
          "h-fit",
          "bg-white",
          "bg-opacity-10",
          "rounded-md",
          "p-4",
          "backdrop-blur-md",
          "overflow-hidden"
        )}
      >
        count: {countHit}
        <div className="overflow-hidden w-full h-[30px] rounded-full relative">
          <div
            className={cn(
              "absolute left-0 top-0 w-[30px] aspect-square rounded-full",
              {
                "bg-slate-300": !pressed,
                "bg-red-300": pressed,
              }
            )}
          />

          {Object.values(beatMap).map((b, idx) => (
            <motion.div
              key={idx}
              animate={{
                x: [
                  "1000%",
                  "875%",
                  "750%",
                  "625%",
                  "500%",
                  "375%",
                  "250%",
                  "125%",
                  "0%",
                ],
                opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
              }}
              onAnimationStart={() => {
                if (idx === 0) {
                  gameStartTimeRef.current = new Date().getTime();
                }
              }}
              transition={{
                ease: "linear",
                duration: gameConfig.showUpDuration / 1000,
                delay: (b.ts - gameConfig.showUpDuration) / 1000,
              }}
              className={cn(
                `w-[30px]`,
                "aspect-square",
                "rounded-full",
                "bg-teal-300",
                "absolute",
                "left-0",
                "top-0"
              )}
            >
              {" "}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
