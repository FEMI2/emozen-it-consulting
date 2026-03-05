import { useState } from 'react';
import { LoginModal } from '../components/LoginModal';
import { ClientPortal } from '../components/ClientPortal';

export function PortalPage() {
  const [loggedInEmail, setLoggedInEmail] = useState<string | null>(() => {
    try {
      const u = localStorage.getItem('emozen_user');
      if (u) return JSON.parse(u).email;
    } catch {}
    return null;
  });

  const handleLogin = (email: string) => setLoggedInEmail(email);

  const handleLogout = () => {
    localStorage.removeItem('emozen_user');
    setLoggedInEmail(null);
  };

  if (loggedInEmail) {
    return <ClientPortal userEmail={loggedInEmail} onLogout={handleLogout} />;
  }

  return (
    <LoginModal
      isOpen={true}
      onClose={() => window.location.href = '/'}
      onLogin={handleLogin}
    />
  );
}