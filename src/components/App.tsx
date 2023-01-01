import React, { FC, useEffect, useRef, useState } from "react";
import Flex from "./build/Flex";
import GlassButton from "./helpers/buttons/GlassButton";
import GlassInput from "./helpers/inputs/GlassInput";

type ChangeCountType = "increament" | "decreament";

enum Lengths {
  MIN_LENGTH = -100,
  MAX_LENGTH = 100,
}

interface CountInfo {
  count: number;
  changeBy: number;
}

const App = () => {
  const [countInfo, setCountInfo] = useState<CountInfo>(
    JSON.parse(`${localStorage.getItem("countInfo")}`) || {
      count: 0,
      changeBy: 1,
    }
  );
  const { count, changeBy } = countInfo;
  const changeByInputRef = useRef<HTMLInputElement>(null as any);

  function changeCount(
    changeBy: number,
    changeCountType: ChangeCountType
  ): void {
    if (changeBy < Lengths.MIN_LENGTH || changeBy > Lengths.MAX_LENGTH) return;
    if (changeBy < 0) return;

    if (changeCountType === "increament") {
      if (changeBy + count > Lengths.MAX_LENGTH) return;
      if (count < Lengths.MAX_LENGTH)
        setCountInfo((prevState) => ({
          ...prevState,
          count: (prevState.count += changeBy),
        }));
      return;
    }

    if (count - changeBy < Lengths.MIN_LENGTH) return;
    if (count > Lengths.MIN_LENGTH) {
      setCountInfo((prevState) => ({
        ...prevState,
        count: (prevState.count -= changeBy),
      }));
    }
  }

  function changeCountChangeByValue(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setCountInfo((prevState) => ({
      ...prevState,
      changeBy: parseInt(e.target.value),
    }));
  }

  useEffect(() => {
    changeByInputRef.current.value = `${changeBy}`;
  }, []);

  useEffect(() => {
    localStorage.setItem("countInfo", JSON.stringify(countInfo));
  }, [countInfo]);

  return (
    <div>
      <Flex
        className="relative w-full items-center justify-between py-4"
        direction="flex-row"
      >
        <GlassButton
          className="flex items-center justify-center w-8 h-8 p-0"
          roundedFull
          onClick={() => changeCount(changeBy, "decreament")}
        >
          -
        </GlassButton>
        <Flex className="items-center justify-center" direction="flex-col">
          <p className="text-sm font-bold">{count}</p>
          <div
            className={`absolute bottom-0 ${
              count < 0 ? "bg-red-300" : "bg-blue-300"
            } h-2 rounded-full`}
            style={{
              width: `${count < 0 ? -count : count}%`,
            }}
          ></div>
        </Flex>
        <GlassButton
          className="flex items-center justify-center w-8 h-8 p-0"
          roundedFull
          onClick={() => changeCount(changeBy, "increament")}
        >
          +
        </GlassButton>
      </Flex>
      <div>
        <GlassInput
          className="w-full"
          type="number"
          placeholder="change by count value"
          rounded
          reference={changeByInputRef}
          onChange={(e) => changeCountChangeByValue(e)}
        />
      </div>
    </div>
  );
};

export default App;
