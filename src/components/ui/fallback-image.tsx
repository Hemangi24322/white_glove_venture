import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

const FallbackImage: React.FC<ImageProps> = (props) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {props.alt}
      </div>
    );
  }

  return <Image {...props} onError={() => setError(true)} />;
};

export default FallbackImage;
