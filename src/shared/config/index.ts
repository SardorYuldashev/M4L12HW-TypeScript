import "dotenv/config";

interface Config {
  port: number;
  db: {
    host: string;
    port: number;
    name: string;
  }
}

const config: Config = {
  port: +process.env.PORT!,
  db: {
    host: process.env.DB_HOST!,
    port: +process.env.DB_PORT!,
    name: process.env.DB_NAME!,
  },
};

export default config;