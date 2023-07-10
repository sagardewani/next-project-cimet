import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

const typography = {
  fontFamily: 'roboto',
  fontSize: 14,
  color: 'black',
  yearlyPrice: {
    color: '#1b2a74',
    fontSize: 24,
    fontWeight: 700,
  },
  monthlyPrice: {
    color: '#2e5ea1',
    fontSize: 16,
    fontWeight: 500,
  },
  durationSymbol: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 500,
  },
  costModalTitle: {
    color: 'white',
    fontSize: 14,
  },
};

export default typography;