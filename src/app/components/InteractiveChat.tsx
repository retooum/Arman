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
            <path d={svgPaths.p32e63500} fill="url(#paint0_linear_1_59)" id="Vector" opacity="0.25" />
            <path d={svgPaths.p3a848280} fill="url(#paint1_linear_1_59)" id="Vector_2" opacity="0.25" />
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
        <div className="flex-none h-[1040.419px] rotate-[65deg] w-[1066.91px]" style={{ animation: 'rotate 25s linear infinite' }}>
          <Blob />
        </div>
      </div>
    </div>
  );
}

function BtnSend({ onClick, hasInput }: { onClick: () => void; hasInput: boolean }) {
  return (
    <button 
      onClick={onClick}
      className="h-[43.709px] w-[43.57px] cursor-pointer transition-opacity duration-200 flex-shrink-0" 
      style={{ opacity: hasInput ? 1 : 0.1 }}
      data-name="btn.Send"
    >
      <div className="absolute inset-[-18.3%_-34.92%_-51.46%_-35.04%]">
        <svg className="block size-full" xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
          <foreignObject x="4.45563e-05" y="-3.27002" width="80.8504" height="84.2591"><div xmlns="http://www.w3.org/1999/xhtml" style={{"backdropFilter":"blur(6px)", "clipPath":"url(#bgblur_0_54_82_clip_path)", "height":"100%", "width":"100%"}}></div></foreignObject>
          <g filter="url(#filter0_di_54_82)" data-figma-bg-blur-radius="12">
            <rect x="16.67" y="8.72998" width="47.5704" height="47.7091" rx="23.7852" fill="#E27070" fillOpacity="0.7"/>
            <rect x="18.67" y="10.73" width="43.5704" height="43.7091" rx="21.7852" stroke="url(#paint0_linear_54_82)" strokeWidth="4"/>
          </g>
          <path d="M50.7309 24.5836C51.2515 21.5 39.6394 27.9499 32.1306 31.7578C29.1148 33.4298 29.9953 36.598 31.9055 35.7965L43.2351 31.0426C40.4584 33.3552 36.7056 38.4407 37.5908 40.0374C38.476 41.634 43.4333 44.05 44.1401 41.9147C44.8469 39.7794 50.2103 27.6673 50.7309 24.5836Z" fill="white"/>
          <defs>
            <filter id="filter0_di_54_82" x="4.45563e-05" y="-3.27002" width="80.8504" height="84.2591" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="-0.03" dy="7.91"/>
              <feGaussianBlur stdDeviation="8.32"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.12 0 0 0 0 0.15 0 0 0 0 0.53 0 0 0 0.0676 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_82"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_82" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_innerShadow_54_82"/>
              <feOffset dx="0.015" dy="0.045"/>
              <feGaussianBlur stdDeviation="6.24"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.0663 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_54_82"/>
            </filter>
            <clipPath id="bgblur_0_54_82_clip_path" transform="translate(-4.45563e-05 3.27002)"><rect x="16.67" y="8.72998" width="47.5704" height="47.7091" rx="23.7852"/>
            </clipPath>
            <linearGradient id="paint0_linear_54_82" x1="32.9337" y1="55.2149" x2="48.0558" y2="9.98053" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.8"/>
              <stop offset="0.5" stopColor="#B3B3B3" stopOpacity="0.104"/>
              <stop offset="1" stopColor="white" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </button>
  );
}

