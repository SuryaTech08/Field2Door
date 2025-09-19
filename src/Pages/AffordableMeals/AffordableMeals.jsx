import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const mealMenus = [
  { name: 'Fat Loss', path: '/affordable-meals/fat-loss' },
  { name: 'Healthy Living', path: '/affordable-meals/healthy-living' },
  { name: 'Weight Gain', path: '/affordable-meals/weight-gain' },
  { name: 'Your Diet, Your Design', path: '/affordable-meals/your-diet-design' },
  { name: 'Customizable Diet', path: '/affordable-meals/customizable-diet' },
];

const plans = [
  {
    type: 'Weight Loss',
    title: 'F2D Plan',
    desc: 'Most Budget Friendly Plan in India - Premium weight loss plan with enhanced nutrition',
    meal: 'Premium Breakfast/Lunch/Dinner',
    price: 5999,
    perMeal: 240,
    delivery: '1 time delivery • 25 days',
    count: 1,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: 'F2D Plan',
    desc: 'Most Budget Friendly Plan in India - Premium muscle building plan with enhanced protein',
    meal: 'Premium High Protein Breakfast/Lunch/Dinner',
    price: 6374,
    perMeal: 255,
    delivery: '1 time delivery • 25 days',
    count: 1,
    badge: null,
  },
  {
    type: 'Weight Loss',
    title: 'F2D Plan',
    desc: 'Premium - Choose any 2 meals',
    meal: 'Premium - Choose any 2 meals',
    price: 10499,
    perMeal: 210,
    delivery: '2 times delivery • 25 days',
    count: 2,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: 'F2D Plan',
    desc: 'Premium High Protein - Choose any 2 meals',
    meal: 'Premium High Protein - Choose any 2 meals',
    price: 10874,
    perMeal: 217,
    delivery: '2 times delivery • 25 days',
    count: 2,
    badge: null,
  },
  {
    type: 'Weight Loss',
    title: 'F2D Plan',
    desc: 'Premium Breakfast, Lunch & Dinner',
    meal: 'Premium Breakfast, Lunch & Dinner',
    price: 14999,
    perMeal: 200,
    delivery: '3 times delivery • 25 days',
    count: 3,
    badge: 'Most Popular',
  },
  {
    type: 'Weight Gain',
    title: 'F2D Plan',
    desc: 'Premium High Protein Breakfast, Lunch & Dinner',
    meal: 'Premium High Protein Breakfast, Lunch & Dinner',
    price: 15374,
    perMeal: 205,
    delivery: '3 times delivery • 25 days',
    count: 3,
    badge: 'Most Popular',
  },
];

const trialPlans = [
  {
    type: 'Weight Loss',
    title: '3-Day Trial',
    desc: 'Perfect for trying our weight loss approach',
    meal: 'Breakfast/Lunch/Dinner',
    price: 833,
    perMeal: 278,
    delivery: '1 time delivery • 3 days',
    count: 1,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: '3-Day Trial',
    desc: 'Start your muscle building journey today',
    meal: 'High protein Breakfast/Lunch/Dinner',
    price: 950,
    perMeal: 317,
    delivery: '1 time delivery • 3 days',
    count: 1,
    badge: null,
  },
  {
    type: 'Weight Loss',
    title: '3-Day Trial',
    desc: 'Choose any 2: Breakfast, Lunch, Dinner',
    meal: 'Choose any 2: Breakfast, Lunch, Dinner',
    price: 1617,
    perMeal: 270,
    delivery: '2 times delivery • 3 days',
    count: 2,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: '3-Day Trial',
    desc: 'High protein - Choose any 2 meals',
    meal: 'High protein - Choose any 2 meals',
    price: 1734,
    perMeal: 289,
    delivery: '2 times delivery • 3 days',
    count: 2,
    badge: null,
  },
  {
    type: 'Weight Loss',
    title: '3-Day Trial',
    desc: 'Breakfast, Lunch & Dinner',
    meal: 'Breakfast, Lunch & Dinner',
    price: 2093,
    perMeal: 233,
    delivery: '3 times delivery • 3 days',
    count: 3,
    badge: 'Most Popular',
  },
  {
    type: 'Weight Gain',
    title: '3-Day Trial',
    desc: 'High protein Breakfast, Lunch & Dinner',
    meal: 'High protein Breakfast, Lunch & Dinner',
    price: 2210,
    perMeal: 246,
    delivery: '3 times delivery • 3 days',
    count: 3,
    badge: 'Most Popular',
  },
  {
    type: 'Weight Loss',
    title: '3-Day Trial',
    desc: 'All meals + Morning & Evening snacks',
    meal: 'All meals + Morning & Evening snacks',
    price: 2481,
    perMeal: 165,
    delivery: '3 times delivery • 3 days',
    count: 5,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: '3-Day Trial',
    desc: 'High protein all meals + snacks',
    meal: 'High protein all meals + snacks',
    price: 2598,
    perMeal: 173,
    delivery: '3 times delivery • 3 days',
    count: 5,
    badge: null,
  },
];

