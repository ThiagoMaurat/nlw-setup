import React from "react";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-1">
        {weekDays.map((days, index) => {
          return (
            <div
              key={`weekDay${index}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
            >
              {days}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-1">
        {summaryDates.map((date) => {
          return (
            <HabitDay
              amount={5}
              completed={Math.round(Math.random() * 5)}
              key={date.toString()}
            />
          );
        })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 text-white border-2 border-zinc-800 m-2 flex items-center justify-center rounded opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
};
