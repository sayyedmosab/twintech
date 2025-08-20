import React from 'react';

interface TextBlockProps {
  heading: string;
  content: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'prose';
  icon?: React.ComponentType<any>;
  iconColor?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ 
  heading, 
  content, 
  maxWidth = 'full', 
  icon: IconComponent,
  iconColor = 'text-electric-blue-600'
}) => {
    const maxWidthClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-full',
        prose: 'max-w-prose',
    };

  return (
    <div className={`py-8 px-4 ${maxWidthClasses[maxWidth]} mx-auto`}>
      <div className="flex items-center gap-3 mb-4">
        {IconComponent && (
          <div className="p-2 bg-electric-blue-50 rounded-lg">
            <IconComponent className={`w-6 h-6 ${iconColor}`} />
          </div>
        )}
        <h2 className="text-3xl font-bold text-gray-900">{heading}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
};

export default TextBlock;
