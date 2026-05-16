import * as React from "react";
import { scrambleCase, invertCase } from "@/lib/case";

const CrazyCase = () => {
  const [text, setText] = React.useState("Crazy String");
  const [isCrazyCase, setIsCrazyCase] = React.useState(false);

  const displayedText = isCrazyCase ? invertCase(text) : text;

  function handleRandomise() {
    setText(scrambleCase(text));
  }

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col gap-8">
        {/* Eyebrow + heading */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs font-medium uppercase tracking-wide text-primary">
            Text Transformer
          </span>
          <h1 className="font-mono text-4xl font-semibold tracking-tight text-balance text-foreground">
            {displayedText || "Enter text"}
          </h1>
          <p className="max-w-[42ch] text-base text-muted-foreground leading-relaxed">
            Toggle the switch to invert casing. Hit randomise for chaos.
          </p>
        </div>

        {/* Card */}
        <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-xs">
          <div className="flex flex-col gap-2">
            <label htmlFor="text-input" className="text-sm font-medium text-card-foreground">
              Your text
            </label>
            <input
              id="text-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="flex items-center justify-between border-t border-border pt-5">
            <label
              htmlFor="crazy-toggle"
              className="text-sm font-medium text-card-foreground"
            >
              Crazy Case Mode
            </label>
            <div className="group relative inline-flex w-11 shrink-0 cursor-pointer rounded-full bg-muted p-0.5 outline-primary outline-offset-2 transition-colors duration-200 ease-in-out has-checked:bg-primary has-focus-visible:outline-2">
              <span className="aspect-square w-1/2 rounded-full bg-card-foreground shadow-xs ring-1 ring-black/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-full dark:ring-white/10" />
              <input
                id="crazy-toggle"
                type="checkbox"
                checked={isCrazyCase}
                onChange={(e) => setIsCrazyCase(e.target.checked)}
                className="absolute inset-0 size-full appearance-none focus:outline-hidden"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleRandomise}
            disabled={!text}
            className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Randomise
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrazyCase;
