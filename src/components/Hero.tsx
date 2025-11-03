import { ShoppingBag, Zap } from 'lucide-react';
import { trackLeadEvent } from '../utils/tracking';

const Hero = () => {
  const handleCTAClick = () => {
    trackLeadEvent();
    window.open('https://loopsoft.vn/user/signup/?ref=9D4208', '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-purple-900 to-primary min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4 text-accent" />
              <span>Công nghệ tự động hóa cho TikTok Seller</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Tăng doanh thu Livestream TikTok – Giải Captcha & Ghim Sản Phẩm Tự Động
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed">
              Tiết kiệm thời gian, chốt đơn nhanh hơn, không lo bị gián đoạn khi bán hàng trên TikTok.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleCTAClick}
                className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Đăng ký dùng thử ngay</span>
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
              >
                Tìm hiểu thêm
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5000+</div>
                <div className="text-sm text-gray-300">Người bán đang dùng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-gray-300">Thời gian hoạt động</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3x</div>
                <div className="text-sm text-gray-300">Tăng tỉ lệ chốt đơn</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-accent text-white px-6 py-2 rounded-full font-bold shadow-lg">
                HOT
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">TikTok Livestream</div>
                      <div className="text-sm text-gray-400">Đang hoạt động</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-3">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Captcha đã giải: 847</span>
                    </div>
                  </div>

                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-blue-400 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Sản phẩm đã ghim: 1,234</span>
                    </div>
                  </div>

                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-purple-400 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Đơn hàng: +342 hôm nay</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">Hiệu suất livestream</div>
                  <div className="flex items-end gap-1 h-24">
                    {[40, 65, 55, 80, 70, 90, 85, 95].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-accent to-accent/50 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-gray-300 text-sm mb-2">Bắt đầu miễn phí ngay hôm nay</div>
                <button
                  onClick={handleCTAClick}
                  className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Tạo tài khoản
                </button>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
