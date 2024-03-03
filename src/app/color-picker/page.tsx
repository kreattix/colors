"use client";
import ColorPicker from "@/components/color-picker/color-picker";
import ColorShade from "@/components/color-shade/ColorShade";
import { useAppSelector } from "@/redux/features/hooks";
import { Color } from "@kreattix/colors";
import CopyToClipboard from "react-copy-to-clipboard";

const ColorPickerPage = () => {
  const { currentColor } = useAppSelector().colorReducer;
  const color = Color(currentColor);
  const colors = [
    { name: "HEX", code: color.hex },
    { name: "HEXA", code: color.hexa },
    { name: "RGB", code: color.rgb },
    { name: "RGBA", code: color.rgba },
    { name: "HSL", code: color.hsl },
    { name: "HSLA", code: color.hsla },
  ];
  return (
    <div className="container">
      <div className="my-pallate-generator">
        <div className="my-color-picker">
          <ColorPicker />
        </div>
        <div
          className="my-color-output"
          style={{
            background: currentColor,
          }}
        ></div>
      </div>
      <div className="my-palette-info">
        <div className="my-color-codes">
          {colors.map((item) => {
            return (
              <CopyToClipboard key={item.name} text={item.code}>
                <div className="my-color-code">
                  {item.name}: {item.code}
                </div>
              </CopyToClipboard>
            );
          })}
        </div>
        <div className="my-palette-colors">
          {Object.entries(color.pallete).map(([key, value], index) => {
            return (
              <ColorShade
                key={key}
                colorCode={value}
                shadeCode={key}
                palette={color.pallete}
                index={index}
              />
            );
          })}
        </div>
        <div className="my-shade-colors">
          {Object.entries(color.shades).map(([key, value], index) => {
            return (
              <ColorShade
                key={key}
                colorCode={value}
                shadeCode={key}
                shades={color.shades}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorPickerPage;
