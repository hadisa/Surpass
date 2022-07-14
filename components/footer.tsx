import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Help Center", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Webinars", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
      { title: "Examples", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="relative border-t border-white/10 bg-primary-gradient pb-8 pt-16">
    {/* Decorative elements */}
    <div className="from-blue-500 via-purple-500 to-pink-500 absolute left-0 right-0 top-0 h-1 bg-gradient-to-r opacity-20" />

    <Container>
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
        {/* Brand section */}
        <div className="flex flex-col items-start lg:max-w-xs">
          <div className="mb-6 flex items-center text-white">
            <Logo className="text-blue-400 mr-3 h-auto w-full" />
            <h1 className="text-7xl text-white">Taskly</h1>
          </div>

          <p className="mb-6 text-grey">
            The modern task management platform for teams to focus on what
            really matters.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors duration-200 hover:text-white"
              aria-label="Slack"
            >
              <SlackIcon />
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 group flex items-center text-sm  text-grey transition-colors duration-200 hover:text-white"
                    >
                      {link.title}
                      <span className="ml-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
        <p className="text-sm text-grey">
          © {new Date().getFullYear()} Taskly. All rights reserved.
        </p>

        <div className="mt-4 flex space-x-6 md:mt-0">
          <Link
            href="#"
            className="text-gray-400 text-sm text-white transition-colors hover:text-grey"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-gray-400 text-sm text-white transition-colors hover:text-grey"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-gray-400 text-sm text-white transition-colors hover:text-grey"
          >
            Cookies
          </Link>
        </div>
      </div>
    </Container>
  </footer>
);
