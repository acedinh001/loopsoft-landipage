import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Nguyễn Minh Tuấn',
    role: 'Chủ shop thời trang',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'Từ khi dùng LoopSoft, doanh thu livestream của tôi tăng 250%. Không còn phải lo về Captcha hay ghim sản phẩm thủ công nữa. Công cụ này thực sự thay đổi cuộc chơi!',
    revenue: '+250% doanh thu',
    rating: 5,
  },
  {
    name: 'Trần Thu Hà',
    role: 'Seller mỹ phẩm',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'Trước đây tôi mất rất nhiều thời gian xử lý Captcha giữa livestream. Giờ mọi thứ tự động, tôi tập trung 100% vào khách hàng. Đơn hàng tăng vọt!',
    revenue: '+180% đơn hàng',
    rating: 5,
  },
  {
    name: 'Lê Hoàng Nam',
    role: 'Shop phụ kiện điện thoại',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'LoopSoft giúp tôi tiết kiệm 3-4 giờ mỗi ngày. Hệ thống tự động ghim sản phẩm cực kỳ thông minh, đúng thời điểm khách hàng hỏi. Tỉ lệ chốt đơn tăng rõ rệt.',
    revenue: '+320% hiệu suất',
    rating: 5,
  },
  {
    name: 'Phạm Thị Lan',
    role: 'Kinh doanh đồ gia dụng',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'Tôi đã thử nhiều tool khác nhưng LoopSoft là tốt nhất. Dễ cài đặt, giao diện thân thiện, và quan trọng nhất là hiệu quả thật sự. Đầu tư xứng đáng!',
    revenue: '+200% ROI',
    rating: 5,
  },
  {
    name: 'Võ Minh Khoa',
    role: 'Shop thực phẩm sạch',
    avatar: 'https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'Captcha là cơn ác mộng của tôi trước khi biết LoopSoft. Giờ livestream trôi chảy, không gián đoạn, khách hàng rất hài lòng. Doanh số tăng mỗi tuần!',
    revenue: '+290% doanh số',
    rating: 5,
  },
  {
    name: 'Đỗ Thị Mai',
    role: 'Chủ cửa hàng giày dép',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    content: 'Công cụ tuyệt vời cho mọi TikTok seller! Tính năng ghim sản phẩm tự động giúp tôi không bỏ lỡ bất kỳ cơ hội bán hàng nào. Highly recommended!',
    revenue: '+350% tương tác',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Câu chuyện thành công
          </h2>
          <p className="text-xl text-gray-600">
            Hàng nghìn người bán đã tăng trưởng doanh thu nhờ LoopSoft Tool
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative group hover:-translate-y-1"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-6 h-6 text-accent" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="pt-6 border-t border-gray-100">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700">{testimonial.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Bạn cũng muốn có kết quả tương tự?
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead');
              }
              window.open('https://loopsoft.vn/user/signup/?ref=9D4208', '_blank');
            }}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Đăng ký dùng thử miễn phí
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
