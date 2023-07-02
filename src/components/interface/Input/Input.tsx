import React, { InputHTMLAttributes, ReactNode, forwardRef, useRef } from 'react'
import classnames from 'classnames'
import { mergeRefs } from 'react-merge-refs'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string | ReactNode
  placeholder?: string
  icon?: string | ReactNode
  placement?: 'start' | 'end'
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = forwardRef((props, ref) => {
  const {
    className,
    label,
    placeholder,
    icon = null,
    placement = 'start',
    onChange,
    type = 'text',
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    return null
  }

  return (
    <label className='flex flex-col items-start'>
      {label && <span className='text-text text-sm font-medium mb-2'>{label}</span>}
      <div className={classnames('w-full h-10 relative bg-transparent border border-text rounded-md', className)}
      >
        {icon && (
            <span className={classnames('absolute  -translate-y-1/2 top-1/2',
              { 
                'ml-4 left-0':  placement === 'start',
                'mr-4 right-0':  placement === 'end',
              }
              )}
            >
                {icon}
            </span>
        )}
        <input
            className={classnames(
            'w-full h-full p-2 text-text text-sm focus:outline-none outline-none placeholder:text-sm placeholder:opacity-50 rounded-md',
            {
                '!pl-12': icon && placement === 'start',
                '!pr-12': icon && placement === 'end'
            }
            )}
            placeholder={placeholder}
            onChange={handleOnChange}
            type={type}
            autoComplete="on"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            ref={mergeRefs([ref, inputRef])}
            {...rest}
        />
      </div>
    </label>
  )
})

export default Input
