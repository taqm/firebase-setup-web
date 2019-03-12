interface Config {
  apiKey: string;
  databaseURL: string;
  storageBucket: string;
  authDomain: string;
  messagingSenderId: string;
  projectId: string;
}

declare const config: Config;
export default config;
