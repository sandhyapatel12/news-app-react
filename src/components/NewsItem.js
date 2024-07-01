import React from 'react'

const NewsItem = (props) => {

  let {newsTitle, newsDesc, newsImageUrl, newsUrl, newsdate, source} = props;   //destructure

  return (
    <>
    
         

    <div className='flex mx-auto items-center justify-center relative'>   {/* inner news boxes */}

         {/* badge box for news source */}
         <span className="absolute -translate-y-2/4 top-0 right-1 px-2 py-1 text-xs  text-white bg-yellow-700 font-semibold rounded-md">
               {source}
         </span>
 
 
       <div className="max-w-xs rounded  shadow-lg bg-black text-gray-500">

           {/* if image url is not then use following image otherwise use specific image */}
           <img className="w-full h-48"  src={!newsImageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/8b21/live/c4cfe950-2c5f-11ef-a7c2-a5d0956ae6dc.jpg":newsImageUrl} />
           <div className="px-5 py-4">
               <div className="font-bold text-xl mb-2">{newsTitle}...</div>
               <p className="text-gray-300 text-sm">{newsDesc}...</p>
               <p className='text-xs text-gray-400 mt-5'>Last Updated {new Date(newsdate).toGMTString()}</p>

           </div>
           <div className="px-6 pt-4 pb-5">
                 <a href={newsUrl} target='_blank' className='bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded text-sm'>Read More</a>     {/*_blank is used for link in open new tab */}
           </div>
     

       </div>
     </div>
  
 </>
  )
}

export default NewsItem



