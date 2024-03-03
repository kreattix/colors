import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppStore: TypedUseSelectorHook<RootState> = useSelector;
export const useAppSelector = () => useAppStore((state) => state);
