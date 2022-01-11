import React from 'react'
import classNames from 'classnames'

const Header = ({ children, className }) => {
  return (
    <div className={classNames('dropdown-header', className)}>
      { children }
    </div>
  )
}

export default React.memo(Header)
