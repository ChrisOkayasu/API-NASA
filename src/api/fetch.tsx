const API_KEY = 'Z3fYycESn3UYpDYytPqX8Jn3fdh9alCR98rfviIs';
//LINK - URL
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams?: string) => {
    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams?.length > 0 ? urlParams : ''}`);
        const data = await response.json()
        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error);
    }
}


// const API_KEY = 'Z3fYycESn3UYpDYytPqX8Jn3fdh9alCR98rfviIs';
// const API_URL = 'https://api.nasa.gov/planetary/apod';

// export default async (urlParams = '') => {
//     try {
//         const response = await fetch(`${API_URL}?api_key=${API_KEY}${urlParams}`);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         throw error;
//     }
// };
