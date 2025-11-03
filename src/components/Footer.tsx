import { Mail, MessageCircle, Phone, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-purple-900 to-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">LoopSoft</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Giải pháp tự động hóa livestream TikTok hàng đầu cho người bán Việt Nam.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Tính năng
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  Cách hoạt động
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Đánh giá
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@loopsoft.vn" className="text-gray-300 hover:text-white transition-colors">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:support@loopsoft.vn" className="text-gray-300 hover:text-white transition-colors">
                  support@loopsoft.vn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+84123456789" className="text-gray-300 hover:text-white transition-colors">
                  +84 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">Chat hỗ trợ 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} LoopSoft Tool. All rights reserved.
            </p>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-gray-300 text-sm">
                Affiliate Program • Ref: <span className="text-accent font-semibold">9D4208</span>
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong className="text-white">Lưu ý:</strong> Trang này chứa liên kết affiliate.
              Khi bạn đăng ký qua liên kết của chúng tôi, chúng tôi có thể nhận được hoa hồng mà
              không ảnh hưởng đến giá bạn phải trả. LoopSoft Tool là công cụ hợp pháp, tuân thủ
              đầy đủ các điều khoản của TikTok và cam kết bảo vệ tài khoản người dùng.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
