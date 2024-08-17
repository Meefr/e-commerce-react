import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react/dist/player";

const ICON = require("..//../assets/Icons/wired-flat-146-trolley.json");

export default function PlayOnce() {
  const playerRef = useRef(ICON);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div className="cursor-pointer">
      <Player
        ref={playerRef}
        icon={ICON}
        size={40}
        onComplete={() => {
          setTimeout(() => {
             playerRef.current?.playFromBeginning();
          }, "1000"); 
        }}
      />
    </div>
  );
}
