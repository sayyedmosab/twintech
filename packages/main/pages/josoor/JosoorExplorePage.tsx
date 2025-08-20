import React, { useEffect } from 'react';
import SimpleHeader from '../../components/SimpleHeader';
import Frame from '../../components/Frame';
import TextBlock from '../../components/TextBlock';

const JosoorExplorePage: React.FC = () => {
    useEffect(() => {
        document.title = 'AI Twin Tech - Josoor';
    }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // IMPORTANT: For security, always verify the origin of the message.
      // if (event.origin !== 'https://your-component-url.com') return;

      const { type, payload } = event.data;
      if (type === 'NAVIGATE_TO_LESSON') {
        console.log('Received navigation command for lesson:', payload.lessonId);
        // In a real app, you might use this to update parent state
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="bg-gray-900">
      <SimpleHeader logoSrc="/images/josoorlogo.png" logoAlt="Josoor" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">eXplore: Thinking like an Architect</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">Dive deep into the foundational concepts of the Josoor Digital Twin from an architect's perspective.</p>

            {/* "Think like an Architect" Section with iframe integration */}
            <Frame layout="vertical" gap="4" justify="start" align="stretch" padding="8" width="full" bgColor="white" border="true" shadow="md" className="rounded mb-16">
                <TextBlock 
                    heading="The Learning Navigator"
                    content={`To the "Site Building AI" : This frame is intended to hold an integration with the ai-powered-learning-navigator component. 
List visibly on the web page the content under "Custom Component: ai-powered-learning-navigator" and under "Genai Logic" in this page.`}
                    maxWidth='full'
                />
                <div className="w-full h-[75vh] border border-gray-300 rounded-lg overflow-hidden">
                    <iframe
                        id="learning-navigator"
                        src="/ai-powered-learning-navigator?integration=true"
                        title="AI Powered Learning Navigator"
                        className="w-full h-full"
                    />
                </div>
                <div className='mt-4 p-4 bg-blue-50 border border-blue-200 rounded text-blue-800'>
                    <h3 className='font-bold'>Note for Developers</h3>
                    <p>The component above is integrated via an iframe. Ensure the `API_KEY` environment variable is correctly set for GenAI features within the component to function.</p>
                </div>
            </Frame>
        </div>
    </div>
  );
};

export default JosoorExplorePage;