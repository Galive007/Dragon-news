import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/newsCard';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    // console.log(data);
    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data)
            return
        } else if (id == '1') {
            const filteredData = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredData)
        } else {
            const filteredData = data.filter(news => news.category_id == id)
            console.log(filteredData);
            setCategoryNews(filteredData)
        }
    }, [data, id])
    return (
        <div>
            <h1 className='font-semibold'>Total <span className='text-[#D72050]'>{categoryNews.length}</span> News Found</h1>
            <div className='grid grid-cols-1 mt-4'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;