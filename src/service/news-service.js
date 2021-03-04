export default class NewsService {
    getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20');
        return await res.json();
    };
    getComment = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        return await res.json();
    }
}
