import Image from "next/image";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/",
    src: "/assets/facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/",
    src: "/assets/instagram.png",
    alt: "Instagram",
  },
  { href: "https://twitter.com/", src: "/assets/twitter.png", alt: "Twitter" },
  {
    href: "https://www.linkedin.com/",
    src: "/assets/linkedin.png",
    alt: "LinkedIn",
  },
];

const FOOTER_SECTIONS = [
  {
    title: "Platform",
    links: [
      "Browse Mentors",
      "Book a Session",
      "Become a Mentor",
      "Testimonial",
    ],
  },
  {
    title: "Support",
    links: ["FAQ", "Contact"],
  },
  {
    title: "Resources",
    links: ["Newsletter", "Podcast", "Spreadsheets", "Alternative", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-white via-gray-100 to-white text-gray-700">
      <div className="flex flex-col gap-8 p-6 md:flex-row md:items-start md:justify-evenly">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo-violet.png"
              width={72} // Logo agrandi
              height={72}
              alt="STRIX Logo"
              priority
            />
            <h1 className="text-3xl font-extrabold tracking-wide text-gray-900">
              STRIX
            </h1>
          </div>
          <p className="text-sm text-gray-600">
            Your trusted source to find highly-vetted mentors <br /> & expert
            gamers to achieve your goals.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  width={28}
                  height={28}
                  alt={social.alt}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {FOOTER_SECTIONS.map((section, index) => (
          <div key={index}>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="transition hover:text-gray-900 hover:underline"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 py-4">
        <p className="text-center text-xs text-gray-500">
          &copy; 2023 Strix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
