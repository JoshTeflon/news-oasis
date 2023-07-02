// import { useEffect, useState } from 'react';
import { Card } from './components/interface';

function App() {
  // const [news, setNews] = useState<any[]>([])
  // const [loading, setLoading] = useState<boolean>(true)
  // const [error, setError] = useState<Error | null>(null)

  // const handleGetNews = async () => {
  //     await fetch('https://649f7200245f077f3e9d8df9.mockapi.io/api/v1/news')
  //     .then((response: Response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((data: any[]) => {
  //       setNews(data)
  //     })
  //     .catch((error: Error) => {
  //       console.log("Error:", error)
  //       setError(error)
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  // useEffect(() => {
  //   handleGetNews()
  // }, [])

  // if (loading) return <div className='text-center p-4 text-secondary'>Loading...</div>
  // if (error) return <div className='text-center p-4 text-[#ff0000]'>Error!</div>

  return (
    <div>
      <div className='border-b border-[#213f7d0f] shadow-custom py-6 px-4'>
        <h1 className='text-primary text-2xl font-semibold text-center'>News 📰 Oasis</h1>
      </div>
      <div
        className='container grid grid-cols-1 md:grid-cols-2 gap-4 my-5 md:my-6'
      >
        {/* {
          news?.map((i) => {
            return (
              <Card
                key={i?.id}
                date={i?.story_date}
                title={i?.title}
                excerpt={i?.excerpt}
                content={i?.story_content}
                author={i?.author}
                ratings={i?.ratings}
              />
            )
          })
        } */}
        {
          [

            {
      
               id: "1",
      
               story_date: "2022-03-21",
      
               title: "Sample News Title 1",
      
               excerpt: "This is a sample news article about a topic of interest.",
      
               story_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit leo eu risus volutpat dapibus.",
      
               author: {
      
                  name: "John Doe",
      
                  email: "johndoe@example.com",
      
                  phone: "+1 123-456-7890"
      
               },
      
               ratings: {
      
                  upvotes: 10,
      
                  downvotes: 2,
      
                  rating: 4.5
      
               }
      
            },]?.map((i) => {
            return (
              <Card
                key={i?.id}
                date={i?.story_date}
                title={i?.title}
                excerpt={i?.excerpt}
                content={i?.story_content}
                author={i?.author}
                ratings={i?.ratings}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App
