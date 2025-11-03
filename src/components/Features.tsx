import { Shield, Layers, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Giải Captcha tự động',
    description: 'Hệ thống AI thông minh giải quyết mọi loại Captcha trong giây lát, không gián đoạn livestream của bạn.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layers,
    title: 'Ghim sản phẩm thông minh',
    description: 'Tự động ghim sản phẩm đúng thời điểm, tối ưu hóa tỉ lệ chuyển đổi và tăng doanh số bán hàng.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Tăng tỉ lệ chốt đơn',
    description: 'Giảm thời gian chết, tăng tương tác với khách hàng, giúp tỉ lệ chốt đơn tăng trung bình 3 lần.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Hỗ trợ mọi tài khoản TikTok',
    description: 'Tương thích với mọi loại tài khoản TikTok Shop, dễ dàng thiết lập và sử dụng ngay lập tức.',
    color: 'from-green-500 to-emerald-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tính năng vượt trội
          </h2>
          <p className="text-xl text-gray-600">
            Công nghệ tự động hóa toàn diện giúp bạn tập trung vào việc bán hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent/30 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  <span>Tìm hiểu thêm</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary to-purple-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMTAgMCBNIC0xIDQxIEwgNDEgLTEgTSAwIDQwIEwgNDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Sẵn sàng tăng doanh thu ngay hôm nay?
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Hơn 5000 người bán đã tin dùng LoopSoft Tool để tự động hóa livestream TikTok
            </p>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                }
                window.open('https://loopsoft.vn/user/signup/?ref=9D4208', '_blank');
              }}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Bắt đầu miễn phí
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
