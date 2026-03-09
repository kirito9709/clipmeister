import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <header>
                <img src="path_to_clipmeister_logo.png" alt="ClipMeister Logo" />
                <h1>Welcome to ClipMeister</h1>
            </header>
            <main>
                <button onClick={() => window.open('https://youtube.com', '_blank')}>YouTube</button>
                <button onClick={() => window.open('https://story-link.com', '_blank')}>Story</button>
                
                <h2>Features</h2>
                <ul>
                    <li>Feature 1: Description of feature 1</li>
                    <li>Feature 2: Description of feature 2</li>
                    <li>Feature 3: Description of feature 3</li>
                    {/* Add more features as needed */}
                </ul>
            </main>
        </div>
    );
};

export default Page;