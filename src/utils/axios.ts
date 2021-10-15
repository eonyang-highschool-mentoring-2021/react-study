import axios from 'axios';


/**
 * axios 란?
 * node 기반의 App 에서 http, https 요청을 보내기 위한 라이브러리(기능들 집합) 
 */
export default axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: false,
});