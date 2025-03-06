import axios from 'axios';

class MetaApi {
    private apiUrl: string;
    private accessToken: string;

    constructor(apiUrl: string, accessToken: string) {
        this.apiUrl = apiUrl;
        this.accessToken = accessToken;
    }

    initialize() {
        // Initialize the API connection, e.g., set up headers or authentication
        console.log('Meta API initialized with URL:', this.apiUrl);
    }

    async fetchData(endpoint: string): Promise<any> {
        const response = await fetch(`${this.apiUrl}/${endpoint}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        return await response.json();
    }

    async sendData(endpoint: string, data: any): Promise<any> {
        const response = await fetch(`${this.apiUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Error sending data: ${response.statusText}`);
        }

        return await response.json();
    }
}

export const getMetaData = async () => {
    try {
        const response = await axios.get('https://api.meta.com/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching Meta data:', error);
        throw error;
    }
};

export default MetaApi;