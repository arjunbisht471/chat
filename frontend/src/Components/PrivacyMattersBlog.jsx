import React from 'react';
import "./blog-styles.css"; 


function PrivacyMattersBlog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back to Home Button */}
      <a href="/" className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        <span>Back to Home</span>
      </a>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src="/api/placeholder/800/400" 
          alt="Privacy in Online Chats" 
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Why Privacy Matters in Online Chats</h1>
          
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span className="mr-4">March 10, 2025</span>
            <span>By PerfectChat Team</span>
          </div>
          
          <article className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              In an era where digital communication has become our primary means of connection, 
              the privacy of these interactions has never been more crucial. Online chat platforms 
              facilitate countless conversations every day, but not all of them offer the same level 
              of privacy protection.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The Value of Anonymous Communication</h2>
            <p className="text-gray-700 leading-relaxed">
              Anonymous chatting provides a unique space where individuals can express themselves 
              without the burden of their identity. This freedom allows for more honest conversations, 
              especially about sensitive topics that people might be hesitant to discuss when their 
              identity is known.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Encryption: Your Digital Shield</h2>
            <p className="text-gray-700 leading-relaxed">
              End-to-end encryption ensures that only the communicating users can read the messages. 
              Even if the data is intercepted during transmission, it appears as unintelligible code 
              to anyone without the proper decryption keys. This technology forms the backbone of 
              truly private communication.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Collection Practices</h2>
            <p className="text-gray-700 leading-relaxed">
              Many chat platforms collect user data for various purposes, including improving services 
              and targeted advertising. It's essential to be aware of what information is being collected 
              about you and how it's being used. Always check the privacy policy of any chat service 
              before sharing personal information.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The Right to Be Forgotten</h2>
            <p className="text-gray-700 leading-relaxed">
              Privacy includes the ability to delete your digital footprint when desired. Look for 
              platforms that allow you to delete your messages and account information permanently, 
              rather than those that retain data indefinitely.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">PerfectChat's Commitment to Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              At PerfectChat, we believe that private communication is a fundamental right. Our platform 
              is designed with privacy at its core, offering anonymous chatting options, minimal data 
              collection, and the ability to delete your conversation history at any time.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-6 font-medium">
              Remember, in the digital world, privacy isn't just about having "nothing to hide" — it's 
              about having control over what you choose to reveal and to whom. Choose your chat platforms 
              wisely, and always prioritize those that respect and protect your privacy.
            </p>
          </article>
          
          {/* Share and Subscribe Section */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Share Article
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Save for Later
                </button>
              </div>
              <a href="/blog" className="text-blue-600 hover:underline">
                View More Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyMattersBlog;