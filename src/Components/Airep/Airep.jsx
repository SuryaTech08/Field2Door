import React, { useState } from 'react';
import './Airep.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Airep = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI('AIzaSyCCaSAdT7J4cGDSbJupTk0MrlaK-UZp8EE');
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    setLoading(true);
    const prompt = `You are a friendly and knowledgeable assistant that ONLY answers questions related to food. This includes cooking tips, recipes, nutrition, organic food, restaurant suggestions, ingredients, food delivery, meal planning, and anything else strictly related to food.

If the user asks anything unrelated to food (such as technology, finance, personal matters, or current events), politely respond:

➤ 'I'm here to help with food-related questions only. Please ask something about food 🍽️.'_

Do not entertain or continue conversations that are not about food. Stay professional, friendly, and helpful at all times when discussing food.${userInput}`;
    try {
      console.log('Sending prompt to AI:', prompt);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      console.log('AI response received:', text);
      setAiResponse(text);
      setUserInput('');
    } catch (error) {
      console.error('Error generating AI response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='airep'>
      <h1>AiRecipes</h1>
      <div className='chat-box'>
        <div className='chat-messages'>
          {loading ? (
            <p>Something is cooking...</p>
          ) : (
            <>
              {userInput && <div className='message user-message'>{userInput}</div>}
              {aiResponse && (
                <div className='message ai-message'>
                  <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    {aiResponse
                      .split(/\n|(\d+\.)|(\- )/)
                      .filter(point => point && point.trim() && !/^\d+\.$/.test(point) && point !== '- ')
                      .map((point, idx) => (
                        <li key={idx} style={{ textAlign: 'left', marginBottom: '6px' }}>{point.trim()}</li>
                      ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
        <input
          type='text'
          className='chat-input'
          placeholder='Type your message...'
          value={userInput}
          onChange={handleInputChange}
        />
        <button className='send-button' onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Airep;