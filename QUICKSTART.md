# 🚀 QUICK REFERENCE CARD

## 📁 File Structure
```
web/
├── index.html              # Home page
├── services.html           # Services listing with booking modals
├── appointment.html        # Appointment booking form
├── contact.html           # Contact form
├── css/
│   └── styles.css         # Custom styling
├── js/
│   ├── main.js            # Navigation & animations
│   └── forms.js           # Form handling + Google Sheets
├── README.md              # Full documentation
├── SETUP_GUIDE.md         # Step-by-step setup
├── google-apps-script.js  # Script for Google Sheets
└── CONFIG_REFERENCE.js    # Configuration reference
```

## ⚡ 3-Step Setup

### 1️⃣ Google Sheets Setup
```
Create spreadsheet: "FinLegal Advisors - Form Submissions"
Create 3 tabs: ServiceBookings, Appointments, Contacts
Add column headers (see SETUP_GUIDE.md)
```

### 2️⃣ Deploy Google Apps Script
```
Extensions > Apps Script
Paste code from google-apps-script.js
Deploy > New deployment > Web app
Execute as: Me | Access: Anyone
Copy Web App URL
```

### 3️⃣ Update forms.js
```javascript
// In js/forms.js (lines 8-12)
const GOOGLE_SHEETS_CONFIG = {
    serviceBookings: 'PASTE_YOUR_URL_HERE',
    appointments: 'PASTE_YOUR_URL_HERE',
    contacts: 'PASTE_YOUR_URL_HERE'
};
```

## 🎨 Quick Customization

### Update Contact Info (Find & Replace in ALL HTML files)
```
+91 98765 43210        → Your phone
919555489525           → Your WhatsApp (no +)
pkguptanassociates@gmail.com → Your email
FinLegal Advisors      → Your company name
```

### Change Color Theme (Find & Replace in ALL HTML files)
```
Blue to Green:
blue-900 → green-900
blue-600 → green-600  
blue-50  → green-50
```

### Add Your Logo
```html
<!-- Replace in all HTML files (header section) -->
<img src="images/logo.png" alt="Logo" class="h-8">
```

## 📋 Google Sheets Column Headers

### ServiceBookings Tab
```
Timestamp | Service | Name | Email | Phone | Message
```

### Appointments Tab
```
Timestamp | Name | Phone | Email | Preferred Date | Preferred Time | Service Type | Message
```

### Contacts Tab
```
Timestamp | Name | Email | Phone | Subject | Message
```

## 🧪 Testing Forms

1. **Open website locally** (double-click index.html)
2. **Test each form:**
   - Services → Click "Book This Service" 
   - Appointment → Fill and submit
   - Contact → Fill and submit
3. **Check Google Sheets** for new rows
4. **Verify success messages** appear

## 🐛 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Forms not submitting | Check Google Apps Script URL in forms.js |
| Data not in sheets | Verify sheet names are exact: ServiceBookings, Appointments, Contacts |
| "Not authorized" error | Redeploy script with "Execute as: Me" |
| Mobile menu not working | Clear cache, check if main.js loads |
| Phone validation fails | Must be exactly 10 digits |

## 📞 Contact Information Locations

Update these in **ALL 4 HTML files** (index, services, appointment, contact):

```html
<!-- Phone (2 formats needed) -->
<a href="tel:+919555489525">+91 98765 43210</a>

<!-- WhatsApp (no + in URL) -->
<a href="https://wa.me/919555489525">WhatsApp Us</a>

<!-- Email -->
<a href="mailto:pkguptanassociates@gmail.com">Email</a>

<!-- Company Name -->
<span>FinLegal Advisors</span>
```

## 🌐 Deployment Options

### Local Testing
```
Just open index.html in browser
```

### GitHub Pages (FREE)
```
1. Create GitHub repo
2. Upload files
3. Settings > Pages > Deploy
```

### Netlify (FREE)
```
1. Go to netlify.com
2. Drag & drop 'web' folder
3. Instant deployment
```

## 📧 Enable Email Notifications

In Google Apps Script:

```javascript
// Line 82 - Add your email
const adminEmail = "youremail@gmail.com";

// Line 60 - Uncomment this line
sendEmailNotification(sheetName, data);

// Save and redeploy (Deploy > Manage > New version)
```

## 🎯 Pre-Launch Checklist

- [ ] Google Sheets created with 3 tabs
- [ ] Apps Script deployed and URL copied
- [ ] forms.js updated with script URL
- [ ] All forms tested and working
- [ ] Data appearing in Google Sheets
- [ ] Contact info updated (phone, email, address)
- [ ] Company name updated
- [ ] Tested on mobile
- [ ] All links work (navigation, WhatsApp, email)
- [ ] Images loading properly
- [ ] Success/error messages showing

## 💡 Pro Tips

1. **Test in Incognito Mode** to simulate first-time visitors
2. **Use Chrome DevTools** (F12) to debug issues
3. **Check Google Sheets immediately** after form submission
4. **Add favicon.ico** for professional look
5. **Set up Google Analytics** to track visitors (optional)
6. **Enable email notifications** to get instant alerts
7. **Backup your Google Sheets** regularly

## 🔗 Quick Links

- Google Sheets: https://sheets.google.com
- Apps Script: Extensions > Apps Script (in your sheet)
- TailwindCSS Docs: https://tailwindcss.com/docs
- Font Awesome Icons: https://fontawesome.com/icons

## 📱 Browser Testing

Test on:
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox
- ✅ Safari (Mac & iOS)
- ✅ Edge
- ✅ Mobile browsers (Android & iOS)

## 🎨 Color Codes Reference

**Current Blue Theme:**
- Primary Dark: `#1e3a8a` (blue-900)
- Primary Medium: `#2563eb` (blue-600)
- Primary Light: `#eff6ff` (blue-50)

**Green Alternative:**
- Primary Dark: `#065f46` (green-900)
- Primary Medium: `#059669` (green-600)
- Primary Light: `#ecfdf5` (green-50)

## 📖 Documentation Files

- **README.md** - Complete documentation
- **SETUP_GUIDE.md** - Step-by-step setup instructions  
- **CONFIG_REFERENCE.js** - All customization options
- **google-apps-script.js** - Script for Google Sheets
- **QUICKSTART.md** - This file!

---

## 🎉 You're Ready!

Once you've completed the 3-step setup and tested the forms, your website is ready to go live!

**Need help?** Check the troubleshooting section in README.md or SETUP_GUIDE.md

**Good luck with your Legal Financial Advisory business! 🚀**
