import React, { useEffect } from 'react';
import Frame from '../components/Frame';
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';
import SimpleHeader from '../components/SimpleHeader';
import { visionBackgroundImage } from '../assets/imageData';
import { PenTool, Wand2, ArrowRight, Sparkles, Users, Zap } from 'lucide-react';

const ImageTextSection: React.FC<{
  heading: string;
  content: string;
  buttonText: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
}> = ({ heading, content, buttonText, imageUrl, imagePosition }) => {
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`flex flex-col justify-center ${textOrder}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{heading}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{content}</p>
          <a href="#/josoor" className="w-auto self-start px-6 py-3 bg-electric-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-electric-blue-700 transition-all duration-300">
            {buttonText}
          </a>
        </div>
        <div className={imageOrder}>
          <img src={imageUrl} alt={heading} className="rounded-lg shadow-xl w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};


const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Twin Tech';
  }, []);

  const products = [
    {
      id: 1,
      title: "SketchApp - Vibe Designer",
      description: "The simple and intuitive solution to finally make Vibe Coding work: SketchApp helps you rapidly Vibe Design your idea into specifications AI understands. Drop the outputs (a perfect prompt or React pages) into any AI Site Builder prompt or Coding Agent from the first time, 100% guaranteed, even when using the worst model out there.",
      icon: PenTool,
      status: "Available",
      href: "/sketchapp"
    },
    {
      id: 2,
      title: "Aura - Vibe Manager - Soon",
      description: "Whether specs are ready from SketchApp or you want to type them or even dictate them, Aura is your empowered multi-skilled IT PMO to get your product done as agreed: BA details and fine tunes your requirements including the more technically complex items. Once you approve, it produces the coding plan blueprint and takes over with the coding agent till done",
      icon: Wand2,
      status: "Coming Soon",
      href: "/aura"
    }
  ];

  return (
    <div className="bg-white">
            <SimpleHeader logoSrc="/images/aittlogo.png" logoAlt="AI Twin Tech" />
            <Frame layout="vertical" gap="0" justify="start" align="stretch" padding="0" isSticky="false" width="full" bgColor="slate-100" border="true" shadow="sm">
        <Hero 
            title="Welcome to AI Twin Tech"
            subtitle="Our Mission: In a world of complexities, we focus on innovating simplicity in whole domains, topics, and what lays between them."
            videoUrl="/images/3129576-uhd_2560_1440_30fps.mp4"
            align="center"
        />
        <div className='bg-slate-100'>
            <TextBlock
                heading="Products Portfolio"
                content="This is the jump pad to navigate to our various products. Each link will take you to a separate site and product. Keep checking in for the latest."
                maxWidth="full"
            />
        </div>
      </Frame>
      
      <Frame layout="horizontal" gap="0" justify="start" align="stretch" padding="1" isSticky="false" width="full" bgColor="white" border="true" shadow="sm">
        <ImageTextSection
            heading="Josoor (New)"
            content="Our flagship product to transform Strategy Execution through a Digital Twin of a Government Organization"
            buttonText="Learn More"
            imageUrl="https://picsum.photos/600/400"
            imagePosition="right"
        />
      </Frame>
      
      <Frame layout="horizontal" gap="0" justify="start" align="stretch" padding="0" isSticky="false" width="full" bgColor="white" border="true" shadow="sm">
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map(card => {
              const IconComponent = card.icon;
              return (
                <div key={card.id} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-electric-blue-100 rounded-lg">
                      <IconComponent className="w-8 h-8 text-electric-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{card.title}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        card.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {card.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-grow mb-6">{card.description}</p>
                  <a 
                    href={`#${card.href}`}
                    className="flex items-center gap-2 text-electric-blue-600 hover:text-electric-blue-700 font-semibold transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default HomePage;