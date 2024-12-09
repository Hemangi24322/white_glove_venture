import Image from 'next/image'

export default function ImageComponent() {
  return (
    <div className="grid gap-4">
      {/* Correct way to use placeholder images */}
      <Image 
        src="/placeholder.svg?height=400&width=400"
        alt="Placeholder image"
        width={400}
        height={400}
        className="rounded-lg"
      />

      {/* For smaller images */}
      <Image 
        src="/placeholder.svg?height=64&width=64"
        alt="Small placeholder"
        width={64}
        height={64}
        className="rounded-lg"
      />
    </div>
  )
}

