import React from 'react'
import Link from 'next/link'
import BookCover from './BookCover'
import { cn } from '@/lib/utils'
import Image from 'next/image'


const BookCard: React.FC<BookProps> = ({id, title, genre, color, cover, isLoanedBook=false}) => {
  return (
    <div className=''>
      <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
        <Link 
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col items-center")}
        />
        <BookCover coverColor={color} coverImage={cover} />
        <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
          <p className='book-title'>{title}</p>
          <p className='book-genre'>{genre}</p>
        </div>
        {isLoanedBook &&
          <div className='mt-3 w-full'>
            <div className='book-loaned'>
              <Image 
              width={18}
              height={18}
              alt="calendar"
              src="/icons/calendar.svg"
              className='object-contain'
              />
              <p className='text-light-100'>
                11 days left to return
              </p>
            </div>
            <button className='book-btn'>
              Download receipt
            </button>
          </div>
        }
      </li>
    </div>
  )
}

export default BookCard