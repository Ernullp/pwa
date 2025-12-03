import { useState } from 'react';
import BottomNav from '../BottomNav';

export default function BottomNavExample() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="h-20" dir="rtl">
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
