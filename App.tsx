/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RTNCopyToClipboard from 'rtn-copy-to-clipboard/js/NativeCopyToClipboard';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TouchableOpacity
        onPress={() => {
          RTNCopyToClipboard?.copyToClipboard('This is copied data');
        }}>
        <Text>Copy to clipboard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;

//yarn add ./RTNCopyToClipboard

//node rnapp/node_modules/react-native/scripts/generate-codegen-artifacts.js \
// --path rnapp/ \
// --outputPath rnapp/RTNCopyToClipboard/generated/

//https://github.com/BraveEvidence/ReactNativeNewArchCopyToClipboard2023
