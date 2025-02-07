import dotenv from 'dotenv'

dotenv.config()

const getEnvVar = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is missing in .env file`);
    }
    return value;
};
// env variables
export const PORT = getEnvVar('PORT')
