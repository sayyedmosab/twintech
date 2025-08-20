import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  imageUrl?: string;
  videoUrl?: string;
  align?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  imageUrl,
  videoUrl,
  align = 'center',
}) => {
  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  const buttonClasses = "w-auto px-8 py-3 bg-electric-blue-600 text-white font-bold rounded-md shadow-md hover:bg-electric-blue-700 transition-all duration-300";

  return (
    <div className="relative w-full min-h-[60vh] flex">
      {/* Video Background */}
      {videoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Image Background (fallback or when no video) */}
      {!videoUrl && imageUrl && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center ${alignClasses[align]}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          {subtitle}
        </p>
        {buttonText && (
          buttonHref ? (
            <Link to={buttonHref} className={buttonClasses}>
              {buttonText}
            </Link>
          ) : (
            <button className={buttonClasses}>
              {buttonText}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Hero;