const weeklyPlans = [
  {
    type: 'Weight Loss',
    title: 'Weekly Plan',
    desc: 'Most popular choice for consistent results',
    meal: 'Breakfast/Lunch/Dinner',
    price: 1944,
    perMeal: 278,
    delivery: '1 time delivery • 7 days',
    count: 1,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: 'Weekly Plan',
    desc: 'Build muscle with our high-protein meals',
    meal: 'High protein Breakfast/Lunch/Dinner',
    price: 2216,
    perMeal: 317,
    delivery: '1 time delivery • 7 days',
    count: 1,
    badge: null,
  },
  {
    type: 'Weight Loss',
    title: 'Weekly Plan',
    desc: 'Most popular choice for consistent results',
    meal: 'Choose any 2: Breakfast, Lunch, Dinner',
    price: 3773,
    perMeal: 270,
    delivery: '2 times delivery • 7 days',
    count: 2,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: 'Weekly Plan',
    desc: 'Build muscle with our high-protein meals',
    meal: 'High protein - Choose any 2 meals',
    price: 4045,
    perMeal: 289,
    delivery: '2 times delivery • 7 days',
    count: 2,
    badge: null,
  },
  {
    type: 'Weight Loss',
    title: 'Weekly Plan',
    desc: 'Most popular choice for consistent results',
    meal: 'Breakfast, Lunch & Dinner',
    price: 4884,
    perMeal: 233,
    delivery: '3 times delivery • 7 days',
    count: 3,
    badge: 'Most Popular',
  },
  {
    type: 'Weight Gain',
    title: 'Weekly Plan',
    desc: 'Build muscle with our high-protein meals',
    meal: 'High protein Breakfast, Lunch & Dinner',
    price: 5156,
    perMeal: 246,
    delivery: '3 times delivery • 7 days',
    count: 3,
    badge: 'Most Popular',
  },
  {
    type: 'Weight Loss',
    title: 'Weekly Plan',
    desc: 'Most popular choice for consistent results',
    meal: 'All meals + Morning & Evening snacks',
    price: 5790,
    perMeal: 165,
    delivery: '3 times delivery • 7 days',
    count: 5,
    badge: null,
  },
  {
    type: 'Weight Gain',
    title: 'Weekly Plan',
    desc: 'Build muscle with our high-protein meals',
    meal: 'High protein all meals + snacks',
    price: 6062,
    perMeal: 173,
    delivery: '3 times delivery • 7 days',
    count: 5,
    badge: null,
  },
];

const tabs = [
  { label: 'F2D', icon: '💎', sub: '    BudgetFriendly' },
  { label: '3-Day Trial', icon: '🚀', sub: 'Start Here' },
  { label: 'Weekly Plan', icon: '⭐', sub: 'Most Popular' },
  { label: 'Monthly Plan', icon: '🏆', sub: 'Best Value' },
  
];

