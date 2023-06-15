"use client";

import { nanoid } from "nanoid";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mainSize, setMainSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const main = ref.current;

    if (main) {
      setMainSize({
        width: main.offsetWidth,
        height: main.offsetHeight,
      });
    }
  }, []);

  const cellInfo = useMemo(() => {
    if (mainSize.width && mainSize.height) {
      const columns = 15;
      const cellSize = mainSize.width / columns;

      const rows = Math.ceil(mainSize.height / cellSize);

      return {
        cellsTotal: rows * columns,
        cellSize,
      };
    }

    return {
      cellsTotal: 0,
      cellSize: 0,
    };
  }, [mainSize.height, mainSize.width]);

  return (
    <div ref={ref} className="bg-red-200 flex-1 flex flex-wrap gap-1 pointer-events-none">
      {Array(cellInfo.cellsTotal)
        .fill(null)
        .map(() => (
          <Item key={nanoid()} size={cellInfo.cellSize} />
        ))}
    </div>
  );
}

const Item = ({ size }: { size: number }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{
        width: size,
        height: size,
        transition: "all 1s",
        ...(active ? { background: "blue", transition: "all 0s" } : {}),
      }}
      onMouseEnter={() => !active && setActive(true)}
      onMouseLeave={() => active && setActive(false)}
    ></div>
  );
};
