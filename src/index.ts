import { getMetaData } from './meta/metaApi';
import { getDeepSeekData } from './deepseek/deepseekApi';

const run = async () => {
    try {
        const metaData = await getMetaData();
        const deepSeekData = await getDeepSeekData();

        console.log('Meta Data:', metaData);
        console.log('DeepSeek Data:', deepSeekData);
    } catch (error) {
        console.error('Error running API integrations:', error);
    }
};

run();