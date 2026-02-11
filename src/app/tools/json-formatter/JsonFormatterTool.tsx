"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/tools/CopyButton";

export default function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const validate = () => {
    try {
      JSON.parse(input);
      setError("");
      setOutput("Valid JSON!");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  return (
    <Card>
      <div className="space-y-4">
        <Textarea
          rows={10}
          placeholder='Paste your JSON here, e.g. {"name": "value"}'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          <Button onClick={format}>Format</Button>
          <Button variant="secondary" onClick={minify}>
            Minify
          </Button>
          <Button variant="secondary" onClick={validate}>
            Validate
          </Button>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-950 dark:text-red-400">
            {error}
          </div>
        )}

        {output && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Output
              </span>
              <CopyButton text={output} />
            </div>
            <Textarea rows={10} readOnly value={output} />
          </div>
        )}
      </div>
    </Card>
  );
}
