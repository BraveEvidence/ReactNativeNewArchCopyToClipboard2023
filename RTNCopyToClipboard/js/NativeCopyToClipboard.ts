import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  copyToClipboard(value: string): void;
}

export default TurboModuleRegistry.get<Spec>(
  'RTNCopyToClipboard',
) as Spec | null;
