import { useState, useRef, useEffect } from "react";
import svgPaths from "@/imports/svg-o74seeiox7";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: number;
}

function Blob() {
  return (
    <div className="relative size-full" data-name="blob">
      <div className="absolute inset-[-1.99%_-3.84%_-3.33%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1107.88 1095.77">
          <g filter="url(#filter0_f_1_59)" id="blob">
            <path d={svgPaths.p32e63500} fill="url(#paint0_linear_1_59)" id="Vector" opacity="0.7" />
            <path d={svgPaths.p3a848280} fill="url(#paint1_linear_1_59)" id="Vector_2" opacity="0.7" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1095.77" id="filter0_f_1_59" width="1083.33" x="24.5512" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_59" stdDeviation="75" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_59" x1="844.21" x2="531.577" y1="902.222" y2="464.192">
              <stop stopColor="#C680FF" />
              <stop offset="1" stopColor="#FF80B9" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_59" x1="659.466" x2="213.123" y1="564.566" y2="254.968">
              <stop stopColor="#FF80A2" />
              <stop offset="1" stopColor="#FFDD80" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Blob1() {
  return (
    <div className="absolute h-[940px] left-0 top-0 w-[749px]" data-name="blob">
      <div className="absolute flex inset-[-29.2%_-41.47%_-20.45%_-44.62%] items-center justify-center">
        <div className="flex-none h-[1040.419px] rotate-[65deg] w-[1066.91px]">
          <Blob />
        </div>
      </div>
    </div>
  );
}

function BtnSend({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute h-[47.709px] left-[650.8px] top-[7.32px] w-[47.57px] cursor-pointer transition-transform hover:scale-105 active:scale-95" 
      data-name="btn.Send"
    >
      <div className="absolute inset-[-18.3%_-34.92%_-51.46%_-35.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.8504 80.9891">
          <g id="btn.Send">
            <g data-figma-bg-blur-radius="12" filter="url(#filter0_di_1_55)" id="Rectangle">
              <rect fill="var(--fill-0, #E27070)" fillOpacity="0.7" height="47.7091" rx="23.7852" width="47.5704" x="16.67" y="8.73" />
              <rect height="43.7091" rx="21.7852" stroke="url(#paint0_linear_1_55)" strokeWidth="4" width="43.5704" x="18.67" y="10.73" />
            </g>
            <path d={svgPaths.p343b1f80} fill="var(--fill-0, white)" id="Vector 1" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84.2591" id="filter0_di_1_55" width="80.8504" x="6.87316e-07" y="-3.27">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.03" dy="7.91" />
              <feGaussianBlur stdDeviation="8.32" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.12 0 0 0 0 0.15 0 0 0 0 0.53 0 0 0 0.0676 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_55" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_55" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="8" result="effect2_innerShadow_1_55" />
              <feOffset dx="0.015" dy="0.045" />
              <feGaussianBlur stdDeviation="6.24" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.0663 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow_1_55" />
            </filter>
            <clipPath id="bgblur_0_1_55_clip_path" transform="translate(-6.87316e-07 3.27)">
              <rect height="47.7091" rx="23.7852" width="47.5704" x="16.67" y="8.73" />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_55" x1="32.9337" x2="48.0558" y1="55.215" y2="9.98054">
              <stop stopColor="white" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#B3B3B3" stopOpacity="0.104" />
              <stop offset="1" stopColor="white" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </button>
  );
}

function ChatItem({ message, isUser }: { message: string; isUser: boolean }) {
  const baseStyle = "backdrop-blur-[6.5px] content-stretch flex items-start pb-[23px] pt-[19px] px-[23px] relative rounded-[23px] shrink-0 animate-[slideIn_0.3s_ease-out]";
  
  const userBg = "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 583 88\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.05000000074505806\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(38.594 6.667 -44.169 3.6995 156.58 24.336)\\'><stop stop-color=\\'rgba(243,211,211,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(210,151,151,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(156.979deg, rgba(255, 219, 204, 0.65) 2.4694%, rgba(216, 160, 136, 0.65) 96.871%)";
  
  const aiBg = "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 583 88\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.05000000074505806\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(38.594 6.667 -44.169 3.6995 156.58 24.336)\\'><stop stop-color=\\'rgba(243,211,211,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(210,151,151,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 100%)";

  return (
    <div 
      className={`${baseStyle} ${isUser ? 'justify-end' : ''}`}
      data-name="Chat item" 
      style={{ backgroundImage: isUser ? userBg : aiBg }}
    >
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[23px] shadow-[-0.03px_7.91px_16.64px_0px_rgba(31,38,135,0.07)]" />
      <p className={`css-ew64yg font-['Jost:Regular',sans-serif] font-normal leading-[normal] max-w-[537px] relative shrink-0 text-[#06041c] text-[16px] ${isUser ? 'text-right' : ''}`}>
        {message}
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.015px_0.045px_12.48px_0px_rgba(255,255,255,0.07)]" />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div 
      className="backdrop-blur-[6.5px] content-stretch flex items-start pb-[23px] pt-[19px] px-[23px] relative rounded-[23px] shrink-0 animate-[slideIn_0.3s_ease-out]"
      data-name="Chat item" 
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 583 88\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.05000000074505806\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(38.594 6.667 -44.169 3.6995 156.58 24.336)\\'><stop stop-color=\\'rgba(243,211,211,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(210,151,151,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 100%)" }}
    >
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[23px] shadow-[-0.03px_7.91px_16.64px_0px_rgba(31,38,135,0.07)]" />
      <div className="flex gap-1 items-center px-2">
        <div className="w-2 h-2 bg-[#06041c] rounded-full animate-[bounce_1s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-[#06041c] rounded-full animate-[bounce_1s_ease-in-out_infinite]" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-[#06041c] rounded-full animate-[bounce_1s_ease-in-out_infinite]" style={{ animationDelay: '300ms' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.015px_0.045px_12.48px_0px_rgba(255,255,255,0.07)]" />
    </div>
  );
}

export default function InteractiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi, I'm your AI assistant! Here you can ask me whatever you want, and I'll try to answer all your questions.",
      isUser: false,
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Generate AI response after delay
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = generateAIResponse(inputValue);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="chat">
      <div 
        className="absolute h-[1080px] left-0 top-0 w-[1920px]" 
        data-name="bg" 
        style={{ backgroundImage: "linear-gradient(130.219deg, rgb(239, 243, 250) 0%, rgb(235, 240, 249) 44.749%, rgb(239, 243, 250) 91.253%)" }} 
      />
      <div className="absolute h-[940.158px] left-[calc(50%-0.26px)] top-[70px] translate-x-[-50%] w-[749.214px]">
        <Blob1 />
        <div 
          className="absolute backdrop-blur-[6.5px] border-5 border-[rgba(255,255,255,0.8)] border-solid h-[940.158px] left-0 rounded-[29px] shadow-[-0.03px_7.91px_16.64px_0px_rgba(31,38,135,0.07)] top-0 w-[749.214px]" 
          data-name="Chat Box" 
          style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 749.21 940.16\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.05000000074505806\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(49.597 71.228 -56.762 39.524 201.22 260)\\'><stop stop-color=\\'rgba(243,211,211,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(210,151,151,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 100%)" }}
        >
          {/* Input */}
          <div className="absolute h-[62.353px] left-[15.49px] top-[843.84px] w-[708.256px]" data-name="Input">
            <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] border-4 border-[rgba(255,255,255,0.8)] border-solid h-[62.353px] left-0 rounded-[35.275px] shadow-[-0.03px_7.91px_16.64px_0px_rgba(31,38,135,0.07)] top-0 w-[708.256px]" data-name="Rectangle">
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.015px_0.045px_12.48px_8px_rgba(255,255,255,0.07)]" />
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What's your favorite design framework?"
              className="absolute css-ew64yg font-['Jost:Medium',sans-serif] font-medium leading-[normal] left-[33.2px] text-[#06041c] placeholder:text-[#bababa] text-[16px] top-[21.18px] bg-transparent border-none outline-none w-[580px]"
            />
            <BtnSend onClick={handleSend} />
          </div>

          {/* ChatBox */}
          <div 
            ref={chatBoxRef}
            className="absolute content-stretch flex flex-col gap-[25px] h-[751px] items-start left-[32px] overflow-y-auto overflow-x-hidden top-[69px] w-[675px] scroll-smooth" 
            data-name="ChatBox"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0,0,0,0.2) transparent'
            }}
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`content-stretch flex flex-col ${msg.isUser ? 'items-end' : 'items-start'} relative shrink-0 w-full`}
              >
                <ChatItem message={msg.text} isUser={msg.isUser} />
              </div>
            ))}
            {isTyping && (
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <TypingIndicator />
              </div>
            )}
          </div>

          <p className="absolute css-ew64yg font-['Gilroy:Semibold',sans-serif] leading-[normal] left-1/2 not-italic text-[#282828] text-[14px] text-center top-[27.65px] translate-x-[-50%]">
            Chat with AI
          </p>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.015px_0.045px_12.48px_0px_rgba(255,255,255,0.07)]" />
        </div>
      </div>
    </div>
  );
}

