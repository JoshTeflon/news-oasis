const Star = ({...props}) => {
    return (
        <svg
            width={16}
            height={14}
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.986.288a.32.32 0 00-.292.22L6.188 5.18 1.28 5.17a.32.32 0 00-.188.58l3.976 2.877-1.527 4.666a.32.32 0 00.493.358L8 10.758l3.966 2.893a.32.32 0 00.492-.358l-1.527-4.666 3.977-2.877a.32.32 0 00-.188-.58l-4.907.01L8.303.51V.508a.32.32 0 00-.317-.221z"
                fill="currentColor"
            />
        </svg>
    )
  }
  
  export default Star