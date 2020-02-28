import axios from 'axios';
import { sessionGet } from '../session';

export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: { 'Authorization': `Bearer ${sessionGet('token')}` }
});