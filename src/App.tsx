import { cn } from "./utils/cn";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gameConfig, beats, beatMap } from "./gameConfig";

function App() {
  const [pressed, setPressed] = useState(false);
  const [countHit, setCountHit] = useState(0);

  const sortedTs: number[] = Object.keys(beatMap)
    .map((k) => parseInt(k))
    .sort((a, b) => a - b);
  const gameStartTimeRef = useRef(new Date().getTime());

  const binarySearchClosest = (
    arr: number[],
    target: number
  ): number | null => {
    let start = 0;
    let end = arr.length - 1;
    let closest = null;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      const timeDiff = Math.abs(arr[mid] - target);

      if (timeDiff <= gameConfig.tolerateDuration) {
        closest = mid;
        break; // Found a beat within tolerance, exit loop
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return closest;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        setPressed(true);
        const currentTime = new Date().getTime();
        const elapsed = currentTime - gameStartTimeRef.current;

        const closestIndex = binarySearchClosest(sortedTs, elapsed);
        if (closestIndex !== null && !beats[closestIndex].hit) {
          setCountHit(countHit + 1);
          beats[closestIndex].hit = true;
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === " ") {
        setPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [countHit]);

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
