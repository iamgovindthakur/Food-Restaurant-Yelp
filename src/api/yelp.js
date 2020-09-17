import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer hCp6OdlsMPbS2WDNuyjMPkZXd4xADFnTpW4tAQnxYK_6ra5ZxRrCWuY1jnzLUJJw2E-6nptoPTq-KzH00vEHezrYl-VtqMvucWRdgViU1qERcGsBBao4EU8S2PhdX3Yx'
    }
});