import React, { useEffect } from 'react';
import SimpleHeader from '../../components/SimpleHeader';

const JosoorVisionPage: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Twin Tech - Josoor Vision';
  }, []);

  const foundersLetterPart1 = `Just over two years ago was my first introduction to GenAI. What started as a basic ask to ChatGPT to design a training program to teach me "AI", continued non-stop over the entire weekend to end with contemplating how unlocking the human potential is not in the pursuit of answers but rather the articulation of the right questions. And from that came the concept of the Living Transformation Network, a semi-sentient network of AIs carrying one mission to improve humanity and life by taking over the complexity of society and daring us to think.

"What do we do with all the spare time we will have?"

That experience changed me forever. I even published the wild interaction in a LinkedIn article , with the aim of helping other skeptic or on the fence seniors to make the jump and embrace AI.

Since then, I have been pursuing that specific concept. Which at its core is "how to make transformation management push back and control the complexity beast?"

I continued to design the model itself. What I concluded, after six months, is although the model is sound, it took all the complexity and stuffed it into the database (good). But to make use of it, significant investments in licenses, infrastructure and security were needed (bad).`;

  const foundersLetterPart2 = `I then kept it as my personal cheat sheet in any new engagement to help me grasp their entire strategy to execution map in one day.

Until a few months back. GenAI started to make significant jumps in capabilities, and the AI development tools and communities advanced with more "no code" solution development. Suddenly, the fire power needed to navigate the complex maze of relations was not only available, but ridiculously affordable. Not only that, but cloud hosting had also a breakthrough with Azure certified by the government after years of a no-cloud hosting policy.

I had no choice, no excuse and no regrets in chasing this dream.

All my career I was a pioneer, but for others' benefit.

This was my chance to flip the script and pioneer with no constraints. In fact, part of the fuel behind this was all the bottled up "red-tape" frustration.

I am pursuing this all the way Inshallah, to the point of being fully dedicated to it. Because once you understand the idea and the benefits it brings to the country, you will conclude that we have an obligation to give it the best chance of success.`;

  return (
    <div className="bg-gray-900">
      <SimpleHeader logoSrc="/images/josoorlogo.png" logoAlt="Josoor" />
        <div className="relative rounded-lg overflow-hidden shadow-2xl min-h-[80vh] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(/images/think.png)` }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-8 md:p-12 text-white container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-electric-blue-400">Founder's Letter: Origins</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <p className="text-xl text-gray-200 text-left leading-relaxed whitespace-pre-line">
                        {foundersLetterPart1}
                    </p>
                    <p className="text-xl text-gray-200 text-left leading-relaxed whitespace-pre-line">
                        {foundersLetterPart2}
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default JosoorVisionPage;