function ChatItem({ message, isUser }: { message: string; isUser: boolean }) {
  // Mobile: allow bubbles to shrink and wrap; desktop keeps intended max width
  const baseStyle = "backdrop-blur-[6.5px] content-stretch flex items-start pb-[23px] pt-[19px] px-[23px] relative rounded-[23px] max-w-full lg:max-w-[600px] animate-[slideIn_0.3s_ease-out]";
  
  const userBg = "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 583 88\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.05000000074505806\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(38.594 6.667 -44.169 3.6995 156.58 24.336)\\'><stop stop-color=\\'rgba(243,211,211,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(210,151,151,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(156.979deg, rgba(255, 219, 204, 0.65) 2.4694%, rgba(216, 160, 136, 0.65) 96.871%)";
  
  const aiBg = "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 583 88\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.05000000074505806\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(38.594 6.667 -44.169 3.6995 156.58 24.336)\\'><stop stop-color=\\'rgba(243,211,211,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(210,151,151,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 100%)";

  return (
    <div 
      className={`${baseStyle} ${isUser ? 'justify-end' : ''}`}
      data-name="Chat item" 
      style={{ backgroundImage: isUser ? userBg : aiBg }}
    >
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[23px] shadow-[-0.03px_7.91px_16.64px_0px_rgba(31,38,135,0.07)]" />
      <p className={`css-ew64yg font-['Jost',sans-serif] font-normal leading-[normal] max-w-full lg:max-w-[537px] break-words whitespace-pre-wrap relative text-[#06041c] text-[16px] ${isUser ? 'text-right' : ''}`}>
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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const maxInputHeight = 150; // ~7-8 lines at current text size

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Auto-size input up to maxInputHeight
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const newHeight = Math.min(el.scrollHeight, maxInputHeight);
    el.style.height = `${newHeight}px`;
    el.style.overflowY = 'hidden';
  }, [inputValue]);

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
    <div 
      className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden px-[16px] md:px-0 pt-[20px] pb-[20px] lg:pt-[25px] lg:py-[70px]" 
      data-name="chat"
      style={{ backgroundImage: "linear-gradient(130.219deg, rgb(239, 243, 250) 0%, rgb(235, 240, 249) 44.749%, rgb(239, 243, 250) 91.253%)" }}
    >
      {/* Chat Box Container - Gradient Border Wrapper */}
      <div 
        className="relative w-full md:w-[90%] lg:w-[749.214px] flex-shrink-0 lg:my-[20px] lg:ml-auto lg:mr-[40px] p-[5px] rounded-[29px] h-[calc(100vh-40px)] lg:h-[calc(100vh-140px)]"
        style={{ 
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(179, 179, 179, 0.104) 50%, rgba(255, 255, 255, 0.8))"
        }}
      >
        <div 
          className="relative w-full h-full flex flex-col rounded-[24px] backdrop-blur-[6.5px] shadow-[-0.03px_7.91px_16.64px_0px_rgba(31,38,135,0.07)]"
          data-name="Chat Box" 
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 100%)"
          }}
        >
        {/* Blob background */}
        <div className="absolute inset-0 overflow-hidden rounded-[29px] pointer-events-none">
          <Blob1 />
        </div>

        {/* Header */}
        <div className="relative pt-[27.65px] pb-[27px] text-center z-10">
          <p className="css-ew64yg font-['Gilroy',sans-serif] font-semibold leading-[normal] text-[#282828] text-[14px]">
            Chat with Arman Khlkhatian
          </p>
        </div>

        {/* ChatBox Messages */}
        <div 
          ref={chatBoxRef}
          className="relative flex-1 flex flex-col gap-[25px] items-start overflow-y-auto overflow-x-hidden px-[32px] pb-[20px] lg:pb-[40px] z-10 scroll-smooth pr-[16px] custom-scrollbar" 
          data-name="ChatBox"
          style={{
            scrollbarWidth: '3px',
            scrollbarColor: '#D9D9D9 transparent',
            scrollBehavior: 'smooth',
            paddingRight: '2px'
          }}
        >
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex flex-col ${msg.isUser ? 'items-end pr-[10px]' : 'items-start pr-[50px] lg:pr-[80px]'} w-full`}
            >
              <ChatItem message={msg.text} isUser={msg.isUser} />
            </div>
          ))}
          {isTyping && (
            <div className="flex flex-col items-start w-full">
              <TypingIndicator />
            </div>
          )}
        </div>

        {/* Input Container */}
        <div className="relative px-[13px] lg:px-[20px] pt-[10px] pb-[30px] z-10">
          <div className="relative min-h-[50px] h-auto backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] border-4 border-[rgba(255,255,255,0.8)] rounded-[35.275px] shadow-[-0.03px_7.91px_16.64px_0px_rgba(31,38,135,0.07)] flex items-center py-[8px]" data-name="Input">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0.015px_0.045px_12.48px_8px_rgba(255,255,255,0.07)]" />
            <textarea
              ref={inputRef}
              rows={1}
              spellCheck="false"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What's your favorite design framework?"
              className="flex-1 w-full px-[33.2px] pr-[70px] py-[0px] css-ew64yg font-['Jost',sans-serif] font-medium leading-[normal] text-[#06041c] placeholder:text-[#bababa] text-[16px] bg-transparent border-none outline-none relative z-10 resize-none overflow-hidden"
              style={{ boxSizing: 'border-box', caretColor: '#8C8C8C', height: '34px' }}
            />
            <div className="absolute right-[2.32px] top-1/2 -translate-y-1/2 z-10">
              <BtnSend onClick={handleSend} hasInput={inputValue.trim().length > 0} />
            </div>
          </div>
        </div>

        {/* Inner shadow */}
        <div className="absolute inset-0 pointer-events-none rounded-[24px] shadow-[inset_0.015px_0.045px_12.48px_0px_rgba(255,255,255,0.07)]" />
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
