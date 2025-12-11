/**
 * CONFIGURATION FILE
 * 
 * Update all your business details here, then find and replace across all HTML files.
 * This file is for reference only - not used by the website.
 */

// ==========================================
// BUSINESS INFORMATION
// ==========================================

const BUSINESS_CONFIG = {
  // Company Details
  companyName: "FinLegal Advisors",
  tagline: "Expert Financial & Tax Advisory Services",
  
  // Contact Information
  phone: {
    display: "+91 98765 43210",
    link: "+919555489525",        // For tel: links (no spaces or hyphens)
    whatsapp: "919555489525"       // For WhatsApp (no + symbol)
  },
  
  email: {
    primary: "pkguptanassociates@gmail.com",
    support: "support@finlegaladvisors.com"
  },
  
  // Office Address
  address: {
    line1: "123 Business Tower",
    line2: "MG Road",
    city: "Bangalore",
    pincode: "560001",
    state: "Karnataka",
    country: "India",
    full: "123 Business Tower, MG Road, Bangalore - 560001, Karnataka, India"
  },
  
  // Business Hours
  hours: {
    weekdays: "10:00 AM - 6:00 PM",
    saturday: "10:00 AM - 2:00 PM",
    sunday: "Closed"
  },
  
  // Social Media (Optional)
  social: {
    facebook: "https://facebook.com/yourpage",
    twitter: "https://twitter.com/yourhandle",
    linkedin: "https://linkedin.com/company/yourcompany",
    instagram: "https://instagram.com/yourhandle"
  },
  
  // Google Maps
  maps: {
    embedUrl: "PASTE_YOUR_GOOGLE_MAPS_EMBED_URL_HERE",
    directionsUrl: "https://maps.google.com/?q=YOUR_LOCATION"
  }
};

// ==========================================
// SERVICES CONFIGURATION
// ==========================================

const SERVICES = [
  {
    name: "GST Registration & Filing",
    icon: "fas fa-file-invoice",
    shortDesc: "Complete GST registration, monthly/quarterly return filing, and compliance management.",
    features: [
      "New GST Registration",
      "Monthly/Quarterly Return Filing (GSTR-1, GSTR-3B)",
      "Annual Return Filing (GSTR-9)",
      "GST Compliance Advisory",
      "Input Tax Credit Management"
    ]
  },
  {
    name: "ITR Filing",
    icon: "fas fa-calculator",
    shortDesc: "Expert income tax return filing with maximum tax savings.",
    features: [
      "Individual ITR Filing (Salaried & Self-Employed)",
      "Business ITR Filing",
      "Capital Gains Calculation & Filing",
      "Tax Planning & Optimization",
      "Revised Return Filing"
    ]
  },
  {
    name: "Tax Consultancy",
    icon: "fas fa-chart-line",
    shortDesc: "Strategic tax planning and consultation services.",
    features: [
      "Tax Planning & Strategy",
      "Tax Notice Response & Representation",
      "TDS Compliance & Advisory",
      "Tax Audit Services",
      "International Taxation Advisory"
    ]
  },
  {
    name: "Business Registration",
    icon: "fas fa-building",
    shortDesc: "Complete business registration and incorporation services.",
    features: [
      "Private Limited Company Registration",
      "LLP Formation",
      "Partnership Firm Registration",
      "Sole Proprietorship Setup",
      "Business Licensing & Permits"
    ]
  },
  {
    name: "Compliance Management",
    icon: "fas fa-clipboard-check",
    shortDesc: "End-to-end compliance management for businesses.",
    features: [
      "ROC Compliance & Annual Filings",
      "Board Meeting & AGM Management",
      "Statutory Registers Maintenance",
      "Director KYC & DIN Services",
      "Compliance Calendar & Reminders"
    ]
  },
  {
    name: "Financial Planning",
    icon: "fas fa-hand-holding-usd",
    shortDesc: "Strategic financial planning and wealth management.",
    features: [
      "Personal Financial Planning",
      "Investment Advisory Services",
      "Retirement Planning",
      "Insurance Planning",
      "Estate Planning"
    ]
  }
];

// ==========================================
// GOOGLE SHEETS CONFIGURATION
// ==========================================

const GOOGLE_SHEETS = {
  // Replace with your Google Apps Script Web App URL
  scriptUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
  
  // Sheet names (must match exactly in Google Sheets)
  sheets: {
    serviceBookings: "ServiceBookings",
    appointments: "Appointments",
    contacts: "Contacts"
  }
};

