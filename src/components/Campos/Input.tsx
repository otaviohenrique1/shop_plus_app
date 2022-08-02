import { IInputProps, Input as NativeBaseInput } from "native-base";

export type InputProps = IInputProps;

export function Input(props: InputProps) {
  return (
    <NativeBaseInput {...props} />
  );
}
