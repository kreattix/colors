"use client";
import { Colors, Pallete } from "@kreattix/colors";
import { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ColorShadeProps {
  shades?: typeof Colors.red;
  palette?: typeof Pallete.red;
  colorCode: string;
  shadeCode: string;
  index: number;
}

const ColorShade: FC<ColorShadeProps> = ({
  shadeCode,
  colorCode,
  index,
  shades,
  palette,
}) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const shadesArray = shades
    ? Object.values(shades)
    : Object.values(palette || []);
  const nextIndex = index + 5;
  const textColorIndex =
    nextIndex > shadesArray.length - 1
      ? nextIndex - shadesArray.length
      : nextIndex;
  return (
    <CopyToClipboard
      onCopy={() => {
        setCopiedColor("Copied");
        document.documentElement.style.setProperty("--bodyColor", colorCode);
        setTimeout(() => {
          setCopiedColor(null);
          document.documentElement.style.setProperty("--bodyColor", "");
        }, 700);
      }}
      text={colorCode}
    >
      <div
        key={`${shadeCode}-${colorCode}`}
        style={{
          background: colorCode,
          color: shades
            ? shadesArray[textColorIndex]
            : shadeCode === "contrast"
            ? palette?.main
            : palette?.contrast,
        }}
        className={`shade-item ${shadeCode}`}
      >
        {copiedColor ?? (
          <>
            <div>{shadeCode}</div>
            <div>{colorCode}</div>
          </>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorShade;
