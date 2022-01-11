/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageNext from 'next/image'
import React, { ReactElement, memo } from 'react'
const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3001${src}?w=${width}&q=${quality || 75}`
}
const Image = ({ src, ...props }: any & { src: string }): ReactElement => {
  return src ? (
    <ImageNext loading="eager" {...props} src={src} loader={myLoader} />
  ) : null
}

export default memo(Image)
