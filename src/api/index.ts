import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default class PostService {
  static async getAll(fetchArgument?: string) {
    const searchValue = fetchArgument ? `?title=${fetchArgument}` : '';
    const response = await axios.get(`${API_URL}/posts${searchValue}`);

    return response.data;
  }

  static async getById(id: number) {
    const response = await axios.get(`${API_URL}/posts/${id}`);

    return response.data;
  }
}
