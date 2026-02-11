"use client";

import { useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import Textarea from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/tools/CopyButton";

export default function UrlEncodeTool() {
  const [mode, setMode] = useState("Encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (value: string, currentMode: string) => {
    setInput(value);
    setError("");
    if (!value) {
      setOutput("");
      return;
    }
    try {
      if (currentMode === "Encode") {
        setOutput(encodeURIComponent(value));
      } else {
        setOutput(decodeURIComponent(value));
      }
    } catch {
      setError("Invalid input for " + currentMode.toLowerCase() + " operation.");
      setOutput("");
    }
  };

  const handleTabChange = (tab: string) => {
    setMode(tab);
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <Card>
      <div className="space-y-4">
        <Tabs
          tabs={["Encode", "Decode"]}
          activeTab={mode}
          onTabChange={handleTabChange}
        />

        <Textarea
          rows={6}
          placeholder={
            mode === "Encode"
              ? "Enter text to URL encode..."
              : "Enter URL encoded string to decode..."
          }
          value={input}
          onChange={(e) => handleInput(e.target.value, mode)}
        />

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
            {error}
          </div>
        )}

        {output && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Result
              </span>
              <CopyButton text={output} />
            </div>
            <Textarea rows={6} readOnly value={output} />
          </div>
        )}
      </div>
    </Card>
  );
}