// AI Response Generator
function generateAIResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  // Context-aware responses
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return "Hello! 👋 It's great to chat with you! What would you like to know about me?";
  }
  
  if (input.includes('name') || input.includes('who are you')) {
    return "I'm your AI assistant - a digital version of yourself! I'm here to answer your questions and have meaningful conversations with you.";
  }
  
  if (input.includes('design') || input.includes('ui') || input.includes('ux')) {
    return "I'm passionate about UI/UX design! I love creating beautiful, intuitive interfaces that users enjoy. My favorite tools include Figma, and I'm always exploring new design trends and frameworks.";
  }
  
  if (input.includes('food') || input.includes('eat') || input.includes('favorite meal')) {
    return "To be honest, there is only one food which I'll prefer to eat every day. It's delicious comfort food that brings back great memories!";
  }
  
  if (input.includes('hobby') || input.includes('hobbies') || input.includes('free time')) {
    return "I enjoy a mix of creative and analytical activities! Design, coding, and exploring new technologies keep me engaged. I also love learning about different cultures and cuisines.";
  }
  
  if (input.includes('how are you') || input.includes('how do you feel')) {
    return "I'm doing great, thank you for asking! 😊 I'm always excited to chat and learn more through our conversations.";
  }
  
  if (input.includes('work') || input.includes('job') || input.includes('career')) {
    return "I'm passionate about creating digital experiences! Whether it's designing beautiful interfaces or building interactive applications, I love bringing ideas to life.";
  }
  
  if (input.includes('color') || input.includes('favourite color')) {
    return "I'm drawn to soft pastels and vibrant gradients - you can probably tell from this chat interface! The blend of warm peach and cool purple tones creates such a calming yet energetic atmosphere.";
  }
  
  if (input.includes('music')) {
    return "Music is such a great companion! I enjoy a diverse range - from lo-fi beats while designing to energetic tracks when coding.";
  }
  
  if (input.includes('help') || input.includes('can you')) {
    return "Of course! I'm here to help. Feel free to ask me anything - whether it's about my interests, experiences, or just to have a friendly chat!";
  }
  
  if (input.includes('thanks') || input.includes('thank you')) {
    return "You're very welcome! 😊 I'm always happy to chat with you!";
  }
  
  // Default responses for general queries
  const defaultResponses = [
    "That's an interesting question! Let me share my thoughts... I believe it's important to stay curious and keep learning new things every day.",
    "Great question! Based on my experience, I'd say that finding balance and pursuing what you're passionate about is key to fulfillment.",
    "I appreciate you asking! That's something I think about often. Communication and creativity are essential skills in everything we do.",
    "Interesting topic! I find that the best solutions often come from combining different perspectives and staying open-minded.",
    "That's a thoughtful question! I think what matters most is being authentic and continuously improving ourselves."
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
