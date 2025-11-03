import { Link, Play, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Link,
    number: '01',
    title: 'Kết nối',
    description: 'Đăng ký tài khoản và kết nối tài khoản TikTok Shop của bạn trong 2 phút',
    color: 'bg-blue-500',
  },
  {
    icon: Play,
    number: '02',
    title: 'Kích hoạt',
    description: 'Bật chế độ tự động và tùy chỉnh các thiết lập phù hợp với chiến lược bán hàng',
    color: 'bg-purple-500',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Livestream tự động',
    description: 'Bắt đầu livestream và để LoopSoft xử lý Captcha, ghim sản phẩm tự động cho bạn',
    color: 'bg-accent',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Cách hoạt động
          </h2>
          <p className="text-xl text-gray-600">
            Chỉ 3 bước đơn giản để bắt đầu tăng doanh thu
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-accent -translate-y-1/2 z-0"></div>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400 text-sm border-4 border-white shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="mt-6 mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-12 transition-all duration-300"></div>
                      <span className="text-sm font-medium text-gray-400">Bước {index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                }
                window.open('https://loopsoft.vn/user/signup/?ref=9D4208', '_blank');
              }}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3"
            >
              <span>Bắt đầu ngay</span>
              <Rocket className="w-5 h-5" />
            </button>
            <p className="mt-4 text-gray-500 text-sm">
              Không cần thẻ tín dụng • Dùng thử miễn phí
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
