import React from 'react'
import classNames from 'classnames'

const Action = ({ children, className, onClick, icon: Icon = null}) => {
  return (
    <div
      onClick={onClick}
      className={classNames('dropdown-action', className)}
    >
      { Icon && (
        <div className='icon-box'>
          <Icon />
        </div>
      ) }
      { children }
    </div>
  )
}

export default React.memo(Action)
