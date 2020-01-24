
import { Layout, Options } from 'react-native-navigation';

export type RootScreenProps<P> = {
  passProps?: P,
};

export type PushScreenProps<P> = {
  componentId: string,
  layout: Layout<P>,
};
export type PopScreenProps = {
  componentId: string,
  options?: Options,
};

export type PopToScreenProps = {
  componentId: string,
  options: Options,
};

export type AddScreenProps<P> = {
  options?: Options,
  passProps?: P,
  componentId?: string;
};

export interface RequiredAddScreenProps<P> extends AddScreenProps<P> {
  passProps: P;
}

export type SuccessModalScreenProps = {
  successMessage: string;
  buttonText: string;
};
export type RootScreenNavigationAction<T> = (payload: RootScreenProps<T>) => void;
