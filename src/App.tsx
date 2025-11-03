import Hero from './components/Hero'
import VideoDemo from './components/VideoDemo'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        let timeOnPage = 0
        let tracked45s = false

        const timer = setInterval(() => {
            timeOnPage += 1
            if (timeOnPage >= 45 && !tracked45s) {
                tracked45s = true
                if (typeof window !== 'undefined' && (window as any).fbq) {
                    ;(window as any).fbq('track', 'ViewContent')
                }
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className='min-h-screen bg-white'>
            <Hero />
            <VideoDemo />
            <Features />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    )
}

export default App