// ==========================================
// WEBSITE METADATA
// ==========================================

const SEO_CONFIG = {
  home: {
    title: "Legal Financial Advisor | GST, ITR & Tax Consultation Services",
    description: "Expert GST Registration, ITR Filing, Tax Consultation, and Compliance Management services in India.",
    keywords: "GST registration, ITR filing, tax consultant, financial advisor, India"
  },
  
  services: {
    title: "Our Services | Legal Financial Advisor",
    description: "Complete range of GST, ITR, Tax Consultation, and Financial Advisory Services.",
    keywords: "GST services, ITR services, tax planning, business registration, compliance"
  },
  
  appointment: {
    title: "Book Appointment | Legal Financial Advisor",
    description: "Book a consultation with our expert financial and tax advisors.",
    keywords: "book appointment, tax consultation, financial consultation"
  },
  
  contact: {
    title: "Contact Us | Legal Financial Advisor",
    description: "Get in touch with our expert financial and tax advisors.",
    keywords: "contact, reach us, financial advisor contact"
  }
};

// ==========================================
// COLOR SCHEME
// ==========================================

const THEME = {
  primary: {
    name: "Blue",
    dark: "#1e3a8a",      // blue-900
    medium: "#2563eb",    // blue-600
    light: "#eff6ff"      // blue-50
  },
  
  // Alternative: Green Theme
  // Uncomment to use green theme
  /*
  primary: {
    name: "Green",
    dark: "#065f46",      // green-900
    medium: "#059669",    // green-600
    light: "#ecfdf5"      // green-50
  },
  */
  
  // Alternative: Dark Green Theme
  /*
  primary: {
    name: "Dark Green",
    dark: "#064e3b",      // emerald-900
    medium: "#10b981",    // emerald-500
    light: "#d1fae5"      // emerald-100
  },
  */
};

// ==========================================
// FIND AND REPLACE CHECKLIST
// ==========================================

/*
STEP-BY-STEP REPLACEMENT GUIDE:

1. COMPANY NAME
   Find: "FinLegal Advisors"
   Replace: Your Company Name

2. PHONE NUMBER (Display Format)
   Find: "+91 98765 43210"
   Replace: Your Phone (with country code)

3. PHONE NUMBER (Link Format)
   Find: "+919555489525"
   Replace: Your Phone (no spaces/hyphens)

4. WHATSAPP NUMBER
   Find: "919555489525"
   Replace: Your WhatsApp (no + symbol)

5. EMAIL ADDRESS
   Find: "pkguptanassociates@gmail.com"
   Replace: Your Email

6. OFFICE ADDRESS
   Find: "123 Business Tower, MG Road, Bangalore - 560001"
   Replace: Your Address

7. GOOGLE APPS SCRIPT URL
   File: js/forms.js
   Find: "YOUR_SERVICE_BOOKINGS_SCRIPT_URL_HERE"
   Replace: Your Script URL

FILES TO UPDATE:
✓ index.html
✓ services.html
✓ appointment.html
✓ contact.html
✓ js/forms.js (Google Apps Script URL)

OPTIONAL UPDATES:
- Add logo image
- Change color theme
- Update business hours
- Add social media links
- Add Google Maps embed
*/

// ==========================================
// DEPLOYMENT CHECKLIST
// ==========================================

/*
PRE-DEPLOYMENT CHECKLIST:

□ Google Sheets created with correct sheet names
□ Google Apps Script deployed and URL updated
□ All contact information updated
□ Company name updated across all pages
□ Test all forms (Service, Appointment, Contact)
□ Verify data appears in Google Sheets
□ Test on mobile devices
□ Test all navigation links
□ Check WhatsApp button
□ Verify email links
□ Test responsive design
□ Check all images load
□ Validate HTML/CSS
□ Test in different browsers
□ Check page load speed
□ Verify SEO meta tags
□ Add Google Analytics (optional)
□ Add favicon (optional)
□ SSL certificate if custom domain
□ Test contact forms work
□ Verify error messages display
□ Check success messages display

POST-DEPLOYMENT:
□ Monitor Google Sheets for submissions
□ Test live forms
□ Check mobile responsiveness
□ Monitor website analytics
□ Set up email notifications (optional)
*/
