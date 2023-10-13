"use client";
import Image from 'next/image';
import logo from '../../public/images/logo.png'

export default function Footer() {
  return (
    <div className="footer text-white">
      <nav className="flex justify-center p-8 items-center gap-5 flex-col md:flex-row">
        <Image width={136} src={logo} alt="logo" loading='lazy' className='w-[136px] md:hidden' />
        <div className='flex-col text-center'>
          <p className="text-[20px] lg:text-[24px] font-[400] md:leading-[150%] md:opacity-[0.5] syne">VegaFi Decentralized Exchange Protocol</p>
          <p className="text-[20px] md:hidden font-[400] opacity-[0.5] syne">Docs</p>
        </div>
        <div className="flex gap-3">
          <a className="relative cursor-pointer group" href='https://vegafi.medium.com/'>
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[64px] w-[64px] md:h-[43px] md:w-[43px] group-hover:fill_color">
              <circle cx="32.5574" cy="32.1966" r="32.0404" transform="rotate(-53.5911 32.5574 32.1966)" fill="url(#paint0_linear_380_880)" fill-opacity="0.1" />
              <circle cx="32.5574" cy="32.1966" r="31.4235" transform="rotate(-53.5911 32.5574 32.1966)" stroke="url(#paint1_linear_380_880)" stroke-opacity="0.5" stroke-width="1.2338" />
              <defs>
                <linearGradient id="paint0_linear_380_880" x1="23.6862" y1="96.7486" x2="63.1864" y2="96.6882" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A38DF5" />
                  <stop offset="1" stop-color="#FFDCAF" />
                </linearGradient>
                <linearGradient id="paint1_linear_380_880" x1="23.6862" y1="96.7486" x2="63.1864" y2="96.6882" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A38DF5" />
                  <stop offset="1" stop-color="#FFDCAF" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/4 left-1/4 translate-x-[0%] translate-y-[10%] h-[40%]  w-auto" >
              <path d="M33.0869 3.92149L35.8821 1.23569V0.647461H26.2014L19.3022 17.9023L11.4545 0.647461H1.30413V1.23569L4.56904 5.1846C4.88824 5.47643 5.0524 5.90507 5.01136 6.3337V21.8512C5.11168 22.412 4.93384 22.982 4.54168 23.3879L0.861816 27.8703V28.4494H11.2858V27.8612L7.61052 23.3924C7.4136 23.1925 7.26548 22.9498 7.17769 22.6833C7.0899 22.4167 7.0648 22.1335 7.10437 21.8557V8.43127L16.2562 28.4585H17.3186L25.1891 8.43127V24.3865C25.1891 24.806 25.1891 24.8926 24.9155 25.1708L22.0838 27.9204V28.5087H35.8183V27.9204L33.0869 25.2346C32.8498 25.0522 32.7266 24.7467 32.7768 24.4503V4.7058C32.7532 4.55927 32.7695 4.40908 32.8241 4.27105C32.8787 4.13303 32.9694 4.01227 33.0869 3.92149Z" fill="white" />
            </svg>
          </a>
          <a className="relative cursor-pointer group" href='https://twitter.com/VegaFiOfficial'>
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[64px] w-[64px] md:h-[43px] md:w-[43px] group-hover:fill_color">
              <circle cx="32.5574" cy="32.1966" r="32.0404" transform="rotate(-53.5911 32.5574 32.1966)" fill="url(#paint0_linear_380_880)" fill-opacity="0.1" />
              <circle cx="32.5574" cy="32.1966" r="31.4235" transform="rotate(-53.5911 32.5574 32.1966)" stroke="url(#paint1_linear_380_880)" stroke-opacity="0.5" stroke-width="1.2338" />
              <defs>
                <linearGradient id="paint0_linear_380_880" x1="23.6862" y1="96.7486" x2="63.1864" y2="96.6882" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A38DF5" />
                  <stop offset="1" stop-color="#FFDCAF" />
                </linearGradient>
                <linearGradient id="paint1_linear_380_880" x1="23.6862" y1="96.7486" x2="63.1864" y2="96.6882" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A38DF5" />
                  <stop offset="1" stop-color="#FFDCAF" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/4 left-1/4 translate-x-[10%] translate-y-[10%] h-[40%]  w-auto">
              <path d="M24.2833 0.0693359H29.0097L18.6839 11.8711L30.8314 27.9305H21.32L13.8703 18.1905L5.34622 27.9305H0.616961L11.6614 15.3073L0.00830078 0.0693359H9.76115L16.495 8.97206L24.2833 0.0693359ZM22.6245 25.1016H25.2434L8.33809 2.74973H5.52768L22.6245 25.1016Z" fill="white" />
            </svg>
          </a>
          <a className="relative cursor-pointer group" href='https://t.me/vegafiportal'>
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[64px] w-[64px] md:h-[43px] md:w-[43px] group-hover:fill_color">
              <circle cx="32.5574" cy="32.1966" r="32.0404" transform="rotate(-53.5911 32.5574 32.1966)" fill="url(#paint0_linear_380_880)" fill-opacity="0.1" />
              <circle cx="32.5574" cy="32.1966" r="31.4235" transform="rotate(-53.5911 32.5574 32.1966)" stroke="url(#paint1_linear_380_880)" stroke-opacity="0.5" stroke-width="1.2338" />
              <defs>
                <linearGradient id="paint0_linear_380_880" x1="23.6862" y1="96.7486" x2="63.1864" y2="96.6882" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A38DF5" />
                  <stop offset="1" stop-color="#FFDCAF" />
                </linearGradient>
                <linearGradient id="paint1_linear_380_880" x1="23.6862" y1="96.7486" x2="63.1864" y2="96.6882" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A38DF5" />
                  <stop offset="1" stop-color="#FFDCAF" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/4 left-1/4 translate-x-[0%] translate-y-[10%] h-[40%]  w-auto">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47107 12.0634C11.2507 8.13154 17.1051 5.53942 20.0344 4.28704C28.3981 0.711222 30.136 0.0900656 31.2687 0.0695546C31.5179 0.0650435 32.0749 0.128509 32.4358 0.42947C32.7404 0.683595 32.8243 1.02688 32.8644 1.26782C32.9045 1.50876 32.9545 2.05763 32.9147 2.48649C32.4615 7.38151 30.5004 19.2604 29.5027 24.7429C29.0805 27.0628 28.2492 27.8406 27.4445 27.9167C25.6956 28.0822 24.3675 26.7287 22.6736 25.5873C20.0229 23.8013 18.5255 22.6895 15.9526 20.9467C12.9791 18.9325 14.9067 17.8255 16.6012 16.0164C17.0447 15.5429 24.7505 8.33832 24.8997 7.68475C24.9183 7.60301 24.9356 7.29833 24.7595 7.13744C24.5834 6.97655 24.3235 7.03157 24.136 7.07533C23.8701 7.13735 19.6357 10.0143 11.4326 15.706C10.2307 16.5544 9.14202 16.9678 8.1666 16.9461C7.09129 16.9222 5.02281 16.3211 3.4851 15.8073C1.59905 15.1772 0.100051 14.844 0.23058 13.7737C0.298567 13.2163 1.0454 12.6462 2.47107 12.0634Z" fill="white" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}
