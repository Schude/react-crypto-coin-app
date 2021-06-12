import axios from 'axios';

const apiCall = (url, rest) => {
    return axios.get(url).then((res) => res.data);
};
export default apiCall;
