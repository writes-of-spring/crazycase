"use client";
import * as React from "react";
import * as Switch from "@/components/ui/Switch";
import { randomCase } from "@/lib/randomCase";
import { Input } from "@/components/ui/input";
import { convertCase } from "@/lib/crazyCase";
const CrazyCase = () => {
  const [string, setString] = React.useState("Crazy String");
  const [isCrazyCase, setCrazyCase] = React.useState(false);

  const displayedString = isCrazyCase ? convertCase(string) : string;

  function handleRandomise() {
    setString(randomCase(string));
  }

  return (
    <div className="bg-gray-100 pt-3 pb-4 px-2 rounded-lg">
      <h1 className="text-xl font-medium mb-3 text-gray-700">
        {displayedString || "Enter text"}
      </h1>
      <Input
        className="bg-indigo-200"
        type="text"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <div className="my-2" />
      <div>
        <div className="flex items-center">
          <label
            htmlFor="crazycase-mode"
            className="pr-3 text-sm font-medium text-gray-700"
          >
            Crazy Case Mode
          </label>
          <Switch.Root
            checked={isCrazyCase}
            onCheckedChange={(checked) => setCrazyCase(checked)}
            id="crazycase-mode"
          >
            <Switch.Thumb />
          </Switch.Root>
        </div>
      </div>
      <div className="my-2" />

      <button
        type="button"
        onClick={handleRandomise}
        disabled={!string}
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 block w-full text-center"
      >
        Randomise
      </button>
    </div>
  );
};
export default CrazyCase;
