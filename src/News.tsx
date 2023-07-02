import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input } from './components/interface';
import { Search } from './components/icons';
import { CardProps } from './components/interface/Card/Card';
import { toast } from 'react-toastify';

export type NewsProps = CardProps & {
    id: string
}

const News = () => {
    const [news, setNews] = useState<NewsProps[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)
    const [search, setSearch] = useState<string>('')

    const navigate = useNavigate();
  
    const handleGetNews = useCallback(async () => {
        await fetch(`https://649f7200245f077f3e9d8df9.mockapi.io/api/v1/news?title=${search}`, {
          method: 'GET',
          headers: {'content-type':'application/json'},
        })
        .then((response: Response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then((data: NewsProps[]) => {
            setNews(data)
        })
        .catch((error: Error | any) => {
            toast.error(error)
            setError(error)
        })
        .finally(() => {
          setLoading(false);
        });
    }, [search])
  
    useEffect(() => {
      handleGetNews()
    }, [handleGetNews])
  
    if (loading) return <div className='text-center p-4 text-secondary'>Loading...</div>
    if (error) return <div className='text-center p-4 text-[#ff0000]'>Error!</div>

    return (
        <div>
            <div className='container w-full md:w-3/4 lg:w-1/2 pt-6 px-4'>
                <Input
                icon={<Search width={20} />}
                placement='end'
                placeholder='Search news title...'
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div
                className='container grid grid-cols-1 md:grid-cols-2 gap-4 my-5 md:my-6 py-5 px-4'
            >
                {
                news?.map((i) => {
                    return (
                    <Card
                        key={i?.id}
                        story_date={i?.story_date}
                        title={i?.title}
                        excerpt={i?.excerpt}
                        story_content={i?.story_content}
                        author={i?.author}
                        ratings={i?.ratings}
                        ReadMore={() => navigate(`/${i?.id}`)}
                    />
                    )
                })
                }
            </div>
        </div>
    )
}

export default News