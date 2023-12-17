import {FaFacebook, FaGoogle, FaTwitter, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 global-text-base w-[100vw] h-[50rem] flex items-center'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
        <div>
          <h2 className='font-bold mb-4'>Address</h2>
          <p>
            Địa chỉ: Trường quay Cổ Loa - Số 1 Đào Duy Tùng, Đông Anh, TP.Hà Nội
          </p>
          <p>
            Liên hệ: Mr. Lê Anh Phương - Phó Phòng Kinh Doanh (0946.653.988)
          </p>
          <p>
            Liên hệ: Mr. Nguyễn Thế Anh - Phụ Trách Phòng Kế Hoạch
            (0965.510.795)
          </p>
          <iframe
            title='Google Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6842380257267!2d105.85255127603558!3d21.125151384459407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313500c10f5f5033%3A0xd28ba2fc4d192668!2zVHLGsOG7nW5nIFF1YXkgQ-G7lSBMb2E!5e0!3m2!1sen!2s!4v1701588878635!5m2!1sen!2s'
            width='100%'
            height='200'
            allowFullScreen=''
            loading='lazy'
            className='mt-4 rounded-lg'></iframe>
        </div>

        <div>
          <h2 className='font-bold mb-4'>Subscribe</h2>
          <p>Get updates and news straight to your inbox.</p>
          <div className='mt-4'>
            <input
              type='email'
              placeholder='Your email address'
              className='bg-gray-700 text-white py-2 px-4 w-full rounded'
            />
            <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <div className='flex space-x-8'>
            <a href='#' className='text-white'>
              <FaFacebook style={{fontSize: "24px"}} />
            </a>
            <a href='#' className='text-white'>
              <FaTwitter style={{fontSize: "24px"}} />
            </a>
            <a href='#' className='text-white'>
              <FaGoogle style={{fontSize: "24px"}} />
            </a>
            <a href='#' className='text-white'>
              <FaYoutube style={{fontSize: "24px"}} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
