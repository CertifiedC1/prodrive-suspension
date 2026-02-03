import { useEffect, useRef, useState } from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
}

const AutoPlayVideo = ({ src, className = '' }: AutoPlayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            video.play().catch(() => {
              // Autoplay may fail due to browser policies
              console.log('Autoplay prevented by browser');
            });
          } else {
            setIsVisible(false);
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      playsInline
      controls
      preload="metadata"
      className={`${className} ${isVisible ? 'opacity-100' : 'opacity-95'}`}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoPlayVideo;
