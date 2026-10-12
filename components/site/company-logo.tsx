import Image from 'next/image'

export function CompanyLogo({
  src,
  alt,
  width = 24,
  height = 24,
  className,
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      className={`shrink-0 object-contain ${className ?? ''}`}
    />
  )
}
