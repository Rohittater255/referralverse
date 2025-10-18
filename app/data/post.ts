import { Post, Category } from '../types';

export const posts: Post[] = [
  {
    slug: 'drinkprime-referral-code',
    title: 'Drinkprime Referral Code',
    category: Category.Health,
    summary: 'Get 7 days free trial and ₹100 off on your Drinkprime subscription with our exclusive referral code.',
    brand: {
      name: 'Drinkprime',
      logoUrl: 'https://picsum.photos/seed/drinkprime/100/100'
    },
    referralCode: 'ZIHCQMNY',
    referralLink: 'https://drinkprime.in/get-started',
    signupBonus: '₹100 Off',
    referralBonus: '7 Days Free Trial',
    validity: 'Valid until Dec 31, 2024',
    steps: [
      'Click on the "Claim Now" button or visit the Drinkprime website.',
      'Enter your details to sign up for a new account.',
      'Apply the referral code ZIHCQMNY at checkout.',
      'Enjoy your discount and free trial!'
    ],
    ctaText: 'Claim Now',
    offer: {
      price: 100,
      currency: 'INR'
    },
    postedOn: 'Oct 10, 2024'
  },
  {
    slug: 'swiggy-one-coupon',
    title: 'Swiggy One Coupon',
    category: Category.Food,
    summary: 'Enjoy unlimited free deliveries and up to 30% extra discounts on restaurants with Swiggy One.',
    brand: {
      name: 'Swiggy',
      logoUrl: 'https://picsum.photos/seed/swiggy/100/100'
    },
    referralCode: 'WELCOME50',
    referralLink: 'https://swiggy.com/one',
    signupBonus: '50% off first 3 months',
    referralBonus: 'Extra ₹50 Swiggy Money',
    validity: 'Limited time offer',
    steps: [
      'Open the Swiggy App or Website.',
      'Navigate to the Swiggy One section.',
      'Choose your plan and apply coupon WELCOME50.',
      'Complete the payment and start saving!'
    ],
    ctaText: 'Get Swiggy One',
    offer: {
      price: 149,
      currency: 'INR'
    },
    postedOn: 'Oct 09, 2024'
  },
  {
    slug: 'zerodha-account-opening',
    title: 'Zerodha Account Opening Offer',
    category: Category.Finance,
    summary: 'Open a free Demat and Trading account with Zerodha, India\'s largest stock broker.',
    brand: {
      name: 'Zerodha',
      logoUrl: 'https://picsum.photos/seed/zerodha/100/100'
    },
    referralCode: 'AB1234',
    referralLink: 'https://zerodha.com/open-account',
    signupBonus: 'Free Account Opening',
    referralBonus: '300 Reward Points',
    validity: 'Ongoing Offer',
    steps: [
      'Visit the Zerodha account opening page using our link.',
      'Enter your mobile number and verify with OTP.',
      'Complete the KYC process with your PAN and Aadhaar.',
      'Your account will be activated within 24 hours.'
    ],
    ctaText: 'Open Free Account',
    offer: {
      price: 0,
      currency: 'INR'
    },
    postedOn: 'Oct 08, 2024'
  },
  {
    slug: 'myntra-first-order-coupon',
    title: 'Myntra First Order Coupon',
    category: Category.Shopping,
    summary: 'Get Flat ₹400 off on your first order above ₹2499 on Myntra. Applicable on a wide range of products.',
    brand: {
      name: 'Myntra',
      logoUrl: 'https://picsum.photos/seed/myntra/100/100'
    },
    referralCode: 'MYNTRA400',
    referralLink: 'https://www.myntra.com',
    signupBonus: 'Flat ₹400 Off',
    referralBonus: 'N/A',
    validity: 'Valid for new users only',
    steps: [
      'Go to the Myntra website or app.',
      'Add products worth ₹2499 or more to your cart.',
      'Proceed to checkout and apply the coupon code MYNTRA400.',
      'The discount will be applied instantly.'
    ],
    ctaText: 'Shop on Myntra',
    offer: {
      price: 400,
      currency: 'INR'
    },
    postedOn: 'Oct 07, 2024'
  },
    {
    slug: 'makemytrip-flight-offer',
    title: 'MakeMyTrip Flight Offer',
    category: Category.Travel,
    summary: 'Get up to ₹1200 instant discount on domestic flight bookings. Plan your travel now!',
    brand: {
      name: 'MakeMyTrip',
      logoUrl: 'https://picsum.photos/seed/mmt/100/100'
    },
    referralCode: 'MMTFLIGHT',
    referralLink: 'https://www.makemytrip.com/flights/',
    signupBonus: 'Up to ₹1200 Off',
    referralBonus: '₹150 MMT Cash',
    validity: 'Check T&C on website',
    steps: [
      'Visit the MakeMyTrip website or app.',
      'Search for your desired domestic flights.',
      'On the checkout page, apply the coupon code MMTFLIGHT.',
      'Enjoy your instant discount.'
    ],
    ctaText: 'Book Flights',
    offer: {
      price: 1200,
      currency: 'INR'
    },
    postedOn: 'Oct 06, 2024'
  },
  {
    slug: 'cult-fit-free-trial',
    title: 'Cult.fit Free Trial Pass',
    category: Category.Health,
    summary: 'Explore Cult centers with a free 2-day trial pass. Access gym, group classes, and more.',
    brand: {
      name: 'Cult.fit',
      logoUrl: 'https://picsum.photos/seed/cult/100/100'
    },
    referralCode: 'CULTFRIEND',
    referralLink: 'https://www.cult.fit/get-pass',
    signupBonus: '2-Day Free Trial',
    referralBonus: '15 Days Free Extension',
    validity: 'For new users in select cities',
    steps: [
      'Download the Cult.fit app.',
      'Sign up and verify your mobile number.',
      'In the "Refer & Earn" section, enter the code CULTFRIEND.',
      'Your free 2-day pass will be activated.'
    ],
    ctaText: 'Get Free Pass',
    offer: {
      price: 0,
      currency: 'INR'
    },
    postedOn: 'Oct 05, 2024'
  }
];