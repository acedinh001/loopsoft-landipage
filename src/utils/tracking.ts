export const trackLeadEvent = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
};

export const trackPurchaseEvent = (value: number, currency = 'VND') => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', { value, currency });
  }
};
