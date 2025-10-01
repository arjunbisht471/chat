import React from "react";
import PrivacyMattersBlog from "./PrivacyMattersBlog";
import MentalHealthBenefitsBlog from "./MentalHealthBenefitsBlog";
import OnlineSafetyTipsBlog from "./OnlineSafetyTipsBlog";
import UltimatePlatform from "./UltimatePlatform";
import TalkToStrangersAtLiveChats from "./TalkToStrangersAtLiveChats";
import MakeFriendsInNewCity from "./MakeFriendsInNewCity";
import HowPerfectChatHelpsYouBuildSocialConfidence from "./HowPerfectChatHelpsYouBuildSocialConfidence";
import BreakingTheIceDaily from "./BreakingTheIceDaily";

function BlogPage({ blogId }) {

  const currentBlogId = blogId || "";
 
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    window.history.pushState({}, "", `/blog/${id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };


  const renderBlog = () => {
    try {
      switch (currentBlogId) {
        case "privacy-matters":
          return <PrivacyMattersBlog />;
        case "mental-health-benefits":
          return <MentalHealthBenefitsBlog />;
        case "online-safety-tips":
          return <OnlineSafetyTipsBlog />;
        case "ultimate-platform":
          return <UltimatePlatform />;
        case "talk-to-strangers-at-live-chats-rooms":
          return <TalkToStrangersAtLiveChats />;
        case "make-friends-in-new-city":
          return <MakeFriendsInNewCity />;
          case "how-perfect-chat-helps-you-build-social-confidence":
            return <HowPerfectChatHelpsYouBuildSocialConfidence />;
             case "breaking-the-ice-daily":
            return <BreakingTheIceDaily />;
        default:
          return (
            <div className="blog-not-found">
              <h1>Blog Not Found</h1>
              <p>Sorry, the blog you're looking for doesn't exist or has been moved.</p>
              <a href="/" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", "/");
                window.dispatchEvent(new PopStateEvent('popstate'));
              }} className="back-to-home">Back to Home</a>
            </div>
          );
      }
    } catch (error) {
      console.error("Error rendering blog:", error);
      return (
        <div className="blog-error">
          <h1>Error Loading Blog</h1>
          <p>There was a problem loading this blog content. Please try again later.</p>
        </div>
      );
    }
  };

  const showNavigation = currentBlogId !== "";

  return (
    <div className="blog-page">
      <div className="blog-container">
        {renderBlog()}
        
        {showNavigation && (
          <div className="blog-navigation">
            <h3>More Articles</h3>
            <div className="related-blogs">
              <a 
                href="/blog/privacy-matters" 
                className={`related-blog-link ${currentBlogId === 'privacy-matters' ? 'current' : ''}`}
                onClick={(e) => handleLinkClick(e, 'privacy-matters')}
              >
                Why Privacy Matters in Online Chats
              </a>
              <a 
                href="/blog/mental-health-benefits" 
                className={`related-blog-link ${currentBlogId === 'mental-health-benefits' ? 'current' : ''}`}
                onClick={(e) => handleLinkClick(e, 'mental-health-benefits')}
              >
                How Anonymous Chatting Can Help Mental Health
              </a>
              <a 
                href="/blog/online-safety-tips" 
                className={`related-blog-link ${currentBlogId === 'online-safety-tips' ? 'current' : ''}`}
                onClick={(e) => handleLinkClick(e, 'online-safety-tips')}
              >
                Online Safety Tips for Anonymous Chatting
              </a>
              <a 
                href="/blog/ultimate-platform" 
                className={`related-blog-link ${currentBlogId === 'ultimate-platform' ? 'current' : ''}`}
                onClick={(e) => handleLinkClick(e, 'ultimate-platform')}
              >
                PerfectChat: The Ultimate Anonymous Chat Platform
              </a>
              <a 
                href="/blog/talk-to-strangers-at-live-chats-rooms" 
                className={`related-blog-link ${currentBlogId === 'talk-to-strangers-at-live-chats-rooms' ? 'current' : ''}`}
                onClick={(e) => handleLinkClick(e, 'talk-to-strangers-at-live-chats-rooms')}
              >
                Talk to Strangers at Live Chat Rooms Online
              </a>
              <a 
                href="/blog/make-friends-in-new-city" 
                className={`related-blog-link ${currentBlogId === 'make-friends-in-new-city' ? 'current' : ''}`}
                onClick={(e) => handleLinkClick(e, 'make-friends-in-new-city')}
              >
                Make Friends In New City Or Town
              </a>
               <a 
                href="/blog/breaking-the-ice-daily" 
                className={`related-blog-link ${currentBlogId === 'breaking-the-ice-daily' ? 'current' : ''}`}
                onClick={(e) => handleLinkClick(e, 'breaking-the-ice-daily')}
              >
                Make Friends In New City Or Town
              </a>
              <a 
  href="/blog/how-perfect-chat-helps-you-build-social-confidence" 
  className={`related-blog-link ${currentBlogId === 'how-perfect-chat-helps-you-build-social-confidence' ? 'current' : ''}`}
  onClick={(e) => handleLinkClick(e, 'how-perfect-chat-helps-you-build-social-confidence')}
>
How PerfectChat Helps You Build Social Confidence
</a>

            </div>
            <div className="back-to-home-container">
              <a 
                href="/" 
                className="back-to-home"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/");
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
              >
                ← Back to Home
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;