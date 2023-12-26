import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-white p-4">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <Image
                src="/assets/logo-violet.png"
                width={96}
                height={96}
                alt="logo"
              />
              <h1 className="font-bold text-2xl text-black">STRIX</h1>
            </div>
            <p className="text-xs text-gray-400">
              Your trusted source to find highly-vetted mentors
              <br />& expert gamers to achieve your goals.
            </p>
            <div className="flex gap-4 justify-evenly">
              <a
                target="_blank"
                href="https://www.facebook.com/"
                className="text-white"
              >
                <Image
                  src="/assets/facebook.png"
                  width={24}
                  height={24}
                  alt="Logo Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/"
                className="text-white"
              >
                <Image
                  width={24}
                  height={24}
                  src="/assets/instagram.png"
                  alt="Logo Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/"
                className="text-white"
              >
                <Image
                  width={24}
                  height={24}
                  src="/assets/twitter.png"
                  alt="Logo Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className="text-white"
              >
                <Image
                  width={24}
                  height={24}
                  src="/assets/linkedin.png"
                  alt="Logo Linkedin"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-black">Platform</h3>
            <p className="text-gray-600">Browse mentors</p>
            <p className="text-gray-600">Books a session</p>
            <p className="text-gray-600">Become a mentor</p>
            <p className="text-gray-600">Testimonial</p>
          </div>
          <div>
            <h3 className="text-black">Support</h3>
            <p className="text-gray-600">FAQ</p>
            <p className="text-gray-600">Contact</p>
          </div>
          <div>
            <h3 className="text-black">Resource</h3>
            <p className="text-gray-600">Newsletter</p>
            <p className="text-gray-600">Podcast</p>
            <p className="text-gray-600">Spreadsheets</p>
            <p className="text-gray-600">Alternative</p>
            <p className="text-gray-600">Blog</p>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs py-4">
        © 2023 Strix. All rights reserved
      </p>
    </footer>
  );
}
