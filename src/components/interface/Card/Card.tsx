import React from 'react'
import { Button, Rating } from '..'

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
    story_date?: string
    title?: string
    excerpt?: string
    story_content?: string
    author?: AuthorDetails
    ratings?: RatingsDetails
}

export interface CardFunctions {
    ReadMore: () => void
}

const Card: React.FC<CardProps & CardFunctions> = ({ story_date, title, excerpt, story_content, author, ratings, ReadMore }) => {
  return (
    <div className='w-full bg-white border border-[#213f7d0f] shadow-custom'>
        <div className='py-2 md:py-3 px-4 md:px-6'>
            <span className='text-primary text-xs font-light opacity-50 flex justify-end'>{story_date}</span>
            <div className='mt-2'>
                <h2 className='text-base font-medium'>{title}</h2>
                <h3 className='text-sm'>{excerpt}</h3>
            </div>
            <div className='my-4 text-sm font-light'>
                <p className='content-container mb-1'>{story_content}</p>
                <Button
                    variant='link'
                    className='text-secondary opacity-70'
                    size='xs'
                    aria-label='read more'
                    onClick={ReadMore}
                >Read more☞</Button>
            </div>
            <div className='text-xs flex flex-col md:flex-row md:justify-between'>
                <div className='mb-2 md:mb-0'>
                    <p>{author?.name}</p>
                    <p>{author?.email}</p>
                    <p>{author?.phone}</p>
                </div>
                <Rating starred={ratings?.rating ? ratings?.rating : 0} />
            </div>
        </div>
    </div>
  )
}

export default Card