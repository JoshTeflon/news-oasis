import React from 'react';
import { Star, StarOutline } from '../../icons';

interface RatingProps {
  total?: number;
  starred: number;
}

const Rating: React.FC<RatingProps> = ({ total = 5, starred }) => {
  return (
    <span className='flex items-center'>
      {
        [...Array(total)].map((_, index) => (
            index < starred
            ?
            <Star
              key={index}
              width={12}
              className='text-[#e9b200] mr-1'
            />
            :
            <StarOutline
              key={index}
              width={12}
              className='text-[#e9b200] mr-1'
            />
        ))
      }
    </span>
  );
};

export default Rating;
