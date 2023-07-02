const ThumbsDown = ({...props}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 256 256"
            {...props}
        >
            <path
                fill="currentColor"
                d="M239.82 157l-12-96A24 24 0 00204 40H32a16 16 0 00-16 16v88a16 16 0 0016 16h43.06l37.78 75.58A8 8 0 00120 240a40 40 0 0040-40v-16h56a24 24 0 0023.82-27zM72 144H32V56h40zm150 21.29a7.88 7.88 0 01-6 2.71h-64a8 8 0 00-8 8v24a24 24 0 01-19.29 23.54L88 150.11V56h116a8 8 0 017.94 7l12 96a7.87 7.87 0 01-1.94 6.29z"
            />
        </svg>
    )
  }
  
  export default ThumbsDown