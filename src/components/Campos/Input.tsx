import { IInputProps, Input as NativeBaseInput } from "native-base";

type CampoInputProps = IInputProps & {
  label: string;
}

export function CampoInput(props: CampoInputProps) {
  return (
    <NativeBaseInput {...props} />
  );
}