import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import classnames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: 'primary' | 'naked' | 'link'
    type?: 'submit' | 'reset' | 'button'
    loading?: boolean
    disabled?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, className, variant = 'primary', type = 'button', loading, disabled, size = 'lg', ...rest } = props

    return (
        <button
            className={classnames(
                className, 'w-full p-2 font-medium rounded-md hover:opacity-90 focus:outline-none focus:opacity-80 active:-translate-y-0.5 outline-none transition-all',
                {'bg-secondary text-white': variant === 'primary'},
                {'!w-auto h-auto bg-transparent border-none shadow-none outline-none py-0 px-0': variant === 'naked'},
                {'!w-auto h-auto bg-transparent border-none shadow-none outline-none py-0 px-0 underline': variant === 'link'},
                {'opacity-70 hover:opacity-70 active:translate-y-0 cursor-not-allowed': disabled},
                {'text-base md:text-lg': size === 'lg'},
                {'text-sm md:text-base': size === 'md'},
                {'text-sm': size === 'sm'},
                {'text-xs': size === 'xs'}
            )}
            type={type}
            disabled={loading || disabled}
            {...rest}
        >
            {loading ? <span className='text-xs'>Loading...</span> : children}
        </button>
    )
}

export default Button;