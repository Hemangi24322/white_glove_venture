import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contact-section"
      className="bg-gray-950 text-gray-400 py-12 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Essential Links */}
          <div>
            <h4 className="text-xl font-semibold tracking-tight text-white mb-4">
              White Glove Ventures
            </h4>
            <nav className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="block hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/contact"
                className="block hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold tracking-tight text-white mb-4">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm">
              Sign up for exclusive deals and market insights.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-700 text-white"
                aria-label="Email for newsletter"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

          {/* Social Media and Contact */}
          <div>
            <h4 className="text-xl font-semibold tracking-tight text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/whiteglove-ventures/?
                "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/whiteglove_v/
                "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 hover:text-white transition-colors" />
              </a>
              <a
                href="contact@whiteglove.ventures
"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} White Glove Ventures. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