const AffordableMeals = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div style={{ background: 'linear-gradient(135deg, #f1f8e9 0%, #ffffff 100%)', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          {tabs.slice(0, 4).map((tab, idx) => (
            <div
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              style={{
                background: idx === activeTab ? '#fff' : '#f1f8e9',
                border: idx === activeTab ? '3px solid #4CAF50' : '1.5px solid #a5d6a7',
                boxShadow: idx === activeTab ? '0 2px 16px #a5d6a7' : '0 1px 6px #a5d6a7',
                borderRadius: '2rem',
                padding: '1rem 2.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#333',
                position: 'relative',
                minWidth: '170px',
                marginBottom: '1.5rem',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{tab.icon}</span>
              <span>{tab.label}</span>
              <span style={{ position: 'absolute', bottom: '-1.2rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.95rem', color: '#4CAF50', fontWeight: 600 }}>{tab.sub}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {tabs.slice(4, 5).map((tab, idx) => (
            <div
              key={tab.label}
              onClick={() => setActiveTab(4)}
              style={{
                background: 4 === activeTab ? '#fff' : '#f1f8e9',
                border: 4 === activeTab ? '3px solid #4CAF50' : '1.5px solid #a5d6a7',
                boxShadow: 4 === activeTab ? '0 2px 16px #a5d6a7' : '0 1px 6px #a5d6a7',
                borderRadius: '2rem',
                padding: '1rem 2.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#333',
                position: 'relative',
                minWidth: '170px',
                marginBottom: '1.5rem',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{tab.icon}</span>
              <span>{tab.label}</span>
              <span style={{ position: 'absolute', bottom: '-1.2rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.95rem', color: '#4CAF50', fontWeight: 600 }}>{tab.sub}</span>
            </div>
          ))}
        </div>
      </div>
      {activeTab === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          {plans.map((plan, idx) => (
            <div key={plan.type + plan.count} style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 2px 16px #a5d6a7', border: '2px solid #4CAF50', padding: '2.2rem 2rem', maxWidth: '420px', width: '100%', marginBottom: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1.2rem', left: '50%', transform: 'translateX(-50%)', background: plan.type === 'Weight Loss' ? '#e0f2f1' : '#e8f5e9', color: plan.type === 'Weight Loss' ? '#00796B' : '#388e3c', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px #a5d6a7' }}>{plan.type}</div>
              {plan.badge && (
                <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: '#4CAF50', color: '#fff', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px #a5d6a7' }}>{plan.badge}</div>
              )}
              <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '2.5rem 0 1.2rem 0', color: '#1B5E20' }}>{plan.title}</h2>
              <div style={{ fontSize: '1.1rem', color: '#1B5E20', marginBottom: '1.5rem', fontWeight: 500 }}>{plan.desc}</div>
              <div style={{ background: '#f8fafc', borderRadius: '1rem', padding: '1.2rem', marginBottom: '1.5rem', color: '#1B5E20', fontWeight: 600, fontSize: '1.1rem' }}>
                <div style={{ marginBottom: '0.7rem' }}>{plan.count} Meal{plan.count > 1 ? 's' : ''}</div>
                <div>{plan.meal}</div>
                <div style={{ marginTop: '1rem', color: '#4CAF50', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span role="img" aria-label="delivery">🚚</span> {plan.delivery}
                </div>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1B5E20', marginBottom: '0.5rem' }}>₹{plan.price.toLocaleString()}</div>
              <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>₹{plan.perMeal}/meal</div>
              <button onClick={() => navigate('/cart')} style={{ background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '0.7rem', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 2px 8px #a5d6a7', cursor: 'pointer', width: '100%', transition: 'background 0.2s' }}>
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      {activeTab === 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          {[0,1,2,3,4,5,6,7].map(idx => {
            const plan = trialPlans[idx];
            return (
              <div key={plan.type + plan.count} style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 2px 16px #a5d6a7', border: plan.badge ? '2.5px solid #4CAF50' : '2px solid #4CAF50', padding: '2.2rem 2rem', maxWidth: '420px', width: '100%', marginBottom: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1.2rem', left: '50%', transform: 'translateX(-50%)', background: plan.type === 'Weight Loss' ? '#e0f2f1' : '#e8f5e9', color: plan.type === 'Weight Loss' ? '#00796B' : '#388e3c', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px #a5d6a7' }}>{plan.type}</div>
                {plan.badge && (
                  <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: '#4CAF50', color: '#fff', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px #a5d6a7' }}>{plan.badge}</div>
                )}
                <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '2.5rem 0 1.2rem 0', color: '#1B5E20' }}>{plan.title}</h2>
                <div style={{ fontSize: '1.1rem', color: '#1B5E20', marginBottom: '1.5rem', fontWeight: 500 }}>{plan.desc}</div>
                <div style={{ background: '#f8fafc', borderRadius: '1rem', padding: '1.2rem', marginBottom: '1.5rem', color: '#1B5E20', fontWeight: 600, fontSize: '1.1rem' }}>
                  <div style={{ marginBottom: '0.7rem' }}>{plan.count} Meal{plan.count > 1 ? 's' : ''}</div>
                  <div>{plan.meal}</div>
                  <div style={{ marginTop: '1rem', color: '#4CAF50', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span role="img" aria-label="delivery">🚚</span> {plan.delivery}
                  </div>
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1B5E20', marginBottom: '0.5rem' }}>₹{plan.price.toLocaleString()}</div>
                <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>₹{plan.perMeal}/meal</div>
                <button onClick={() => navigate('/cart')} style={{ background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '0.7rem', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 2px 8px #a5d6a7', cursor: 'pointer', width: '100%', transition: 'background 0.2s' }}>
                  🛒 Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
      {activeTab === 2 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          {weeklyPlans.map((plan, idx) => (
            <div key={plan.type + plan.count} style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 2px 16px #a5d6a7', border: plan.badge ? '2.5px solid #4CAF50' : '2px solid #4CAF50', padding: '2.2rem 2rem', maxWidth: '420px', width: '100%', marginBottom: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1.2rem', left: '50%', transform: 'translateX(-50%)', background: plan.type === 'Weight Loss' ? '#e0f2f1' : '#e8f5e9', color: plan.type === 'Weight Loss' ? '#00796B' : '#388e3c', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px #a5d6a7' }}>{plan.type}</div>
              {plan.badge && (
                <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: '#4CAF50', color: '#fff', borderRadius: '1rem', padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 2px 8px #a5d6a7' }}>{plan.badge}</div>
              )}
              <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '2.5rem 0 1.2rem 0', color: '#1B5E20' }}>{plan.title}</h2>
              <div style={{ fontSize: '1.1rem', color: '#1B5E20', marginBottom: '1.5rem', fontWeight: 500 }}>{plan.desc}</div>
              <div style={{ background: '#f8fafc', borderRadius: '1rem', padding: '1.2rem', marginBottom: '1.5rem', color: '#1B5E20', fontWeight: 600, fontSize: '1.1rem' }}>
                <div style={{ marginBottom: '0.7rem' }}>{plan.count} Meal{plan.count > 1 ? 's' : ''}</div>
                <div>{plan.meal}</div>
                <div style={{ marginTop: '1rem', color: '#4CAF50', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span role="img" aria-label="delivery">🚚</span> {plan.delivery}
                </div>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1B5E20', marginBottom: '0.5rem' }}>₹{plan.price.toLocaleString()}</div>
              <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem' }}>₹{plan.perMeal}/meal</div>
              <button onClick={() => navigate('/cart')} style={{ background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '0.7rem', padding: '1rem 2.5rem', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 2px 8px #a5d6a7', cursor: 'pointer', width: '100%', transition: 'background 0.2s' }}>
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      {activeTab === 3 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem', 
          background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 20px rgba(76, 175, 80, 0.2)',
          margin: '0 2rem'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            color: '#1B5E20',
            marginBottom: '1rem'
          }}>
            Coming Soon!
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            color: '#388E3C',
            lineHeight: '1.6'
          }}>
            The <strong>Monthly Plan</strong> is being crafted with a unique design just for you.
            <br />
            Stay tuned for our best value offering!
          </p>
        </div>
      )}
      {/* Other tabs can be implemented similarly */}
    </div>
  );
};

export default AffordableMeals;
