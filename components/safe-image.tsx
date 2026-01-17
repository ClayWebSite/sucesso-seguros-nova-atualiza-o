"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export function SafeImage({ src, alt, fallbackSrc = "/fallback-mechanism.png", ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true)
          setImgSrc(fallbackSrc)
        }
      }}
      loading={props.priority ? undefined : "lazy"}
      placeholder={props.placeholder || "empty"}
    />
  )
}
