import { cn } from "./utils/cn";
import { motion } from "framer-motion";
import { useRef } from "react";
import { gameConfig, beatMap } from "./gameConfig";
import { useGameControl } from "./hooks/useGameControl";
import { useMusic } from "./hooks/useMusic";

function App() {
  const gameStartTimeRef = useRef(new Date().getTime());
  const { sortedTs, beats } = useMusic();
  const {
    pressed,
    countHit,
    hasStarted,
    hasEnded,
    play,
    restart,
    handleGameOver,
  } = useGameControl({
    gameStartTimeRef,
    sortedTs,
    beats,
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
      {!hasStarted && !hasEnded ? (
        <div>
          <button onClick={play}>play</button>
        </div>
      ) : hasEnded ? (
        <div>
          <button onClick={restart}>play again?</button>
        </div>
      ) : (
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
                onAnimationComplete={() => {
                  if (idx === Object.keys(beatMap).length - 1) {
                    setTimeout(() => {
                      handleGameOver();
                    }, gameConfig.gameOverDuration);
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
      )}
    </div>
  );
}

export default App;
