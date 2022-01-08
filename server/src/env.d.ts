declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string;
    PORT: string;
    SERVER_URL_PREFIX: string;
    JWT_SECRET: string;
  }
}
