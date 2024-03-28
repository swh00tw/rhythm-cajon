import React, { useEffect, useState } from "react";
import { binarySearch } from "../utils/binarySearch";
import { gameConfig, beats } from "../gameConfig";

function getClosestIndex(sortedTs: number[], startTime: number) {
  const currentTime = new Date().getTime();
  const elapsed = currentTime - startTime;
  const closestIndex = binarySearch(sortedTs, elapsed, (mid, target) => {
    return Math.abs(target - sortedTs[mid]) <= gameConfig.tolerateDuration;
  });
  return closestIndex;
}

export const useGameControl = ({
  gameStartTimeRef,
  sortedTs,
}: {
  gameStartTimeRef: React.MutableRefObject<number>;
  sortedTs: number[];
}) => {
  const [pressed, setPressed] = useState(false);
  const [countHit, setCountHit] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const play = () => {
    setHasStarted(true);
  };

  const restart = () => {
    setHasEnded(false);
    setHasStarted(true);
    setCountHit(0);
  };

  const handleGameOver = () => {
    setHasEnded(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") {
      setPressed(true);
      const closestIndex = getClosestIndex(sortedTs, gameStartTimeRef.current);
      if (
        closestIndex !== null &&
        !beats[closestIndex]?.hit &&
        beats[closestIndex].type === "A"
      ) {
        setCountHit(countHit + 1);
        beats[closestIndex].hit = true;
      }
    } else if (event.key === "o") {
      setPressed(true);
      const closestIndex = getClosestIndex(sortedTs, gameStartTimeRef.current);
      if (
        closestIndex !== null &&
        !beats[closestIndex]?.hit &&
        beats[closestIndex].type === "B"
      ) {
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

  return {
    pressed,
    countHit,
    play,
    restart,
    hasStarted,
    hasEnded,
    handleGameOver,
  };
};
