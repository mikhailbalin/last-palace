import React from 'react';
import { Footer } from '../containers/Footer';
import { HeroHome } from '../containers/HeroHome';

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main
        className="flex-grow bg-cover"
        style={{
          backgroundImage:
            'url(https://source.unsplash.com/tqu0IOMaiU8/1600x900)',
        }}
      >
        <HeroHome />
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
