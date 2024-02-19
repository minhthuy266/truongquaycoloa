import { FaFacebook, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-32 global-text-base w-[100vw] flex items-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
        <div>
          <h2 className="font-bold mb-4">Liên hệ</h2>
          <p>
            Địa chỉ: Trường quay Cổ Loa - Số 1 Đào Duy Tùng, Đông Anh, TP.Hà Nội
          </p>
          <p>
            Liên hệ: Mr. Lê Anh Phương - Trưởng phòng kỹ thuật và Sản xuất
            chương trình (0969.878.385 - 0586.851.111)
          </p>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6842380257267!2d105.85255127603558!3d21.125151384459407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500c10f5f5033%3A0xd28ba2fc4d192668!2zVHLGsOG7nW5nIFF1YXkgQ-G7lSBMb2E!5e0!3m2!1sen!2s!4v1701588878635!5m2!1sen!2s"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="mt-12 rounded-lg"
          ></iframe>
        </div>

        <div>
          <p>Đăng ký nhận email</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="bg-gray-700 text-white py-2 px-4 w-full rounded"
            />
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Gửi
            </button>
          </div>
        </div>

        <div>
          <div className="flex space-x-8">
            <a
              href="https://www.facebook.com/people/Tr%C6%B0%E1%BB%9Dng-Quay-C%E1%BB%95-Loa/100063192820419/?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-white"
            >
              <FaFacebook style={{ fontSize: "24px" }} />
            </a>
            {/* <a href="#" className="text-white">
              <FaTwitter style={{ fontSize: "24px" }} />
            </a> */}
            <a
              href="mailto:coloastudio@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-white"
            >
              <FaGoogle style={{ fontSize: "24px" }} />
            </a>
            {/* <a href="#" className="text-white">
              <FaYoutube style={{ fontSize: "24px" }} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
