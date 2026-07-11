import React, { useState } from 'react';
import LoginModal from './LoginModal.jsx';
import SignUpModal from './SignUpModal.jsx';

export default function App({ onLoginSuccess }) {
  const [view, setView] = useState('signin');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {view === 'signin' ? (
        <LoginModal
          onClose={() => console.log('Close clicked')}
          onSignUpClick={() => setView('signup')}
          onLoginSuccess={onLoginSuccess}
        />
      ) : (
        <SignUpModal
          onClose={() => console.log('Close clicked')}
          onSignInClick={() => setView('signin')}
          onLoginSuccess={onLoginSuccess}
        
        />
      )}
    </div>
  );
}
