import React from "react";

export const MarqueeBar: React.FC = () => {
  // Define the content and repeat it enough times to ensure smooth looping on large screens.
  // The animation slides the content by -50%, so we effectively need "two sets" of the full width content.
  // We repeat the phrase many times to guarantee it covers the screen width.
  const phrase = "Fresh Coffee * Coffee is LIFE * ";
  const repeatCount = 10;
  const content = Array(repeatCount).fill(phrase).join("");

  return (
    <div className="w-full h-[50px] bg-neutral-900 text-white overflow-hidden flex items-center marquee-container relative z-20">
      <div className="animate-marquee whitespace-nowrap will-change-transform">
        {/* We render the content twice inside the flex container if needed, 
            but our repeating strategy above combined with the CSS width: max-content 
            and translateX(-50%) on a very long string usually suffices. 
            However, strictly for the 50% translation logic to be perfectly seamless loop, 
            we usually have two identical blocks. 
        */}
        <span className="text-sm font-bold tracking-[0.2em] uppercase mx-4">
          {content}
        </span>
        <span className="text-sm font-bold tracking-[0.2em] uppercase mx-4">
          {content}
        </span>
      </div>
    </div>
  );
};
