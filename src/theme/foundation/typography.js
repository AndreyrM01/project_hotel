import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
});

const typography = {
  fonts: {
    body: poppins.style.fontFamily,
    heading: poppins.style.fontFamily,
  },
};

export default typography;
