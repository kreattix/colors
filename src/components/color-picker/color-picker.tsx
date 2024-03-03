import { setColor } from "@/redux/features/color-slice";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import { Colorful } from "@uiw/react-color";

const ColorPicker = () => {
  const dispatch = useAppDispatch();
  const { currentColor } = useAppSelector().colorReducer;
  return (
    <Colorful
      color={currentColor}
      onChange={(color) => {
        dispatch(setColor(color.hexa));
      }}
    />
  );
};

export default ColorPicker;
