import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <>
        <div className='relative'>
          <input
            className={`mt-1 w-full px-3 py-2 border rounded ${className}`}
            type={type}
            {...props}
            ref={ref}
          />
        </div>
        <small className="text-red-500 mt-1">{error}</small>
      </>
    )
  }
)

export default Input