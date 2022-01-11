import React, {
  forwardRef,
  useState,
  useCallback,
  useImperativeHandle,
  Fragment,
  useEffect,
  useRef,
  memo,
} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import useWindowSize from '../../../hooks/useWindowSize'
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect'
import './Dropdown.scss';

export interface DropdownRef {
  show(element: Event): void,
  hide(): void
}

const Dropdown = forwardRef<DropdownRef, any>(({ children, className }, ref) => {
  const [position, setPosition] = useState({ y: 0, x: 0 })
  const [isVisible, toggleDropdown] = useState(false)
  const [parent, setParent] = useState(null)
  const dropdownRef = useRef<any>()
  const size = useWindowSize()
  const [style, updateStyle] = useState({})
  const [isMount, toggleIsMount] = useState(false)
  useIsomorphicLayoutEffect(() => {
    if (!document.getElementById('dropdown-root')) {
      const dropdownRoot = document.createElement('div');
      dropdownRoot.id = 'dropdown-root'
      document.getElementById('root').prepend(dropdownRoot)
    }
    if (parent) {
      const hoverRect = parent.getBoundingClientRect()
      const { current: dropdownElement } = dropdownRef

      if (hoverRect !== null && dropdownElement !== null) {
        let x = 0
        let y = 0

        const docHeight = document.documentElement.clientHeight

        const lx = hoverRect.x
        const ty = hoverRect.y
        const by = hoverRect.y + hoverRect.height

        const ttRect = dropdownElement.getBoundingClientRect()

        const bAbove = (ty - ttRect.height) >= 0
        const bBellow = (by + ttRect.height) <= (window.scrollY + docHeight)

        if (bBellow) {
          y = by
          x = lx + (hoverRect.width - ttRect.width)

          if (x < 0) {
            x = lx
          }
        } else if (bAbove) {
          y = ty - ttRect.height
          x = lx + (hoverRect.width - ttRect.width)

          if (x < 0) {
            x = lx
          }
        }

        setPosition({ x, y })
      }
    }
  }, [parent])

  useIsomorphicLayoutEffect(() => {
    toggleIsMount(true)
  }, [])

  useIsomorphicLayoutEffect(() => {
    updateStyle({
      left: (`${(position.x + window.scrollX)}px`),
      top: (`${(position.y + window.scrollY)}px`)
    })
  }, [position])
  const hide = useCallback(() => {
    if (isVisible) {
      toggleDropdown(false)
      setParent(null)
    }
  }, [isVisible, toggleDropdown])

  const show = useCallback((element: Event) => {
    if (isVisible) {
      setParent(null)
      toggleDropdown(false)
    } else {
      setParent(element.currentTarget)
      setTimeout(() => toggleDropdown(true))
    }
  }, [setParent, isVisible, toggleDropdown])

  useImperativeHandle(ref, () => ({
    show,
    hide
  }))

  useEffect(() => hide(), [size])

  const isModal = ['XS'].includes(size)
 
  const dropdown = (
    <Fragment>
      <div
        className={classNames('dropdown', className, {
          'is-visible': isVisible,
          'is-modal': isModal
        })}
        style={!isModal ? style : {}}
        ref={dropdownRef}
      >
        <div className='dropdown-content'>
          { children }
        </div>
        { isModal && (
          <div
            role='button'
            onClick={() => hide()}
            className='dropdown-modal-close'
          >
            Cancelar
          </div>
        )}
      </div>
      <div
        className={classNames('dropdown-overlay', {
          'is-visible': isVisible,
          'is-modal': isModal
        })}
        onClick={() => hide()}
      />
    </Fragment>
  )

  return isMount ? ReactDOM.createPortal(dropdown, document.getElementById('dropdown-root')) : null
})

export default memo<any>(Dropdown)
