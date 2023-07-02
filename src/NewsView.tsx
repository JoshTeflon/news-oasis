import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Rating } from './components/interface';
import { ThumbsDown, ThumbsUp } from './components/icons';
import { CardProps } from './components/interface/Card/Card';

const NewsView = () => {
    const [newsValue, setNewsValue] = useState<CardProps>({})
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    const { newsId } = useParams<{ newsId: string }>()
    const navigate = useNavigate()

    const handleGetUniqueNews = useCallback(async () => {
        await fetch(`https://649f7200245f077f3e9d8df9.mockapi.io/api/v1/news/${newsId}`, {
          method: 'GET',
          headers: {'content-type':'application/json'},
        })
        .then((response: Response) => {
          if (response.ok) {
            console.log('response', response)
            return response.json();
          }
          throw response;
        })
        .then((data: any) => {
          setNewsValue(data)
        })
        .catch((error: Error) => {
          console.log("Error:", error)
          setError(error)
        })
        .finally(() => {
          setLoading(false);
        });
    }, [newsId])

    useEffect(() => {
        handleGetUniqueNews()
    }, [handleGetUniqueNews])

    const handleUpdateVotes = useCallback(async (newsId: string | undefined, updatedData: CardProps) => {
        await fetch(`https://649f7200245f077f3e9d8df9.mockapi.io/api/v1/news/${newsId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData),
        })
          .then((response) => {
            if (response.ok) {
              alert('News item updated successfully.');
              handleGetUniqueNews()
            } else {
              throw new Error('Failed to update news item.');
            }
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      }, [handleGetUniqueNews]);
      
      const handleVote = (type: string) => {
        const updatedNews = { ...newsValue };
      
        if(updatedNews?.ratings) {
            if (type === 'upvote') {
                updatedNews.ratings.upvotes += 1;
              } else if (type === 'downvote') {
                updatedNews.ratings.downvotes += 1;
              }

              updatedNews.ratings.rating =
                (updatedNews.ratings.upvotes - updatedNews.ratings.downvotes) / 5;
        }
      
        handleUpdateVotes(newsId, updatedNews);
    };
      

    if (loading) return <div className='text-center p-4 text-secondary'>Loading...</div>
    if (error) return <div className='text-center p-4 text-[#ff0000]'>Error!</div>

    return (
        <div className='container w-full bg-white'>
            <div className='py-2 md:py-4 px-4 md:px-8'>
                <Button
                    variant='naked'
                    className='text-text font-normal mb-4'
                    onClick={() => navigate(-1)}
                >☜Back</Button>
                <span className='text-primary text-sm font-light opacity-50 flex justify-end'>{newsValue?.story_date}</span>
                <div className='mt-2'>
                    <h2 className='text-lg font-medium'>{newsValue?.title}</h2>
                    <h3 className='text-base mt-1'>{newsValue?.excerpt}</h3>
                </div>
                <div className='my-6 text-base font-light'>
                    <p>{newsValue?.story_content}</p>
                </div>
                <div className='text-sm flex flex-col md:flex-row md:justify-between'>
                    <div className='mb-2 md:mb-0 space-y-1.5'>
                        <p>{newsValue?.author?.name}</p>
                        <p>{newsValue?.author?.email}</p>
                        <p>{newsValue?.author?.phone}</p>
                    </div>
                    <div className='flex items-center'>
                        <Rating starred={newsValue?.ratings?.rating ? newsValue?.ratings?.rating : 0} />
                        <div className='flex items-center font-light space-x-2 ml-2'>
                            <div className='flex items-center space-x-1'>
                                <Button
                                    variant='naked'
                                    aria-label='thumbs up'
                                    onClick={() => handleVote('upvote')}
                                >
                                    <ThumbsUp />
                                </Button>
                                <span>{newsValue?.ratings?.upvotes}</span>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <Button
                                    variant='naked'
                                    aria-label='thumbs down'
                                    onClick={() => handleVote('downvote')}
                                >
                                    <ThumbsDown />
                                </Button>
                                <span>{newsValue?.ratings?.downvotes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsView