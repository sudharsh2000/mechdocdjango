import React from 'react'

function InputField({value,setValue,formtype, filetype,placeholder,errortype, errorvalue,setErrorValue}) {
  const handleChange = (e) => {
    const { name, files, value: inputValue } = e.target
    
    if (filetype === 'File') {
      // ✅ For files, use files[0]
      if (files && files.length > 0) {
        setValue(prev => ({
          ...prev,
          [name]: files[0]
        }))
      }
    } else {
      // ✅ For text inputs, use value
      setValue(prev => ({
        ...prev,
        [name]: inputValue
      }))
    }
  }

  const handleFocus = () => {
    setErrorValue(prev => ({
      ...prev,
      [value]: ''
    }))
  }
  return (
    <div className='flex flex-col py-2 lg:py-1 gap-4 lg:gap-5 lg:px-3'>
    <label htmlFor={value} className='text-buttoncolor font-mono text-sm lg:text-base px-1   accent-green-500'>{placeholder}</label>
  
  {filetype === 'File' ? (
        <div>
          <input 
            type="file"
            name={value}
            onChange={handleChange}
            onFocus={handleFocus}
            accept={value === 'shop_image' ? 'image/*' : '*'}
            style={{ accentColor: '#FF0000' }} 
            className='bg-secondary-50 font-mono text-gray-300 outline-none border border-gray-600 p-3 rounded-md w-full cursor-pointer'
          />
          {/* ✅ Show file name if selected */}
          {formtype[value] && (
            <p className='text-green-500 text-sm font-mono mt-2'>
              ✓ {formtype[value].name}
            </p>
          )}
        </div>
      ) : (
        <input 
          type={filetype}
          name={value}
          placeholder={placeholder}
          value={formtype[value] || ''}  // ✅ Only for text inputs
          onChange={handleChange}
          onFocus={handleFocus}
          style={{ accentColor: '#FF0000' }} 
          className='bg-secondary-50 font-mono text-gray-300 outline-none border border-gray-600 p-3 rounded-md'
        />
      )}  <span className='text-red-500 text-sm font-mono'>{errorvalue}</span>
    </div>
  )
}

export default InputField