export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: 'truck' | 'chart' | 'shield' | 'smartphone';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isThinking?: boolean;
}

export interface ContactFormData {
  companyName: string;
  contactPerson: string;
  phone: string;
  needs: string;
}