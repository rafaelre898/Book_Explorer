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
export const GOOGLE_BOOKS_API_URL = getEnvVar('GOOGLE_BOOKS_API_URL')
export const PORT = getEnvVar('PORT')

// constant variables
export const DEFAULT_RATING = 'No rating'
export const UNKNOWN = 'Unknown'