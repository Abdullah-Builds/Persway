import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import '../CoverPage.css'
import { useState } from 'react';
import { AuthModal } from "./AuthModal";
import React from 'react';

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}


export default function CoverPageLight() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const navigate = useNavigate();
  const navigation = [
    { name: 'About the Developer', href: '/aboutdev', current: false },
  ]
  return (
    <div className="cover-page-light">
      {/* Navbar */}
      <Disclosure as="nav" className="relative bg-white border-b border-gray-200 shadow-sm">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile menu button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 focus:outline-2 focus:outline-offset-1 focus:outline-blue-500">
                    <Bars3Icon aria-hidden="true" className={classNames(open ? 'hidden' : 'block', 'h-6 w-6')} />
                    <XMarkIcon aria-hidden="true" className={classNames(open ? 'block' : 'hidden', 'h-6 w-6')} />
                  </DisclosureButton>
                </div>

                {/* Logo / Brand */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <span className="text-xl font-semibold text-blue-600">Persway</span>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.href)}
                        className={classNames(
                          item.current
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600',
                          'rounded-md px-3 py-2 text-sm font-medium transition-colors'
                        )}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desktop Sign In / Sign Up */}
                <div className="hidden sm:flex absolute top-3 right-0  space-x-3">
                  <button
                    onClick={() => { setAuthMode("login"); setIsModalOpen(true); }}
                    className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span className="text-sm font-medium">Sign In</span>
                  </button>

                  <button
                    onClick={() => { setAuthMode("signup"); setIsModalOpen(true); }}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <span className="text-sm font-medium">Sign Up</span>
                  </button>
                </div>


              </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}

                {/* Sign In and Sign Up */}
                <button
                  onClick={() => { setAuthMode("login"); setIsModalOpen(true); }}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setAuthMode("signup"); setIsModalOpen(true); }}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left"
                >
                  Sign Up
                </button>


              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Hero Section */}
      <header className="relative px-4 sm:px-8 lg:px-16 py-12 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-float"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text section */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Boost Your Sales with Persway AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
              Generate compelling product descriptions in seconds and turn visitors into buyers. Persway helps e-commerce stores increase conversions with smart, AI-powered content.
            </p>
            <button className="btn blue-btn px-6 py-3 text-sm sm:text-base rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => navigate('/productpage')}>
              Get Started Free
            </button>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center lg:justify-end w-full lg:w-11/12 xl:w-10/12">
            <img
              src="/assets/images/mainpic.png"
              alt="Product mockup"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-2xl"
            />
          </div>


        </div>
      </header>



      {/* Features Section */}
      <section className="features-light px-4 sm:px-8 lg:px-16 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="feature-item text-center">
            <img
              src="/assets/images/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online.jpg"
              alt="Feature 1"
              className="mx-auto mb-6 rounded-lg shadow"
            />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">
              Optimize your store with smart AI recommendations that drive sales and engagement.
            </p>
          </div>
          <div className="feature-item text-center">
            <img
              src="assets/images/young-man-using-discount-coupon-his-smartphone-some-online-shopping-laptop.jpg"
              alt="Feature 2"
              className="mx-auto mb-6 rounded-lg shadow"
            />
            <h3 className="text-xl font-semibold mb-2">Instant AI Responses</h3>
            <p className="text-gray-600">
              Enter your product details and get persuasive, SEO-optimized descriptions in seconds. 
            </p>

          </div>
          <div className="feature-item text-center">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/40/57/22/1000_F_240572218_uEs1sfpFq1R8d6l7Dl0Xa2JIRzLry6kF.jpg"
              alt="Feature 3"
              className="mx-auto mb-6 rounded-lg shadow"
            />
            <h3 className="text-xl font-semibold mb-2">Seamless Integrations</h3>
            <p className="text-gray-600">
              Persway’s integrations streamline workflows, reduce manual work, and ensure that your product descriptions, and SEO optimizations are synced across all platforms.

            </p>
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="cta-section-light px-4 sm:px-8 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">Turn Every Product into a Bestseller</h2>
            <p className="text-gray-600 mb-6">
              Persway generates persuasive, SEO-optimized product descriptions in seconds, helping e-commerce stores engage shoppers, increase conversions, and grow sales effortlessly. Powered by advanced AI, Persway creates unique, high-converting copy tailored to your target audience, highlighting key features, benefits, and value propositions. It eliminates writer’s block and repetitive content, saving you hours of work while ensuring consistency and quality across your product catalog. Boost your store’s visibility, improve search engine rankings, and craft descriptions that capture attention, build trust, and turn browsers into loyal customers. Whether you have hundreds or thousands of products, Persway scales effortlessly to meet your needs, helping you drive revenue and grow your business faster than ever.
            </p>

          </div>
          <div>
            <img
              src="/assets/images/sales-retail-income-profit-accounting-concept.jpg"
              alt="Boost sales illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-glass px-4 sm:px-8 lg:px-16 py-8">
        <div className="footer-container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="footer-logo text-xl font-semibold text-blue-600">Persway</div>
          <div className="footer-links flex flex-wrap justify-center gap-4">
            <a href="/features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
          <div className="footer-socials flex justify-center gap-4 text-gray-700">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
          <div className="footer-copy col-span-full text-center text-gray-500 mt-4">
            © {new Date().getFullYear()} Persway. All rights reserved.
          </div>
        </div>
      </footer>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={authMode}
        onSwitchMode={(newMode) => setAuthMode(newMode)}
      />
    </div>
  )
}
