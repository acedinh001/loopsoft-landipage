import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'LoopSoft Tool hoạt động như thế nào?',
    answer: 'LoopSoft sử dụng công nghệ AI tiên tiến để tự động phát hiện và giải quyết Captcha trong quá trình livestream TikTok. Đồng thời, hệ thống thông minh sẽ tự động ghim sản phẩm phù hợp vào đúng thời điểm để tối ưu hóa tỉ lệ chuyển đổi.',
  },
  {
    question: 'Tôi có cần kỹ năng kỹ thuật để sử dụng không?',
    answer: 'Hoàn toàn không! LoopSoft được thiết kế với giao diện đơn giản, thân thiện. Bạn chỉ cần đăng ký, kết nối tài khoản TikTok và bật chế độ tự động. Mọi thứ còn lại để LoopSoft lo.',
  },
  {
    question: 'Giá cả như thế nào?',
    answer: 'Chúng tôi cung cấp gói dùng thử miễn phí để bạn trải nghiệm đầy đủ tính năng. Sau đó, bạn có thể chọn gói phù hợp với nhu cầu kinh doanh. Liên hệ ngay để được tư vấn chi tiết về gói phù hợp nhất cho bạn.',
  },
  {
    question: 'LoopSoft có tương thích với tất cả tài khoản TikTok Shop?',
    answer: 'Có! LoopSoft hỗ trợ mọi loại tài khoản TikTok Shop, bất kể quy mô hay khu vực bán hàng. Hệ thống được cập nhật liên tục để đảm bảo tương thích với các thay đổi mới nhất của TikTok.',
  },
  {
    question: 'Tôi có thể hủy bất cứ lúc nào không?',
    answer: 'Tất nhiên! Bạn có toàn quyền kiểm soát gói đăng ký của mình. Không có ràng buộc dài hạn, bạn có thể hủy bất cứ lúc nào mà không mất thêm phí.',
  },
  {
    question: 'LoopSoft có an toàn cho tài khoản TikTok của tôi không?',
    answer: 'An toàn tuyệt đối! LoopSoft tuân thủ nghiêm ngặt các chính sách của TikTok. Chúng tôi sử dụng công nghệ mô phỏng hành vi người dùng thực, không vi phạm điều khoản sử dụng. Hơn 5000 seller đang sử dụng an toàn.',
  },
  {
    question: 'Tôi có được hỗ trợ kỹ thuật không?',
    answer: 'Chắc chắn rồi! Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng 24/7 qua chat, email và hotline. Bạn sẽ nhận được phản hồi nhanh chóng và giải pháp hiệu quả cho mọi thắc mắc.',
  },
  {
    question: 'Mất bao lâu để thấy kết quả?',
    answer: 'Hầu hết người dùng thấy sự cải thiện ngay từ phiên livestream đầu tiên. Tỉ lệ chốt đơn thường tăng đáng kể trong vòng 7-14 ngày khi bạn tối ưu hóa cài đặt theo chiến lược bán hàng của mình.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-xl text-gray-600">
            Mọi thông tin bạn cần biết về LoopSoft Tool
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-accent transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vẫn còn thắc mắc?
          </h3>
          <p className="text-gray-600 mb-6">
            Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                }
                window.open('https://loopsoft.vn/user/signup/?ref=9D4208', '_blank');
              }}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Bắt đầu ngay
            </button>
            <a
              href="mailto:support@loopsoft.vn"
              className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Liên hệ hỗ trợ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
