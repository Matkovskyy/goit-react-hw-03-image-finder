import axios from 'axios';

const MY_KEY = '29395744-95b34d53a109031f8f7875032';
axios.defaults.baseURL = 'https://pixabay.com/api';

const Api = async (name, page) => {
    const response = await axios.get(
        `?q=${name}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
};

export default Api;