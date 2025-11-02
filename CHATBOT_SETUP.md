# 🤖 Chatbot Setup Guide

## Quick Setup

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Add API Key to Environment Variables

Create a file named `.env.local` in the root of your project:

```bash
# .env.local
GEMINI_API_KEY=your_actual_api_key_here
```

**Important**: 
- Never commit `.env.local` to Git (it's already in `.gitignore`)
- For production (Vercel), add the key in your Vercel project settings → Environment Variables

### 3. Restart Development Server

```bash
npm run dev
```

The chatbot should now work! Look for the floating chat button in the bottom-right corner.

---

## Features

✅ **Smart Context**: Answers questions about your resume, skills, projects, and research  
✅ **Analytics**: Tracks popular questions via Vercel Analytics  
✅ **Dark Mode**: Automatically adapts to your site's theme  
✅ **Responsive**: Works perfectly on mobile and desktop  
✅ **Smooth Animations**: Built with Framer Motion  

---

## Analytics Tracking

The chatbot automatically tracks:

- **Question Asked**: First 100 characters of each question
- **Question Length**: Character count
- **Response Success**: When responses are successfully received
- **Errors**: Any API errors that occur
- **Chat Opens/Closes**: User engagement
- **Chat Clears**: When users reset conversation

View analytics in your [Vercel Dashboard](https://vercel.com/dashboard) → Analytics → Events

---

## Customization

### Update Context Data

Edit `utils/chatContext.js` to modify what information the chatbot knows about you.

### Change Chatbot Appearance

Edit `components/Chatbot.js` to customize:
- Colors (search for `from-blue-600 to-purple-600`)
- Size (search for `w-96 h-[600px]`)
- Position (search for `bottom-6 right-6`)

---

## Troubleshooting

### Chatbot doesn't appear
- Check that `.env.local` exists with `GEMINI_API_KEY`
- Restart your dev server: `npm run dev`
- Check browser console for errors

### API Errors
- Verify your API key is correct
- Check Gemini API quota/usage limits
- Ensure API key has proper permissions

### Analytics not working
- Make sure `@vercel/analytics` is installed
- Check Vercel Analytics is enabled in your project
- Analytics only work in production or with Vercel CLI

---

## Support

For issues or questions, check:
- [Gemini API Docs](https://ai.google.dev/docs)
- [Vercel Analytics Docs](https://vercel.com/docs/analytics)

---

Enjoy your new AI chatbot! 🚀
