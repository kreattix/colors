"use client";
import { Colors } from "@kreattix/colors";
import { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ColorShadeProps {
  shades: typeof Colors.red;
  colorCode: string;
  shadeCode: string;
  index: number;
}

const ColorShade: FC<ColorShadeProps> = ({
  shadeCode,
  colorCode,
  index,
  shades,
}) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const shadesArray = Object.values(shades);
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
          color: shadesArray[textColorIndex],
        }}
        className="shade-item"
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
