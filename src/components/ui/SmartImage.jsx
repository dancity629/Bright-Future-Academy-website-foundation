import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import './SmartImage.css'

/**
 * An <img> that swaps to a branded placeholder if the source fails,
 * so a broken remote image never leaves a hole in the layout.
 */
export default function SmartImage({ src, alt, className = '', fallbackLabel, eager = false, ...rest }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div className={`smart-image smart-image--fallback ${className}`} role="img" aria-label={alt}>
        <ImageOff size={28} aria-hidden="true" />
        {fallbackLabel && <span>{fallbackLabel}</span>}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`smart-image ${className}`}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
