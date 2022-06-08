import React, { Component, useState } from 'react';
import PostList from '../test';

export default function Home() {
    const [isLoading,setLoading]=useState(true);
    const [headLines, setHeadlines] = useState("");
    const [isError,setError]=useState(false);

    async function getNews() {
        let resposnse = await fetch("https://raw.githubusercontent.com/SauravKanchan/NewsAPI/master/top-headlines/category/general/au.json");
        let result = await resposnse.json().then(
            setLoading(false)
        );
        if(result.status=="error"){
            setError(true);
        }
        console.log(result.status);
        let p = result.articles.map((news) => {
            return (
            
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={news.urlToImage} alt="Img"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{news.title}</div>
                            <p class="text-gray-700 text-base">
                                {news.description}
                            </p>
                            <a class='btn btn-dark font-bold text-xl' href={news.url} >Read More</a>
                        </div>
                        
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {news.author}</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{news.source.name}</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{news.publishedAt}</span>
                        </div>
                </div>
                
            );
        });
        setHeadlines(p);

    }

   getNews();

    if(isLoading) return <div><h2>Loading...</h2> </div>
    if(isError) return <div className='text-center mt-5 mb-5'><h1>Something Went Wrong :( <br/> Please try after while</h1> </div>
    return (
        <div className='container-fluid'>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {headLines}
            </div>
        </div>

    );
}