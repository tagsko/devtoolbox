"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/tools/CopyButton";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
  );
}

function rgbToHsl(
  r: number,
  g: number,
  b: number
): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb(
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

export default function ColorConverterTool() {
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  const updateFromHex = (value: string) => {
    setHex(value);
    const result = hexToRgb(value);
    if (result) {
      setRgb(result);
      setHsl(rgbToHsl(result.r, result.g, result.b));
    }
  };

  const updateFromRgb = (r: number, g: number, b: number) => {
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
    setHsl(rgbToHsl(r, g, b));
  };

  const updateFromHsl = (h: number, s: number, l: number) => {
    setHsl({ h, s, l });
    const result = hslToRgb(h, s, l);
    setRgb(result);
    setHex(rgbToHex(result.r, result.g, result.b));
  };

  const hexStr = hex.startsWith("#") ? hex : `#${hex}`;
  const rgbStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslStr = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

  // Sync color picker
  const [picker, setPicker] = useState(hex);
  useEffect(() => {
    const result = hexToRgb(hex);
    if (result) setPicker(hexStr);
  }, [hex, hexStr]);

  return (
    <Card>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div
            className="h-20 w-20 shrink-0 rounded-xl border border-gray-300 dark:border-gray-600"
            style={{ backgroundColor: hexStr }}
          />
          <input
            type="color"
            value={picker}
            onChange={(e) => updateFromHex(e.target.value)}
            className="h-20 w-20 cursor-pointer rounded-lg"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              HEX
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={hex}
                onChange={(e) => updateFromHex(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 font-mono text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
              />
              <CopyButton text={hexStr} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              RGB
            </label>
            <div className="flex gap-1">
              {(["r", "g", "b"] as const).map((ch) => (
                <input
                  key={ch}
                  type="number"
                  min={0}
                  max={255}
                  value={rgb[ch]}
                  onChange={(e) =>
                    updateFromRgb(
                      ch === "r" ? Number(e.target.value) : rgb.r,
                      ch === "g" ? Number(e.target.value) : rgb.g,
                      ch === "b" ? Number(e.target.value) : rgb.b
                    )
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-2 py-2 text-center font-mono text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                />
              ))}
              <CopyButton text={rgbStr} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              HSL
            </label>
            <div className="flex gap-1">
              {(["h", "s", "l"] as const).map((ch) => (
                <input
                  key={ch}
                  type="number"
                  min={0}
                  max={ch === "h" ? 360 : 100}
                  value={hsl[ch]}
                  onChange={(e) =>
                    updateFromHsl(
                      ch === "h" ? Number(e.target.value) : hsl.h,
                      ch === "s" ? Number(e.target.value) : hsl.s,
                      ch === "l" ? Number(e.target.value) : hsl.l
                    )
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-2 py-2 text-center font-mono text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                />
              ))}
              <CopyButton text={hslStr} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
