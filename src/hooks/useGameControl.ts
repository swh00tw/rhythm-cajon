import React, { useEffect, useState } from "react";
import { binarySearch } from "../utils/binarySearch";
import { gameConfig, beats } from "../gameConfig";

export const useGameControl = ({
  gameStartTimeRef,
  sortedTs,
}: {
  gameStartTimeRef: React.MutableRefObject<number>;
  sortedTs: number[];
}) => {
  const [pressed, setPressed] = useState(false);
  const [countHit, setCountHit] = useState(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") {
      setPressed(true);
      const currentTime = new Date().getTime();
      const elapsed = currentTime - gameStartTimeRef.current;

      const closestIndex = binarySearch(sortedTs, elapsed, (mid, target) => {
        return Math.abs(target - sortedTs[mid]) <= gameConfig.tolerateDuration;
      });
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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [countHit]);

  return { pressed, countHit };
};
