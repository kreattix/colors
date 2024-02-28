import ColorShade from "@/components/color-shade/ColorShade";
import { Colors } from "@kreattix/colors";

const HomePage = () => {
  return (
    <div className="container">
      <div className="shades-container">
        {Object.entries(Colors).map(([colorName, shades]) => {
          return (
            colorName !== "white" && (
              <div key={colorName} className="shade-items">
                <div className="shade-name" style={{ color: shades[500] }}>
                  {colorName.replace(/([A-Z])/g, " $&")}
                </div>
                {Object.entries(shades).map(([shadeCode, colorCode], index) => {
                  return (
                    <ColorShade
                      key={`${shadeCode}-${colorCode}`}
                      colorCode={colorCode}
                      index={index}
                      shadeCode={shadeCode}
                      shades={shades as typeof Colors.red}
                    />
                  );
                })}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
