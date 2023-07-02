import React from 'react'
import { Button, Rating } from '..'
import { ThumbsDown, ThumbsUp } from '../../icons'

export interface AuthorDetails {
    name: string
    email: string
    phone: string
}

export interface RatingsDetails {
    upvotes: number
    downvotes: number
    rating: number
}

export interface CardProps {
    date?: string
    title?: string
    excerpt?: string
    content?: string
    author?: AuthorDetails
    ratings?: RatingsDetails
}

// const Card: React.FC<CardProps> = ({date, title, excerpt, content, author}) => {
const Card: React.FC<CardProps> = () => {
  return (
    <div className='w-full bg-white border border-[#213f7d0f] shadow-custom'>
        <div className='py-2 md:py-3 px-4 md:px-6'>
            <span className='text-primary text-xs font-light opacity-50 flex justify-end'>2022-03-21</span>
            <div className='mt-2'>
                <h2 className='text-base font-medium'>Sample News Title 1</h2>
                <h3 className='text-sm'>"This is a sample news article about a topic of interest."</h3>
            </div>
            <div className='my-4 text-sm font-light'>
                <p className='mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit leo eu risus volutpat dapibus.</p>
                <Button
                    variant='link'
                    className='text-secondary opacity-70'
                    size='xs'
                    aria-label='read more'
                >Read more☞</Button>
            </div>
            <div className='text-xs flex flex-col md:flex-row md:justify-between'>
                <div className='mb-2 md:mb-0'>
                    <p>John Doe</p>
                    <p>johndoe@example.com</p>
                    <p>+1 123-456-7890</p>
                </div>
                <div className='flex items-center'>
                    <Rating starred={4} />
                    <div className='flex items-center font-light space-x-2 ml-2'>
                        <div className='flex items-center space-x-1'>
                            <Button
                                variant='naked'
                                aria-label='thumbs up'
                            >
                                <ThumbsUp />
                            </Button>
                            <span>10</span>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <Button
                                variant='naked'
                                aria-label='thumbs down'
                            >
                                <ThumbsDown />
                            </Button>
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <span>{date}</span>
            <div>
                <h2>{title}</h2>
                <h3>{excerpt}</h3>
            </div>
            <div>
                <p>{content}</p>
            </div>
            <div>
                <div>
                    <p>{author?.name}</p>
                    <p>{author?.email}</p>
                    <p>{author?.phone}</p>
                </div>
                <div></div>
            </div> */}
        </div>
    </div>
  )
}

export default Card