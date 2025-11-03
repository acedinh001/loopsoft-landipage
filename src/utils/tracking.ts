export const trackLeadEvent = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        ;(window as any).fbq('track', 'Lead')
    }
}

export const trackViewContentEvent = (value: number, currency = 'VND') => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        ;(window as any).fbq('track', 'ViewContent', { value, currency })
    }
}
