import React from 'react';
import SimpleHeader from '../../components/SimpleHeader';
import Frame from '../../components/Frame';
import TextBlock from '../../components/TextBlock';

const JosoorExploreSystemsPage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <SimpleHeader logoSrc="/images/josoorlogo.png" logoAlt="Josoor" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">eXplore: The System of Systems</h1>
            <Frame layout="vertical" gap="4" justify="start" align="stretch" padding="8" width="full" bgColor="white" border="true" shadow="xl" className="rounded">
                <TextBlock
                    heading='A "System of Systems" Design'
                    content={`DT Design followed a bottom up approach creating mini-DTs of the components of the main DT due to the variety of these elements, their attributes and behavior

Along the process, three design principles were applied strictly to ensure an Enterprise Grade system trusted at the government level: 
1- Context and Data go hand in hand. Jointly, the Database was designed to tell the Context of the transformation through the relations and flow. Thus, making the database intuitive to understand and impossible to ignore. 

2- Real-time integration with backend systems: project, HR, and IT systems—feeding live operational data, risks, and progress.

3- A variety of AI-powered interfaces for chat, reporting, and simulation—making the entire organization navigable and transparent in real time.`}
                    maxWidth='full'
                />
            </Frame>
        </div>
    </div>
  );
};

export default JosoorExploreSystemsPage;
