# 🤖 Chatbot Implementation Plan

## Overview
Create an AI-powered chatbot using Google Gemini API that can answer questions about your portfolio, resume, skills, projects, and research.

---

## 📁 File Structure

```
portfolio/
├── pages/
│   └── api/
│       └── chat.js                    # NEW - Gemini API endpoint
├── components/
│   └── Chatbot.js                     # NEW - Chat UI component
├── utils/
│   └── chatContext.js                 # NEW - Context builder utility
└── .env.local                         # NEW - API key storage
```

---

## 🎨 Design & UX

### Visual Design
- **Floating Chat Button**: Bottom-right corner, animated
  - Icon: ChatBubbleLeftRightIcon (from Heroicons)
  - Color: Gradient (blue-600 to purple-600) matching your site theme
  - Animation: Bounce on load, pulse when new messages available
  - Position: Fixed, bottom-right (with spacing from edges)

### Chat Window
- **Size**: 
  - Mobile: Full screen overlay
  - Desktop: 400px × 600px modal
- **Position**: Bottom-right, slides up from button
- **Style**: Glass-morphism effect matching your portfolio
  - Backdrop blur
  - Semi-transparent background
  - Border with gradient

### Chat Interface
- **Header**:
  - Title: "Ask Me Anything"
  - Subtitle: "About my work, projects, or research"
  - Close button (X icon)
  
- **Message Area**:
  - Scrollable chat history
  - User messages: Right-aligned, blue gradient
  - Bot messages: Left-aligned, gray background
  - Typing indicator (animated dots)
  
- **Input Area**:
  - Text input field
  - Send button (with icon)
  - Character counter (optional)
  - Suggested questions/topics

---

## 🚀 Implementation Details

### 1. API Route (`pages/api/chat.js`)

**Purpose**: Handle Gemini API requests with portfolio context

**Key Features**:
- Accepts POST requests with user message
- Builds comprehensive context from portfolio data
- Calls Gemini API with structured prompt
- Returns formatted response
- Error handling and rate limiting

**Context Includes**:
- Personal info (name, role, experience)
- Skills (all categories)
- Projects (titles, descriptions, tech stack)
- Research papers (titles, abstracts, status)
- Contact information

**Security**:
- API key stored in environment variables
- Input validation
- Rate limiting (prevent abuse)

---

### 2. Chatbot Component (`components/Chatbot.js`)

**Features**:
- Toggle open/close state
- Message history management
- Real-time API calls
- Loading states
- Error handling
- Responsive design (mobile/desktop)
- Dark mode support
- Animation with Framer Motion

**State Management**:
```javascript
- isOpen: boolean (chat window visibility)
- messages: array (chat history)
- isLoading: boolean (API request status)
- error: string/null (error messages)
```

**Functions**:
- `handleSendMessage()` - Send user message to API
- `handleToggle()` - Open/close chat
- `clearChat()` - Reset conversation
- `handleKeyPress()` - Send on Enter key

---

### 3. Context Builder (`utils/chatContext.js`)

**Purpose**: Format portfolio data into context string for Gemini

**Function**: `buildChatContext()`

**Returns**: Comprehensive text string with:
1. Introduction about you
2. Skills breakdown
3. Project details
4. Research papers summary
5. Contact information

---

### 4. Environment Variables (`.env.local`)

```
GEMINI_API_KEY=your_api_key_here
```

**Important**: 
- Add `.env.local` to `.gitignore`
- Never commit API keys to Git

---

## 📋 Implementation Steps

### Phase 1: Setup
1. ✅ Install Gemini SDK: `npm install @google/generative-ai`
2. ✅ Create `.env.local` with API key
3. ✅ Add to `.gitignore`

### Phase 2: Backend
1. ✅ Create `utils/chatContext.js`
2. ✅ Create `pages/api/chat.js`
3. ✅ Test API endpoint

### Phase 3: Frontend
1. ✅ Create `components/Chatbot.js`
2. ✅ Add Framer Motion animations
3. ✅ Implement responsive design
4. ✅ Add dark mode support

### Phase 4: Integration
1. ✅ Import Chatbot in `_app.js`
2. ✅ Test on all pages
3. ✅ Add to mobile menu (optional)

### Phase 5: Polish
1. ✅ Add suggested questions
2. ✅ Improve error messages
3. ✅ Add typing indicators
4. ✅ Optimize performance

---

## 💬 Example User Interactions

### Questions Chatbot Can Answer:

1. **Resume/CV**:
   - "Tell me about your experience"
   - "What's on your resume?"
   - "Summarize your background"

2. **Skills**:
   - "What are your technical skills?"
   - "Do you know PyTorch?"
   - "What frameworks do you use?"

3. **Projects**:
   - "Tell me about your projects"
   - "What did you build with TrackMania?"
   - "Show me your GitHub projects"

4. **Research**:
   - "What research have you done?"
   - "Tell me about your IEEE papers"
   - "What's your skin cancer research about?"

5. **General**:
   - "Who are you?"
   - "What do you do?"
   - "How can I contact you?"

---

## 🎯 Performance Considerations

1. **API Rate Limiting**: 
   - Prevent spam requests
   - Debounce user input
   - Cache common responses (optional)

2. **Context Size**:
   - Keep context concise but informative
   - Optimize prompt length
   - Use structured format

3. **Loading States**:
   - Show typing indicator
   - Disable send button during request
   - Handle slow connections

---

## 🔒 Security & Privacy

1. **API Key Protection**:
   - Never expose in client-side code
   - Use server-side API route only
   - Environment variables only

2. **Input Sanitization**:
   - Validate user input
   - Prevent injection attacks
   - Limit message length

3. **Data Privacy**:
   - Don't store user conversations
   - Clear chat history on close
   - GDPR considerations (if applicable)

---

## 🎨 UI Mockup Description

```
┌─────────────────────────────────────┐
│  Ask Me Anything              [X]   │
│  About my work, projects, research  │
├─────────────────────────────────────┤
│                                     │
│  🤖 Hi! I can tell you about:      │
│     • Resume & Experience           │
│     • Technical Skills               │
│     • Projects                      │
│     • Research Papers               │
│     • Contact Info                  │
│                                     │
│                                     │
│            ┌─────────────────────┐  │
│            │ What are your skills? │  │
│            └─────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ I have expertise in Deep       │ │
│  │ Learning, Computer Vision,      │ │
│  │ PyTorch, TensorFlow...          │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Type your question...        │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
      [💬 Chat Button - Bottom Right]
```

---

## 📦 Dependencies Needed

```json
{
  "@google/generative-ai": "^0.x.x"
}
```

---

## ✅ Success Criteria

1. ✅ Chatbot accessible from all pages
2. ✅ Answers questions about portfolio accurately
3. ✅ Responsive on mobile and desktop
4. ✅ Smooth animations and UX
5. ✅ Dark mode support
6. ✅ Error handling works
7. ✅ API key secured
8. ✅ Fast response times (< 3 seconds)

---

## 🚀 Next Steps After Implementation

1. Add analytics to track popular questions
2. Implement conversation memory (optional)
3. Add voice input (future enhancement)
4. Multi-language support (if needed)
5. Export conversation feature (optional)

---

## 📝 Notes

- Keep context updated as portfolio grows
- Monitor API usage and costs
- Consider adding fallback responses if API fails
- Test with various question types
- Get user feedback for improvements
