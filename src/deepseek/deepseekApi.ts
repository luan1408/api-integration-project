import axios from 'axios';

export class DeepSeekApi {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.deepseek.com/v1'; // Example base URL
    }

    public async search(query: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({ query })
        });

        if (!response.ok) {
            throw new Error('Search request failed');
        }

        return await response.json();
    }

    public async getResults(searchId: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/results/${searchId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch results');
        }

        return await response.json();
    }

    public formatResults(results: any): any {
        // Format the results as needed
        return results.map((result: any) => ({
            title: result.title,
            link: result.link,
            snippet: result.snippet
        }));
    }
}

export const getDeepSeekData = async () => {
    try {
        const response = await axios.get('https://api.deepseek.com/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching DeepSeek data:', error);
        throw error;
    }
};

export const getDeepSeekResponse = async (query: string) => {
  try {
    const response = await axios.post('https://api.deepseek.com/query', {
      query: query,
      // Adicione outros parâmetros necessários para a API da DeepSeek
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching DeepSeek response:', error);
    return 'Desculpe, não consegui processar sua solicitação.';
  }
};