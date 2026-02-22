import { ToolContent } from "@/types/tool";

export const colorConverterContent: ToolContent = {
  whatIs: `Color codes represent colors numerically so that computers, browsers, and design tools can display them consistently. The three most common formats in web development and design are HEX, RGB, and HSL — each representing the same colors in different ways.

HEX codes (like #FF5733) are six-digit hexadecimal values widely used in CSS and HTML. RGB (Red, Green, Blue) defines colors by the intensity of each primary light component on a scale from 0 to 255, which maps closely to how screens physically produce color. HSL (Hue, Saturation, Lightness) describes color in terms humans find more intuitive — the hue is the color itself (0-360 degrees on the color wheel), saturation controls how vivid it is, and lightness controls how bright or dark.

Converting between these formats is a frequent task for frontend developers and designers. You might receive a HEX color from a design system but need the RGB value for a CSS animation, or want to adjust the lightness of a color which is easier in HSL. Our converter handles all three formats with a real-time preview, so you can see exactly what color you are working with. Everything runs locally in your browser.`,

  faq: [
    {
      question: "Which color format should I use in CSS?",
      answer:
        "All three formats work in modern CSS. HEX is the most compact and widely used. RGB is useful when you need to add opacity (rgba). HSL is best when you want to create color variations by adjusting lightness or saturation while keeping the same hue. Choose whichever is most readable for your use case.",
    },
    {
      question: "What does the alpha channel mean in RGBA and HSLA?",
      answer:
        "The alpha channel controls transparency on a scale from 0 (fully transparent) to 1 (fully opaque). RGBA and HSLA extend RGB and HSL with this fourth value. For example, rgba(255, 0, 0, 0.5) is a semi-transparent red.",
    },
    {
      question: "Why do some HEX codes have only three digits?",
      answer:
        "Three-digit HEX codes are shorthand where each digit is repeated. For example, #F00 is equivalent to #FF0000 (red). This shorthand only works when each pair of digits is identical. Our converter always outputs the full six-digit format for clarity.",
    },
    {
      question: "How do I find complementary or analogous colors?",
      answer:
        "Using HSL makes this easy. The complementary color is 180 degrees opposite on the hue wheel (add 180 to the H value). Analogous colors are 30 degrees apart. Convert your color to HSL, adjust the hue, then convert back to your preferred format.",
    },
  ],

  useCases: [
    {
      title: "Design-to-Code Translation",
      description:
        "Convert color values from design tools like Figma or Sketch (which often use HEX) into the RGB or HSL format required by your CSS codebase or design system.",
    },
    {
      title: "Creating Color Palettes",
      description:
        "Use HSL values to systematically generate lighter and darker shades of a base color by adjusting the lightness value, then convert to HEX for use in stylesheets.",
    },
    {
      title: "Accessibility Compliance",
      description:
        "Convert colors between formats to calculate contrast ratios for WCAG accessibility standards. Understanding the RGB values helps determine if text will be readable against a given background color.",
    },
  ],
};
