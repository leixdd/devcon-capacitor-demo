import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.devcon.testapp',
  appName: 'devcon-demo-capacitor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
