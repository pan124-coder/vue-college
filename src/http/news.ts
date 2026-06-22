import axios from "@/http/axios.ts";

export interface newsData{
    id: number;
    title: string;
    content: string;
    category: string;
    supplier: string;
    reviewer: string;
    status: string;
    publishTime: string;
    createTime: string;
}

export const saveNews=(data:newsData)=>{
    return axios({
        url:'api/news/savenews',
        method: 'POST',
        data
    })
}

export const newsList=(start:number,rows:number)=>{
    return axios({
        url:'api/news/newsList',
        method: 'GET',
        params:{
            currentPage:start,
            rows
        }

    })
}

export const getPublishedNews = (category?: string, limit: number = 10) => {
    return axios({
        url: 'api/news/publishedList',
        method: 'GET',
        params: {
            category,
            limit
        }
    })
}

export const getNewsById = (id: number) => {
    return axios({
        url: `api/news/${id}`,
        method: 'GET'
    })
}
