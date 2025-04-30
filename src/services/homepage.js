import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY;
const DELIVERY_TOKEN = process.env.NEXT_PUBLIC_DELIVERY_TOKEN
const ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT;
const BASE_URL = process.env.NEXT_PUBLIC_CONTENTSTACK_URL;

const headers = {
    api_key: API_KEY,
    access_token: DELIVERY_TOKEN,
};

export const fetchEntries = async (contentType) => {
    try {
        const response = await axios.get(`${BASE_URL}/${contentType}/entries`, {
            headers,
            params: {
                environment: ENVIRONMENT,
            },
        });
        return response.data.entries;
    } catch (error) {
        console.log('Error fetching entries:', error);
        return [];
    }
};
