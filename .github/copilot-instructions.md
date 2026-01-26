# Copilot Instructions for AI-Self-Chat Feature

This is a Figma design-driven React + TypeScript chat interface project. It's a Vite-based web application built from Figma design specifications with heavily styled UI components.

## Architecture & Key Concepts

**Project Type**: React 18 + TypeScript + Tailwind CSS v4 + Vite  
**Main Component**: [src/app/components/InteractiveChat.tsx](src/app/components/InteractiveChat.tsx) - the entire application is a single interactive chat interface

**Design-Driven Development**: This project originated from Figma (design file ID: `ID75S7eLWSsZ8egGMXgOIN`). Precise pixel-level styling is intentional:
- Components use explicit `data-name` attributes (e.g., `data-name="Chat item"`, `data-name="blob"`) to match Figma layer names
- Dimensions and positioning are calculated from Figma exports (not semantic)
- SVG paths are externalized in [src/imports/svg-o74seeiox7.ts](src/imports/svg-o74seeiox7.ts)

**UI Component Library**: [Radix UI](src/app/components/ui/) provides the foundation for accessibility, but most visible UI uses Figma-designed custom components, not Radix primitives.

## Critical Files & Responsibilities

- [src/app/App.tsx](src/app/App.tsx) - Simple entry point that renders InteractiveChat
- [src/app/components/InteractiveChat.tsx](src/app/components/InteractiveChat.tsx) - **230+ lines**: Contains chat state (messages array), message rendering (ChatItem/TypingIndicator), auto-scroll logic, input handling, and hardcoded AI response generation
- [src/imports/svg-o74seeiox7.ts](src/imports/svg-o74seeiox7.ts) - SVG path definitions referenced by blob shapes
- [src/styles/](src/styles/) - Tailwind CSS config and theme (fonts.css has Jost/Gilroy custom fonts)

## Development Workflow

**Install & Run**:
```bash
npm i
npm run dev    # Vite dev server on http://localhost:5173
npm run build  # Production build to dist/
```

**Key Config Files**:
- [vite.config.ts](vite.config.ts) - Path alias `@` = `src/`, React + Tailwind plugins (both required even if not actively used)
- [postcss.config.mjs](postcss.config.mjs) - Tailwind v4 via @tailwindcss/vite handles all PostCSS setup automatically

**No Tests**: Project has no test setup; testing is not a current practice here.

## Code Patterns & Conventions

### Message Handling
- Messages stored as array: `{ id, text, isUser, timestamp }`
- User messages: `isUser: true` (right-aligned, warm peach gradient background)
- AI messages: `isUser: false` (left-aligned, white gradient background)
- Typing indicator shown during AI delay (1-1.5s simulated delay before response)

### Styling Approach
- **Tailwind + inline styles**: Combine Tailwind classes with inline `style` props for complex gradients and SVG backgrounds
- **Hardcoded dimensions**: Sizes like `h-[940px]`, `w-[749.214px]` are from Figma exports; update both Tailwind class and SVG viewBox if resizing
- **Blur & shadows**: Uses `backdrop-blur-[6.5px]`, `shadow-[-0.03px_7.91px_16.64px_0px_rgba(...)]` for glass-morphism effect

### Response Generation
AI responses are hardcoded in `generateAIResponse()` function at end of InteractiveChat.tsx:
- Pattern matching on keywords (case-insensitive)
- Falls back to random selection from `defaultResponses` array
- **No actual API integration** - simulated only

### Animation
- Custom Tailwind animations: `animate-[slideIn_0.3s_ease-out]` for messages, `animate-[bounce_1s_ease-in-out_infinite]` for typing dots
- Defined in Tailwind CSS (check `theme.css` or `tailwind.config.ts` if it exists)

## Integration Points & Dependencies

**External Dependencies**:
- `@radix-ui/*` (26 packages) - Provides unstyled accessible components (via UI folder imports)
- `@emotion/*` - CSS-in-JS (included, unused in visible components)
- `@mui/material` - Material UI (included, unused)
- `lucide-react` - Icons (available but not heavily used)
- `date-fns` - Date utilities (installed, not visibly used in current code)
- `next-themes` - Dark mode support (imported but not activated in current implementation)

**Fonts**:
- `Jost` - Body text (16px, normal weight for messages)
- `Gilroy` - Headings (14px, semibold for "Chat with AI" title)
- Both loaded in [src/styles/fonts.css](src/styles/fonts.css)

## Common Tasks

**Modify Chat Styling**:
1. Edit background gradients in `ChatItem()` and `TypingIndicator()` (inline `style={{ backgroundImage }}`)
2. Adjust `rounded-[23px]` (border radius) or `pb-[23px] pt-[19px]` (padding) via Tailwind classes
3. Test scrollbar styling via CSS custom properties in chatBoxRef div

**Add New AI Responses**:
1. Add condition to `generateAIResponse()` function: `if (input.includes('keyword')) { return "response"; }`
2. Case-insensitive matching on `userInput.toLowerCase()`

**Enhance Animations**:
1. Modify Tailwind animation classes (e.g., `animate-[slideIn_0.3s_ease-out]`)
2. May need to add keyframes to `tailwind.css` or `theme.css`

**Integrate Real API**:
1. Replace `setTimeout()` delay in `handleSend()` with actual API call
2. Update `generateAIResponse()` to accept API response instead of hardcoded matching
3. Add error handling for failed requests (currently no error boundaries)

## Potential Pitfalls

- **Figma-specific precision**: Changing layout requires syncing pixel dimensions across Tailwind classes, SVG viewBox values, and inline styles
- **No responsive design**: Fixed dimensions assume a specific viewport; mobile/tablet support not implemented
- **Scroll performance**: Long chat histories may cause lag due to re-rendering all messages on each new message (no virtualization)
- **SVG path updates**: If blob shapes need changes, they must be updated in [src/imports/svg-o74seeiox7.ts](src/imports/svg-o74seeiox7.ts)
