import { Play } from 'lucide-react'
import { useState } from 'react'

const VideoDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center max-w-3xl mx-auto mb-12'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>Xem LoopSoft Tool hoạt động</h2>
                    <p className='text-lg text-gray-600'>Khám phá cách công nghệ AI của chúng tôi giúp bạn livestream hiệu quả hơn</p>
                </div>

                <div className='max-w-4xl mx-auto'>
                    <div className='relative w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl group'>
                        {!isPlaying ? (
                            <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300'></div>
                                <img
                                    src='https://img.youtube.com/vi/jWGVI-z2y4M/maxresdefault.jpg'
                                    alt='Video thumbnail'
                                    className='absolute inset-0 w-full h-full object-cover'
                                />

                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className='absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    <div className='w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow'>
                                        <Play className='w-8 h-8 text-white ml-1' fill='white' />
                                    </div>
                                </button>
                            </div>
                        ) : (
                            <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    className='absolute inset-0 w-full h-full border-0 rounded-2xl'
                                    src='https://www.youtube.com/embed/jWGVI-z2y4M?autoplay=1&mute=1&start=270'
                                    title='LoopSoft Tool Demo'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    allowFullScreen></iframe>
                            </div>
                        )}
                    </div>

                    <p className='text-center text-gray-600 text-sm mt-6'>Xem cách LoopSoft Tool giúp bạn livestream hiệu quả hơn.</p>
                </div>
            </div>
        </section>
    )
}

export default VideoDemo
