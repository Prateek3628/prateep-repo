/**
 * TAX BROTHERS CONFIGURATION FILE
 * 
 * Update all your business details here. This data will be automatically
 * loaded into all pages.
 */

const CONFIG = {
  // ==========================================
  // BUSINESS INFORMATION
  // ==========================================
  business: {
    companyName: "Tax Brothers",
    tagline: "Simplifying Tax, Empowering Business",

    phone: {
      display: "+91 96693 36755",
      link: "+919669336755",
      whatsapp: "919669336755"
    },

    email: {
      primary: "contact@taxbrothers.in",
      support: "contact@taxbrothers.in"
    },

    address: {
      line1: "H15, 2ND FLOOR, HOD BUILDING",
      line2: "HARGOVIND ENCLAVE, KARKARDOOMA",
      city: "NEW DELHI",
      pincode: "110092",
      state: "Delhi",
      country: "India",
      full: "H15, 2ND FLOOR, HOD BUILDING, HARGOVIND ENCLAVE, KARKARDOOMA, NEW DELHI 110092"
    },

    hours: {
      weekdays: "10:00 AM - 7:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed"
    },

    social: {
      facebook: "https://facebook.com/taxbrothers.in",
      instagram: "https://instagram.com/taxbrothers.in",
      youtube: "https://youtube.com/@taxbrothersindia"
    },

    maps: {
      embedUrl: "PASTE_YOUR_GOOGLE_MAPS_EMBED_URL_HERE",
      directionsUrl: "https://maps.google.com/?q=H15+Hargovind+Enclave+Karkardooma+Delhi"
    }
  },

  // ==========================================
  // SHOWCASE SERVICES (for home page display only - not actual service pages)
  // ==========================================
  showcaseServices: [
    {
      id: "business-registration",
      name: "Business Registration",
      icon: "fas fa-building",
      shortDesc: "Complete business registration and incorporation services for all types of entities.",
      fullDesc: "From sole proprietorships to public limited companies, we handle all types of business registrations with complete documentation and compliance support.",
      image: "images/bussiness.png",
      features: [
        "Sole Proprietorship Setup",
        "Partnership Firm Registration",
        "LLP Formation",
        "Private Limited Company Registration",
        "OPC Registration",
        "Section 8 Company Registration",
        "Public Limited Company Registration",
        "Producer Company Registration",
        "Nidhi Company Registration",
        "NBFC Registration",
        "Trust / NGO Registration"
      ]
    },
    {
      id: "gst-services",
      name: "GST Services",
      icon: "fas fa-file-invoice",
      shortDesc: "Complete GST registration, return filing, and compliance management services.",
      fullDesc: "End-to-end GST services including registration, monthly/quarterly/annual filing, amendments, notice handling, and complete compliance support.",
      image: "images/GST.png",
      features: [
        "New GST Registration",
        "Monthly/Quarterly Return Filing",
        "Annual Return Filing (GSTR-9)",
        "Input Tax Credit Management",
        "GST Amendments",
        "GST Notice Reply",
        "GST Accounting & Reconciliation",
        "E-Invoice & E-Way Bill",
        "GST LUT Filing",
        "GST Cancellation",
        "GST Refund",
        "GST Compliance Advisory"
      ]
    },
    {
      id: "mca-compliance",
      name: "MCA Compliance",
      icon: "fas fa-clipboard-check",
      shortDesc: "Complete MCA compliance and ROC filing services for companies.",
      fullDesc: "Comprehensive Ministry of Corporate Affairs (MCA) compliance services including company incorporation, annual filings, board resolutions, and all statutory compliances.",
      image: "images/MCA.png",
      features: [
        "Company Incorporation",
        "Board Resolution Drafting & Filing",
        "Auditor Appointment (ADT-1)",
        "Filing of AOC-4 (Financial Statements)",
        "Filing of MGT-7 / MGT-7A (Annual Return)",
        "DIN Allotment",
        "DIR-3 KYC filing",
        "Resignation/Appointment of Director (DIR-12)",
        "Commencement of Business (INC-20A)",
        "Change of Registered Office (INC-22)",
        "Change in Company Name",
        "Change in Object Clause (MOA Amendment)",
        "Change in Capital Structure",
        "Amendment in MOA & AOA",
        "Strike Off of Company (STK-2)"
      ]
    },
    {
      id: "income-tax-services",
      name: "Income Tax Services",
      icon: "fas fa-calculator",
      shortDesc: "Expert income tax return filing and tax planning services.",
      fullDesc: "Professional ITR filing services for individuals, businesses, and companies with complete tax planning, TDS compliance, and notice handling support.",
      image: "images/itr.jpg",
      features: [
        "Income Tax Return (ITR) Filing",
        "ITR for Individual, companies & LLPs",
        "Tax Planning & Advisory",
        "TDS/TCS Compliance",
        "PAN & TAN Services",
        "Income Tax Notice Handling",
        "Advance Tax & Self-Assessment Tax",
        "Tax Audit Services",
        "Capital Gains Tax Services",
        "Business & Professional Income Computation",
        "Form 16 / Form 26AS / AIS & TIS Review",
        "NRI Income Tax Services"
      ]
    },
    {
      id: "registration-license",
      name: "Registration & License",
      icon: "fas fa-certificate",
      shortDesc: "Various business registrations and licensing services.",
      fullDesc: "Complete registration and licensing services including trademark, import-export, FSSAI, PF/ESI, ISO certification, and more.",
      image: "images/registration.png",
      features: [
        "Trademark Registration",
        "Import Export Code",
        "FSSAI Registration",
        "FSSAI License",
        "Trade License",
        "PF Registration",
        "ESI Registration",
        "ISO Certification",
        "12A & 80G Registration",
        "Udyam Registration",
        "Digital Signature"
      ]
    }
  ],

  // ==========================================
  // ACTUAL SERVICES (These will have dedicated pages)
  // ==========================================
  services: [
    {
      id: "gst-services",
      name: "GST Services",
      icon: "fas fa-file-invoice-dollar",
      page: "gst-services.html",
      shortDesc: "Complete GST registration, return filing, compliance, amendments, and audit support—all managed by tax experts.",
      image: "images/2.png",
      detailedSections: [
        {
          title: "GST Registration",
          items: [
            "New GST registration",
            "GST migration",
            "LUT (Letter of Undertaking) filing for exports"
          ]
        },
        {
          title: "GST Return Filing",
          items: [
            "Monthly/Quarterly GSTR-1",
            "GSTR-3B filing",
            "GSTR-9 & 9C annual return",
            "CMP-08 (Composition Scheme)"
          ]
        },
        {
          title: "GST Compliance & Advisory",
          items: [
            "GST invoice compliance",
            "Input Tax Credit (ITC) review",
            "GST notices reply & assessment",
            "E-Invoicing setup & support",
            "GST reconciliation (books vs portal)"
          ]
        },
        {
          title: "GST Amendments & Updates",
          items: [
            "Amendment in GST registration details",
            "Addition/removal of authorized signatory",
            "Business address change",
            "Core & non-core amendments"
          ]
        },
        {
          title: "GST Audit & Reporting",
          items: [
            "GST audit support",
            "Document preparation & verification",
            "Compliance reports for businesses"
          ]
        },
        {
          title: "Specialized GST Services",
          items: [
            "GST on e-commerce sellers",
            "GST for service providers & manufacturers",
            "Reverse charge mechanism (RCM) compliance",
            "GST refund filing (exporters, ITC, excess tax paid)"
          ]
        }
      ]
    },
    {
      id: "income-tax-services",
      name: "Income Tax Services",
      icon: "fas fa-calculator",
      page: "income-tax-services.html",
      shortDesc: "Expert ITR filing, tax planning, TDS compliance, and complete income tax support for individuals and businesses.",
      image: "images/3.png",
      detailedSections: [
        {
          title: "Income Tax Return (ITR) Filing",
          items: [
            "ITR for salaried individuals",
            "ITR for professionals & freelancers",
            "ITR for business owners & firms",
            "ITR for companies & LLPs"
          ]
        },
        {
          title: "Tax Planning & Advisory",
          items: [
            "Year-round tax planning",
            "Investment planning for tax saving",
            "Guidance on deductions & exemptions",
            "Capital gains tax planning"
          ]
        },
        {
          title: "TDS/TCS Compliance",
          items: [
            "TDS return filing (24Q, 26Q, 27Q)",
            "TCS return filing",
            "TDS reconciliation with Form 26AS",
            "TDS payment & challan support"
          ]
        },
        {
          title: "PAN & TAN Services",
          items: [
            "New PAN card application",
            "Corrections/updates in PAN",
            "TAN registration for businesses"
          ]
        },
        {
          title: "Income Tax Notice Handling",
          items: [
            "Reply to Section 143(1), 139(9), 148, etc.",
            "Scrutiny assessment support",
            "Reassessment & rectification filings",
            "Liaison with the Income Tax Department"
          ]
        },
        {
          title: "Advance Tax & Self-Assessment Tax",
          items: [
            "Calculation & reminders",
            "Challan preparation",
            "Payment support"
          ]
        },
        {
          title: "Tax Audit Services",
          items: [
            "44AB tax audit for businesses",
            "Compliance review & reporting",
            "Documentation & audit report filing"
          ]
        },
        {
          title: "Capital Gains Tax Services",
          items: [
            "Computation of short-term and long-term CG",
            "Real estate capital gains advisory",
            "Exemption planning (54, 54F, 54EC, etc.)"
          ]
        },
        {
          title: "Business & Professional Income Computation",
          items: [
            "Books-based income calculation",
            "Presumptive taxation (44AD/44ADA/44AE)",
            "Ledger review & financial analysis"
          ]
        },
        {
          title: "Form 16 / Form 26AS / AIS & TIS Review",
          items: [
            "Mismatch correction",
            "Advisory on reported incomes",
            "Reconciliation for filing"
          ]
        },
        {
          title: "NRI Income Tax Services",
          items: [
            "NRI tax return filing",
            "Double Tax Avoidance Agreement (DTAA) support",
            "Tax on foreign income",
            "Capital gains on property sale"
          ]
        },
        {
          title: "Other Support Services",
          items: [
            "Rectification of ITR under Section 154",
            "Revised return filing",
            "Loss carry-forward & set-off assistance",
            "Refund status tracking"
          ]
        }
      ]
    },
    {
      id: "mca-services",
      name: "MCA Services",
      icon: "fas fa-building",
      page: "mca-services.html",
      shortDesc: "Complete Ministry of Corporate Affairs compliance including company incorporation, annual filings, and ROC services.",
      image: "images/4.png",
      detailedSections: [
        {
          title: "Company Incorporation & Registration",
          items: [
            "Private Limited Company Registration",
            "One Person Company (OPC) Registration",
            "LLP Registration",
            "Partnership Firm Registration (via MCA-based compliances)",
            "Section 8 Company Registration (NGO)",
            "Indian Subsidiary Registration"
          ]
        },
        {
          title: "MCA Annual Compliance",
          items: [
            "Filing of AOC-4 (Financial Statements)",
            "Filing of MGT-7 / MGT-7A (Annual Return)",
            "DIR-3 KYC filing",
            "MSME Form 1 filing",
            "DPT-3 filing",
            "INC-20A (Commencement of Business)",
            "Active INC-22A (if applicable)"
          ]
        },
        {
          title: "Director-Related Services",
          items: [
            "DIN Allotment",
            "DIN KYC (DIR-3 KYC)",
            "Resignation / Appointment of Director (DIR-12)",
            "Change in Designation (Director to MD, etc.)"
          ]
        },
        {
          title: "Company Changes & Modifications",
          items: [
            "Change of Registered Office (INC-22)",
            "Change in Company Name",
            "Change in Object Clause (MOA Amendment)",
            "Change in Capital Structure (Increase / Decrease)",
            "Change of Directors or Shareholders",
            "Amendment in MOA & AOA",
            "Shifting of Registered Office from one state to another"
          ]
        },
        {
          title: "MCA Event-Based Compliances",
          items: [
            "PAS-3 (Return of Allotment)",
            "SH-7 (Increase in Authorized Capital)",
            "CHG-1 / CHG-4 (Creation or Satisfaction of Charge)",
            "FLA Return Filing",
            "MSME Form",
            "Auditor Appointment (ADT-1)",
            "Board Resolution Drafting & Filing"
          ]
        },
        {
          title: "Closure & Strike Off Services",
          items: [
            "Strike Off of Company (STK-2)",
            "LLP Closure",
            "Winding Up Support Documentation"
          ]
        },
        {
          title: "MCA Legal & Advisory",
          items: [
            "Compliance Audit",
            "Corporate Governance Advisory",
            "Secretarial Audit Support",
            "ROC Notice Reply",
            "Penalty & Compounding Assistance"
          ]
        }
      ]
    },
    {
      id: "trademark-services",
      name: "Trademark Services",
      icon: "fas fa-trademark",
      page: "trademark-services.html",
      shortDesc: "Complete trademark registration, search, objection handling, renewal, and brand protection services.",
      image: "images/5.png",
      detailedSections: [
        {
          title: "Trademark Search & Consultation",
          items: [
            "Checking availability of the brand name or logo",
            "Identifying similar or conflicting trademarks",
            "Expert guidance on choosing a strong, registrable brand name"
          ]
        },
        {
          title: "Trademark Registration",
          items: [
            "Filing TM-A application",
            "Selecting the correct class from Class 1–45",
            "Drafting the description of goods/services",
            "End-to-end filing and document support"
          ]
        },
        {
          title: "Trademark Objection Reply",
          items: [
            "Drafting professional reply to objections raised by the Trademark Examiner",
            "Handling procedural queries",
            "Representation before the trademark office"
          ]
        },
        {
          title: "Trademark Opposition Handling",
          items: [
            "Filing opposition against conflicting trademarks",
            "Drafting counter statements",
            "Evidence submission and representation"
          ]
        },
        {
          title: "Trademark Assignment & Ownership Transfer",
          items: [
            "Preparing deed of assignment",
            "Filing request for transfer",
            "Updating ownership records with the trademark registry"
          ]
        },
        {
          title: "Trademark Renewal",
          items: [
            "Renewal after 10 years of registration",
            "Restoration of expired trademarks",
            "Monitoring renewal deadlines"
          ]
        },
        {
          title: "Trademark Rectification",
          items: [
            "Correcting errors in the trademark certificate",
            "Address change, proprietor/partner change, or class correction"
          ]
        },
        {
          title: "Trademark Watch/Monitoring Services",
          items: [
            "Regular monitoring for conflicting new trademarks",
            "Alerts of similar brand filings",
            "Preventing misuse of your brand"
          ]
        },
        {
          title: "Logo Designing & Brand Protection Advisory",
          items: [
            "Custom logo creation (optional service)",
            "Guidance on trademark strategy and brand protection"
          ]
        },
        {
          title: "Trademark Hearing Representation",
          items: [
            "Attending hearing before Registrar",
            "Submitting arguments and documents"
          ]
        }
      ]
    },
    {
      id: "pf-services",
      name: "PF Compliance Services",
      icon: "fas fa-user-shield",
      page: "pf-services.html",
      shortDesc: "Complete Employees' Provident Fund registration, monthly filing, UAN generation, and compliance management.",
      image: "images/6.png",
      detailedSections: [
        {
          title: "PF Registration for Employers",
          items: [
            "New PF code allotment",
            "Establishment registration on EPFO portal",
            "Documentation & setup support"
          ]
        },
        {
          title: "Monthly PF Return Filing",
          items: [
            "Preparation & submission of ECR (Electronic Challan-Cum-Return)",
            "Calculation of employee/employer PF contributions",
            "Uploading data on EPFO portal"
          ]
        },
        {
          title: "PF Challan Generation & Payment",
          items: [
            "Monthly challan creation",
            "Payment assistance and tracking",
            "Avoidance of penalties & delays"
          ]
        },
        {
          title: "UAN Generation & Activation",
          items: [
            "Creating new UAN for employees",
            "Linking UAN with Aadhaar, PAN & other KYC",
            "Resolving UAN mismatch issues"
          ]
        },
        {
          title: "Employee KYC Update",
          items: [
            "KYC verification (Aadhaar, PAN, Bank details)",
            "Correction of employee details on EPFO portal"
          ]
        },
        {
          title: "EPF Account Transfer",
          items: [
            "Online transfer requests through OTCP",
            "Follow-up on transfer claims",
            "Error correction during transfer"
          ]
        },
        {
          title: "PF Withdrawal Support",
          items: [
            "Guidance for partial/full PF withdrawal",
            "Form selection & filing assistance (Form 10C / 19 / 31)",
            "Resolving claim rejection issues"
          ]
        },
        {
          title: "PF Compliance Audit",
          items: [
            "Checking compliance for all PF-related activities",
            "Identifying errors in contributions or filings",
            "Ensuring statutory adherence"
          ]
        },
        {
          title: "Inspection Handling",
          items: [
            "Assistance during EPFO inspection",
            "Preparing records & documents",
            "Representation before authorities"
          ]
        },
        {
          title: "PF Correction Services",
          items: [
            "Name, DOB, gender, and father's name correction",
            "Correction of wages or contribution mismatch",
            "Employer profile update and amendment"
          ]
        },
        {
          title: "Consultancy for New Establishments",
          items: [
            "Guidance on PF applicability",
            "Employee coverage rules",
            "Contribution structure and exemptions"
          ]
        }
      ]
    },
    {
      id: "esic-services",
      name: "ESIC Compliance Services",
      icon: "fas fa-heartbeat",
      page: "esic-services.html",
      shortDesc: "Complete ESI registration, monthly return filing, employee registration, and ESIC compliance management.",
      image: "images/9.png",
      detailedSections: [
        {
          title: "ESIC Registration for Employers",
          items: [
            "New ESIC code allotment",
            "Establishment registration on ESIC portal",
            "Assistance with required documentation",
            "Setting up login & credentials"
          ]
        },
        {
          title: "Monthly ESIC Return Filing",
          items: [
            "Preparation & uploading of monthly ESI contributions",
            "Salary breakup verification for each employee",
            "Ensuring error-free submission",
            "Avoiding delays and penalties"
          ]
        },
        {
          title: "ESIC Challan Generation & Payment",
          items: [
            "Generating monthly challan",
            "Verifying employee contributions",
            "Payment support and confirmation"
          ]
        },
        {
          title: "Employee Registration (IP Creation)",
          items: [
            "Adding new employees to ESIC",
            "Creating Insurance Number (IP Number)",
            "Issuing ESI Pehchan Card",
            "Family details update"
          ]
        },
        {
          title: "ESIC KYC Update",
          items: [
            "Adding or correcting employee details",
            "Aadhaar, bank, mobile number linking",
            "Correction of DOB, gender, address"
          ]
        },
        {
          title: "Accident & Sickness Benefit Support",
          items: [
            "Filing accident reports (Form 12)",
            "Assistance in claiming medical benefits",
            "Guidance for maternity/sickness benefits"
          ]
        },
        {
          title: "ESIC Compliance Audit",
          items: [
            "Detailed checking of payroll & contributions",
            "Identifying compliance gaps",
            "Statutory audit support"
          ]
        },
        {
          title: "ESIC Inspection Handling",
          items: [
            "Preparing required registers & records",
            "Representation before ESIC inspectors",
            "Responding to notices and queries"
          ]
        },
        {
          title: "ESIC Correction Services",
          items: [
            "Employer details correction",
            "Modification of employee wages",
            "Rectification of wrongly submitted contributions"
          ]
        },
        {
          title: "ESIC Exit & Rejoining Formalities",
          items: [
            "Employee exit process on portal",
            "Rejoining process without duplication",
            "Maintaining clean compliance records"
          ]
        },
        {
          title: "Consultancy for New Establishments",
          items: [
            "Applicability checks for ESIC",
            "Employee coverage rules",
            "Contribution structure explanation"
          ]
        },
        {
          title: "Support in ESIC Grievances & Claims",
          items: [
            "Help with rejected claims",
            "Assistance with reimbursement cases",
            "Guiding employees with hospital/medical documentation"
          ]
        }
      ]
    },
    {
      id: "iec-services",
      name: "IEC Services",
      icon: "fas fa-globe",
      page: "iec-services.html",
      shortDesc: "Import Export Code registration, modification, renewal, and complete DGFT compliance support.",
      image: "images/8.png",
      detailedSections: [
        {
          title: "IEC Registration (New Application)",
          items: [
            "Fresh IEC registration on DGFT portal",
            "Applicant verification & document preparation",
            "End-to-end filing support",
            "Ensuring hassle-free approval"
          ]
        },
        {
          title: "IEC Modification / Amendment",
          items: [
            "Updating business address",
            "Director/partner change",
            "Mobile number & email ID update",
            "Business type change (Proprietor → Pvt Ltd, etc.)",
            "Bank account update"
          ]
        },
        {
          title: "IEC Renewal / Annual Updation (E-UPDATION)",
          items: [
            "Mandatory annual IEC update",
            "Filing NIL update if no changes",
            "Avoiding IEC deactivation by DGFT"
          ]
        },
        {
          title: "IEC Surrender / Cancellation",
          items: [
            "Surrendering the existing IEC",
            "Closing business or shifting activities",
            "Updating DGFT records"
          ]
        },
        {
          title: "Assistance With DGFT Queries & Grievances",
          items: [
            "Resolving application errors",
            "Handling IEC rejection issues",
            "Technical issues on DGFT portal"
          ]
        },
        {
          title: "Re-Issuance of IEC Certificate",
          items: [
            "Lost or misplaced IEC retrieval",
            "Downloading fresh IEC copy",
            "Certificate correction or formatting issues"
          ]
        },
        {
          title: "Linking IEC with GST / PAN",
          items: [
            "PAN verification issues",
            "GST & DGFT linking problems",
            "Resolving mismatch errors"
          ]
        },
        {
          title: "Export-Import Advisory",
          items: [
            "Guidance on HS codes",
            "Export incentives & schemes guidance",
            "Basic compliance required for exporters/importers"
          ]
        },
        {
          title: "Bank AD Code Registration (Optional Support)",
          items: [
            "Help in registering AD code with port",
            "Required for export shipments",
            "CHA/Shipping support guidance"
          ]
        },
        {
          title: "DSC Support for DGFT Filings (Optional)",
          items: [
            "Digital Signature Certificate issue/renewal",
            "Assistance in installing and using DSC for DGFT"
          ]
        }
      ]
    },
    {
      id: "fssai-services",
      name: "FSSAI Services",
      icon: "fas fa-utensils",
      page: "fssai-services.html",
      shortDesc: "Complete FSSAI registration, license, renewal, compliance audit, and food safety certification support.",
      image: "images/7.png",
      detailedSections: [
        {
          title: "FSSAI Registration (Basic)",
          items: [
            "For small food businesses (turnover < ₹12 lakh)",
            "Application filing on FoSCoS portal",
            "Document preparation & submission",
            "Registration certificate issuance"
          ]
        },
        {
          title: "FSSAI State License",
          items: [
            "For medium food businesses (turnover ₹12 lakh – ₹20 crore)",
            "End-to-end filing of Form B",
            "Site plan, product list, machinery details preparation",
            "Coordination with authorities for approval"
          ]
        },
        {
          title: "FSSAI Central License",
          items: [
            "For large food businesses (turnover > ₹20 crore / import-export companies)",
            "Application filing with product details",
            "Document drafting & compliance guidance",
            "Handling inspection requirements"
          ]
        },
        {
          title: "FSSAI License Renewal",
          items: [
            "Renewal of Registration / State / Central License",
            "Avoiding penalties & license expiration",
            "Fast-track renewal support"
          ]
        },
        {
          title: "FSSAI License Modification",
          items: [
            "Business address change",
            "Product category update",
            "Addition/removal of directors/partners",
            "Updating manufacturing capacity or business type"
          ]
        },
        {
          title: "FSSAI Annual Returns Filing",
          items: [
            "Filing Form D1 & D2 (manufacturers)",
            "Monthly/annual compliance updates",
            "Preventing penalties for non-filing"
          ]
        },
        {
          title: "FSSAI Food Product Approval",
          items: [
            "Approval for new/novel food products",
            "Importer product approval",
            "Nutritional & ingredient review"
          ]
        },
        {
          title: "FSSAI Compliance Audit",
          items: [
            "Internal audit of food safety processes",
            "Checking hygiene, documentation & production compliance",
            "Guidance for improvement before government inspection"
          ]
        },
        {
          title: "FSSAI Inspection Support",
          items: [
            "Assistance during FSSAI officer inspections",
            "Preparing mandatory registers & documents",
            "Resolving inspection queries"
          ]
        },
        {
          title: "FSSAI Labeling & Packaging Compliance",
          items: [
            "Designing FSSAI-compliant labels",
            "Nutritional facts panel",
            "Ingredient declaration & allergen compliance"
          ]
        },
        {
          title: "FSSAI Training & Hygiene Rating Support",
          items: [
            "FoSTaC training assistance",
            "Hygiene rating application",
            "Staff training for safe food handling"
          ]
        },
        {
          title: "FSSAI License Surrender / Cancellation",
          items: [
            "Closing or transferring food business",
            "Updating records with FSSAI"
          ]
        }
      ]
    },
    {
      id: "iso-services",
      name: "ISO Certification",
      icon: "fas fa-certificate",
      page: "iso-services.html",
      shortDesc: "Complete ISO certification support for all standards including 9001, 14001, 45001, 27001, and more.",
      image: "images/11.png",
      detailedSections: [
        {
          title: "ISO Consultation & Gap Analysis",
          items: [
            "Understanding business requirements",
            "Identifying gaps in current processes",
            "Mapping the right ISO standard for your industry"
          ]
        },
        {
          title: "ISO Documentation Preparation",
          items: [
            "Creating manuals, policies & procedures",
            "Preparing SOPs and required forms",
            "Drafting Quality, Environmental & Safety documents"
          ]
        },
        {
          title: "ISO Implementation Support",
          items: [
            "Implementing quality and management systems",
            "Staff training & awareness sessions",
            "Assistance with process development"
          ]
        },
        {
          title: "Internal Audit (First-Party Audit)",
          items: [
            "Conducting internal audits as per ISO standards",
            "Preparing audit reports & corrective actions",
            "Ensuring readiness for certification audit"
          ]
        },
        {
          title: "ISO Certification Assistance",
          items: [
            "ISO 9001 (Quality Management)",
            "ISO 14001 (Environment Management)",
            "ISO 45001 (Occupational Health & Safety)",
            "ISO 22000 / HACCP (Food Safety)",
            "ISO 27001 (Information Security)",
            "ISO 20000 (IT Service Management)",
            "ISO 13485 (Medical Devices)",
            "ISO 50001 (Energy Management)",
            "Coordinating with certification body",
            "Audit scheduling & submission",
            "On-site/off-site audit support"
          ]
        },
        {
          title: "Certification Body Selection",
          items: [
            "Choosing the right accredited certification body",
            "Comparing pricing & audit requirements",
            "Ensuring international recognition"
          ]
        },
        {
          title: "Surveillance Audit Support",
          items: [
            "Annual surveillance audits",
            "Reviewing compliance and improvements",
            "Ensuring continuous certification validity"
          ]
        },
        {
          title: "Renewal of ISO Certification",
          items: [
            "Renewal of expiring certificates",
            "Updating documentation & procedures",
            "Conducting pre-renewal internal audit"
          ]
        },
        {
          title: "Corrective Action & NCR Closure",
          items: [
            "Helping close Non-Conformance Reports",
            "Preparing CAPA documentation",
            "Ensuring full compliance for re-audit"
          ]
        },
        {
          title: "ISO Training & Awareness Programs",
          items: [
            "Staff training on specific ISO standards",
            "Process & compliance awareness",
            "Maintaining long-term ISO culture"
          ]
        },
        {
          title: "Integrated Management Systems (IMS)",
          items: [
            "Combining ISO 9001 + 14001 + 45001",
            "Unified documentation",
            "Efficient multi-standard management"
          ]
        },
        {
          title: "ISO Upgrade & Transition Support",
          items: [
            "Upgrading to latest versions of ISO",
            "Migrating from old standards to new"
          ]
        }
      ]
    },
    {
      id: "udyam-services",
      name: "Udyam Registration (MSME)",
      icon: "fas fa-industry",
      page: "udyam-services.html",
      shortDesc: "Complete MSME/Udyam registration, modification, renewal, and benefits advisory for small businesses.",
      image: "images/12.png",
      detailedSections: [
        {
          title: "New Udyam Registration",
          items: [
            "Fresh MSME (Micro, Small & Medium Enterprise) registration",
            "Aadhaar & PAN-based verification",
            "Assistance with correct NIC code selection",
            "Downloading Udyam Certificate"
          ]
        },
        {
          title: "Udyam Registration Update / Modification",
          items: [
            "Business address change",
            "Mobile number & email update",
            "Addition/removal of activity or NIC codes",
            "Name change of enterprise",
            "Update in investment or turnover details"
          ]
        },
        {
          title: "Udyam Re-Registration (If Old UAM Exists)",
          items: [
            "Converting old UAM (Udyog Aadhaar) to Udyam",
            "Migrating and validating existing details",
            "Ensuring active MSME status"
          ]
        },
        {
          title: "Udyam Certificate Correction",
          items: [
            "Fixing name, PAN, Aadhaar, or category errors",
            "Correcting business details or activity list",
            "Updating manufacturing or service details"
          ]
        },
        {
          title: "Udyam Renewal (If Required)",
          items: [
            "Though Udyam is generally lifetime, some cases need periodic updates",
            "Ensuring validity and compliance for bank loans, tenders, etc."
          ]
        },
        {
          title: "Udyam Exporter/Importer Linking",
          items: [
            "Registering MSME business for export/import usage",
            "Linking with IEC & business activities"
          ]
        },
        {
          title: "Udyam Social Category Update",
          items: [
            "Updating SC / ST / OBC / General category",
            "Verification support with valid documents"
          ]
        },
        {
          title: "Benefits Advisory for MSMEs",
          items: [
            "Guidance on loans, subsidies & schemes",
            "Mudra & MSME loan assistance (optional)",
            "Tender & procurement benefits explanation"
          ]
        },
        {
          title: "Lost Udyam Certificate Recovery",
          items: [
            "Retrieving misplaced registration certificate",
            "Re-sending copy to email"
          ]
        },
        {
          title: "Bank Loan / Tender Support (Optional)",
          items: [
            "Providing Udyam certificate for loan application",
            "Tender document support with Udyam verification"
          ]
        }
      ]
    },
    {
      id: "dsc-services",
      name: "Digital Signature Certificate (DSC)",
      icon: "fas fa-digital-tachograph",
      page: "dsc-services.html",
      shortDesc: "Complete DSC registration, renewal, installation, and technical support for all government portals.",
      image: "images/13.png",
      detailedSections: [
        {
          title: "New DSC Registration / Issue",
          items: [
            "Issuing new Class 3 Digital Signature Certificate",
            "For individuals, organizations, directors, and businesses",
            "Aadhaar / PAN / video KYC-based verification",
            "Token (USB) option available"
          ]
        },
        {
          title: "DSC Renewal",
          items: [
            "Renewing expired or expiring DSC",
            "e-KYC / Aadhaar OTP / video verification",
            "Quick, paperless renewal support"
          ]
        },
        {
          title: "Upgradation to Class 3 DSC",
          items: [
            "Converting older Class 2 DSC to Class 3",
            "Ensuring compatibility with government portals"
          ]
        },
        {
          title: "DSC for GST, Income Tax, MCA & PF/ESIC",
          items: [
            "DSC for GST filing",
            "DSC for Income Tax return filing",
            "DSC for MCA (ROC) filings",
            "DSC for PF & ESIC signings",
            "DSC setup and troubleshooting"
          ]
        },
        {
          title: "DSC for Tender (e-Tendering)",
          items: [
            "DSC for online tender/bidding",
            "NIC, GeM, Railways, PWD, and all government portals",
            "Ensuring encryption + signing capability"
          ]
        },
        {
          title: "DSC for DGFT / Import-Export",
          items: [
            "DSC for DGFT IEC-related filings",
            "Token setup for DGFT portal"
          ]
        },
        {
          title: "DSC for Trademark & IP Filings",
          items: [
            "Signing applications for trademark, copyright, patents",
            "Support for IPR online portals"
          ]
        },
        {
          title: "DSC for Foreign Individuals / Companies",
          items: [
            "DSC for foreign nationals",
            "Passport & additional verification support"
          ]
        },
        {
          title: "USB Token (HSM) Services",
          items: [
            "Providing physical USB crypto tokens",
            "Token driver installation",
            "Configuration and troubleshooting"
          ]
        },
        {
          title: "DSC Installation & Technical Support",
          items: [
            "Installation on desktop/laptop",
            "Browser configuration (Chrome, Firefox, MCA)",
            "Driver and certificate error fixing",
            "Token PIN reset assistance"
          ]
        },
        {
          title: "Revocation / Cancellation of DSC",
          items: [
            "Cancelling lost or compromised DSC",
            "Re-issuing a new DSC"
          ]
        },
        {
          title: "DSC Support for Banks / Custom Applications",
          items: [
            "Bank audits, corporate filings",
            "E-sign support for custom platforms"
          ]
        }
      ]
    },
    {
      id: "bookkeeping-services",
      name: "Bookkeeping & Accounting",
      icon: "fas fa-book",
      page: "bookkeeping-services.html",
      shortDesc: "Complete bookkeeping, accounting, MIS reporting, and financial management services for businesses.",
      image: "images/2.png",
      detailedSections: [
        {
          title: "Daily / Monthly Bookkeeping",
          items: [
            "Recording of sales & purchase transactions",
            "Expense tracking & categorization",
            "Cash & bank book maintenance",
            "Journal entries posting"
          ]
        },
        {
          title: "Accounting & Finalization",
          items: [
            "Preparation of Profit & Loss Account",
            "Balance Sheet preparation",
            "Trial balance finalization",
            "Year-end closing of accounts"
          ]
        },
        {
          title: "GST-Compliant Accounting",
          items: [
            "GST sales & purchase reconciliation",
            "Input Tax Credit (ITC) tracking",
            "GST-ready accounting reports",
            "Linking accounting data with GST returns"
          ]
        },
        {
          title: "Bank & Cash Reconciliation",
          items: [
            "Bank reconciliation statements (BRS)",
            "Cash flow monitoring",
            "Identifying and rectifying mismatches"
          ]
        },
        {
          title: "Accounts Payable & Receivable Management",
          items: [
            "Vendor ledger management",
            "Customer outstanding tracking",
            "Payment follow-ups",
            "Aging analysis"
          ]
        },
        {
          title: "Payroll Accounting",
          items: [
            "Salary calculation & accounting",
            "PF, ESIC & professional tax entries",
            "Payroll reconciliation"
          ]
        },
        {
          title: "TDS Accounting & Compliance",
          items: [
            "TDS ledger maintenance",
            "TDS deduction entries",
            "TDS return data preparation"
          ]
        },
        {
          title: "MIS & Financial Reporting",
          items: [
            "Monthly/quarterly MIS reports",
            "Cash flow statements",
            "Budget vs actual analysis",
            "Financial insights for decision-making"
          ]
        },
        {
          title: "Accounting Software Support",
          items: [
            "Accounting in Tally, Busy, Zoho Books, QuickBooks, etc.",
            "Setup & configuration of accounting software",
            "Migration of data from old systems"
          ]
        },
        {
          title: "Audit Support",
          items: [
            "Books preparation for statutory audit",
            "GST audit support",
            "Income Tax audit coordination"
          ]
        },
        {
          title: "Error Rectification & Cleanup",
          items: [
            "Cleanup of old or incorrect books",
            "Ledger correction & restructuring",
            "Backdated accounting"
          ]
        },
        {
          title: "Advisory & Compliance Support",
          items: [
            "Accounting policy advisory",
            "Compliance planning",
            "Financial process improvement"
          ]
        }
      ]
    },
    {
      id: "tds-services",
      name: "TDS Return Filing",
      icon: "fas fa-file-alt",
      page: "tds-services.html",
      shortDesc: "Complete TDS/TCS return filing, challan payment, Form 16 generation, and compliance management.",
      image: "images/3.png",
      detailedSections: [
        {
          title: "TAN Registration",
          items: [
            "New TAN application",
            "Correction in TAN details"
          ]
        },
        {
          title: "TDS Deduction & Calculation",
          items: [
            "Identifying applicable TDS sections (194C, 194J, 194H, 192, etc.)",
            "Accurate calculation of TDS amount",
            "Rate applicability & threshold checks"
          ]
        },
        {
          title: "TDS Challan Preparation & Payment",
          items: [
            "Challan (ITNS 281) generation",
            "Online payment assistance",
            "Challan correction & verification"
          ]
        },
        {
          title: "Quarterly TDS Return Filing",
          items: [
            "Form 24Q – Salary payments",
            "Form 26Q – Non-salary payments",
            "Form 27Q – Payments to non-residents",
            "Form 27EQ – TCS returns"
          ]
        },
        {
          title: "PAN–TAN Verification",
          items: [
            "PAN validation of deductees",
            "Correction of invalid PAN errors",
            "Preventing higher TDS rates"
          ]
        },
        {
          title: "TDS Correction Returns",
          items: [
            "Revision of filed TDS returns",
            "Correction in PAN, amount, challan, or section",
            "Online correction filing"
          ]
        },
        {
          title: "Form 16 / Form 16A Generation",
          items: [
            "Preparation of Form 16 (Salary)",
            "Form 16A (Non-salary) download & issuance",
            "TRACES portal support"
          ]
        },
        {
          title: "TDS Reconciliation",
          items: [
            "Reconciliation with Form 26Q/24Q",
            "Matching challan & deduction details",
            "Resolving mismatches"
          ]
        },
        {
          title: "TDS Notice & Demand Handling",
          items: [
            "Reply to TDS notices",
            "Handling short deduction / late filing demands",
            "Rectification & justification report filing"
          ]
        },
        {
          title: "Late Fee & Penalty Calculation",
          items: [
            "Computation of late filing fee (₹200/day)",
            "Interest under Section 201",
            "Guidance on penalty avoidance"
          ]
        },
        {
          title: "Lower / Nil TDS Certificate Support",
          items: [
            "Assistance in obtaining lower/nil deduction certificate",
            "Applicability guidance"
          ]
        },
        {
          title: "Annual TDS Compliance Advisory",
          items: [
            "TDS compliance calendar",
            "Section-wise advisory",
            "Ongoing support for businesses"
          ]
        }
      ]
    }
  ],

  // ==========================================
  // FAQs
  // ==========================================
  faqs: [
    {
      icon: "fas fa-file-alt",
      question: "What services do you provide?",
      answer: "We offer GST registration & filing, Income Tax returns, TDS filing, company registration, bookkeeping, PF/ESI, and full compliance support."
    },
    {
      icon: "fas fa-bolt",
      question: "How fast can you complete my work?",
      answer: "GST & ITR filings are processed the same day, and most registrations are completed within 1–3 days."
    },
    {
      icon: "fas fa-check-circle",
      question: "Are your services fully online?",
      answer: "Yes. You can complete all services via WhatsApp or email—no physical visit required."
    },
    {
      icon: "fas fa-shield-alt",
      question: "Is my financial data safe?",
      answer: "Absolutely. Your documents are encrypted, secure, and never shared with anyone."
    },
    {
      icon: "fas fa-comments",
      question: "Will I get personal support?",
      answer: "Yes. Every client receives one-to-one guidance, quick responses, and dedicated support."
    },
    {
      icon: "fas fa-folder-open",
      question: "What documents do you need?",
      answer: "Usually just: PAN, Aadhaar, bank statement, and your income or GST data."
    },
    {
      icon: "fas fa-building",
      question: "Do you work with businesses across India?",
      answer: "Yes. We serve individuals, freelancers, shops, startups, companies, and LLPs all over India."
    },
    {
      icon: "fas fa-phone-alt",
      question: "How do I get started?",
      answer: "Click Consult Now, share your details, and our team will handle everything."
    }
  ],

  // Services Page FAQs
  // ==========================================
  servicesFaqs: [
    {
      icon: "fas fa-briefcase",
      question: "What does your firm do?",
      answer: "We provide complete tax and compliance solutions, including GST registration, GST return filing, Income Tax returns, TDS, company registration, accounting, PF/ESI, Udyam registration, and business advisory services."
    },
    {
      icon: "fas fa-award",
      question: "Why should I choose your firm over others?",
      answer: "We offer accurate, fast, and affordable tax services handled by trained professionals. Our focus is on error-free filing, timely submission, and personal support for every client—whether individual or business."
    },
    {
      icon: "fas fa-laptop",
      question: "Are your services 100% online?",
      answer: "Yes. All our services—ITR filing, GST filing, PAN/TAN, accounting, registrations, and compliance—can be completed fully online through WhatsApp or email. No office visit required."
    },
    {
      icon: "fas fa-clock",
      question: "How much time does it take to file GST or ITR?",
      answer: "GST returns: 1–2 hours (same day). ITR filing: Same day after document verification. Company registration: 3–7 working days. Timelines may vary depending on document availability."
    },
    {
      icon: "fas fa-file-alt",
      question: "What documents do you need from me?",
      answer: "For most services, we only require: PAN Card, Aadhaar Card, Bank Statement, Sales/Purchase data (for GST), and Income details (for ITR). We will share a simple checklist for each service."
    },
    {
      icon: "fas fa-bell",
      question: "Do you provide support for GST or Income Tax notices?",
      answer: "Yes. We specialize in handling notices, scrutiny, demand issues, mismatches, and assessments for both GST and Income Tax."
    },
    {
      icon: "fas fa-rocket",
      question: "I am new to business—can you guide me?",
      answer: "Absolutely. We help startups and new entrepreneurs with business registration, GST setup, accounting system, compliance planning, and ongoing advisory."
    },
    {
      icon: "fas fa-rupee-sign",
      question: "Are your prices affordable?",
      answer: "Yes, our pricing is transparent and designed for individuals, freelancers, startups, and growing businesses. No hidden fees."
    },
    {
      icon: "fas fa-calendar-check",
      question: "Do you offer monthly or yearly compliance plans?",
      answer: "Yes. We offer monthly, quarterly, and yearly packages for businesses covering GST filing, accounting, payroll, TDS, and tax compliance."
    },
    {
      icon: "fas fa-headset",
      question: "Can I contact you anytime for support?",
      answer: "Yes. You can connect through Mobile, WhatsApp, or Email. We provide quick and professional support for all clients."
    },
    {
      icon: "fas fa-globe",
      question: "Do you handle clients outside your city or state?",
      answer: "Yes. We provide services to clients across all states in India, since everything is handled online."
    },
    {
      icon: "fas fa-lock",
      question: "Is my data safe with you?",
      answer: "Yes. All your financial and personal information is kept fully confidential, protected with secure storage and only used for your filings."
    },
    {
      icon: "fas fa-piggy-bank",
      question: "Do you help with tax planning and saving?",
      answer: "Yes. We provide personalized tax-saving strategies, investment guidance, and planning for both salaried and business clients."
    },
    {
      icon: "fas fa-users",
      question: "What types of businesses do you work with?",
      answer: "We work with Individuals, Salaried employees, Freelancers, Shop owners, Traders, Startups, Companies & LLPs."
    },
    {
      icon: "fas fa-play-circle",
      question: "How do I get started?",
      answer: "Just contact us on WhatsApp or Call, share basic details, and our team will guide you through the complete process."
    }
  ],

  // Universal/Comprehensive FAQs for FAQ Page
  // ==========================================
  universalFaqs: [
    // About Tax Brothers
    {
      category: "About Tax Brothers",
      icon: "fas fa-building",
      question: "Who are Tax Brothers?",
      answer: "Tax Brothers is a professional tax consultancy firm providing end-to-end services in GST, Income Tax, Company Incorporation, Accounting, MCA compliance, PF/ESIC, Trademark, ISO, FSSAI, IEC, DSC, and Udyam Registration. We serve individuals, startups, MSMEs, and companies across India."
    },
    {
      category: "About Tax Brothers",
      icon: "fas fa-map-marker-alt",
      question: "Where is Tax Brothers located?",
      answer: "We are based in Karkarduma, New Delhi, and provide PAN-India services online, allowing clients from anywhere in India to avail our services easily."
    },
    {
      category: "About Tax Brothers",
      icon: "fas fa-star",
      question: "What makes Tax Brothers different from other tax consultants?",
      answer: "Expert-led and compliance-focused approach • Fast and accurate service delivery • Transparent pricing with no hidden charges • Personalized client support • One-stop solution for all tax & compliance needs"
    },
    {
      category: "About Tax Brothers",
      icon: "fas fa-rocket",
      question: "Do you work with startups and small businesses?",
      answer: "Yes. We specialize in helping startups, freelancers, shop owners, MSMEs, and growing businesses with registrations, tax filings, accounting, and compliance management."
    },
    {
      category: "About Tax Brothers",
      icon: "fas fa-laptop",
      question: "Are your services available online?",
      answer: "Yes. All our services are 100% online. Documents can be shared via WhatsApp or email, and certificates/filings are delivered digitally."
    },

    // General Services
    {
      category: "General Services",
      icon: "fas fa-briefcase",
      question: "What services do you provide?",
      answer: "Our major services include: GST Registration & Returns • Income Tax Return (ITR) Filing • Company Incorporation (Pvt Ltd, LLP, OPC) • MCA / ROC Compliance • Accounting & Bookkeeping • TDS Return Filing • PF & ESIC Compliance • Trademark Registration • ISO Certification • FSSAI License • IEC Registration • DSC & Udyam Registration"
    },
    {
      category: "General Services",
      icon: "fas fa-question-circle",
      question: "How do I know which service I need?",
      answer: "You can contact us for a free consultation. Our experts will understand your requirement and guide you with the correct service—no unnecessary charges."
    },
    {
      category: "General Services",
      icon: "fas fa-clock",
      question: "How long does it take to complete services?",
      answer: "Timelines vary by service: GST / Udyam / DSC: 1–3 working days • ITR filing: Same day or next day • Company incorporation: 5–10 working days • Compliance filings: As per statutory due dates"
    },
    {
      category: "General Services",
      icon: "fas fa-file-alt",
      question: "What documents are required to start?",
      answer: "Documents depend on the service, but commonly required documents include: PAN Card • Aadhaar Card • Address proof • Bank details • Business-related documents (if applicable). We provide a clear checklist before starting any service."
    },
    {
      category: "General Services",
      icon: "fas fa-lock",
      question: "Is my data safe with Tax Brothers?",
      answer: "Yes. We maintain strict confidentiality and secure handling of all personal and financial data. Client data is never shared with third parties."
    },

    // GST Services
    {
      category: "GST Services",
      icon: "fas fa-file-invoice",
      question: "Do you provide GST registration and return filing?",
      answer: "Yes. We handle GST registration, monthly/quarterly returns, annual returns, amendments, cancellation, notices, and GST advisory."
    },
    {
      category: "GST Services",
      icon: "fas fa-bell",
      question: "Can you handle GST notices and compliance issues?",
      answer: "Absolutely. We assist with GST notices, demand replies, mismatches, ITC issues, and assessments."
    },

    // Income Tax Services
    {
      category: "Income Tax Services",
      icon: "fas fa-calculator",
      question: "Who can file ITR through Tax Brothers?",
      answer: "Salaried individuals • Freelancers & professionals • Business owners • Firms, LLPs & companies • NRIs"
    },
    {
      category: "Income Tax Services",
      icon: "fas fa-piggy-bank",
      question: "Do you help with tax saving and planning?",
      answer: "Yes. We provide tax planning guidance to help clients legally save taxes and maximize deductions."
    },
    {
      category: "Income Tax Services",
      icon: "fas fa-exclamation-triangle",
      question: "Can you handle Income Tax notices?",
      answer: "Yes. We assist with IT notices, scrutiny cases, rectifications, and compliance responses."
    },

    // Company & Business Registration
    {
      category: "Company & Business Registration",
      icon: "fas fa-building",
      question: "What types of business registrations do you provide?",
      answer: "Private Limited Company • LLP • OPC • Partnership Firm • Proprietorship • MSME / Udyam Registration"
    },
    {
      category: "Company & Business Registration",
      icon: "fas fa-clipboard-check",
      question: "Do you provide post-incorporation compliance?",
      answer: "Yes. We manage ROC filings, annual compliance, director KYC, accounting setup, and tax registrations after incorporation."
    },

    // Accounting & Compliance
    {
      category: "Accounting & Compliance",
      icon: "fas fa-calculator",
      question: "Do you provide accounting and bookkeeping services?",
      answer: "Yes. We offer monthly bookkeeping, GST-compliant accounting, payroll accounting, MIS reports, and finalization of accounts."
    },
    {
      category: "Accounting & Compliance",
      icon: "fas fa-calendar-check",
      question: "Do you offer monthly compliance packages?",
      answer: "Yes. We provide monthly and yearly compliance packages for businesses covering GST, accounting, TDS, PF/ESIC, and MCA filings."
    },

    // PF, ESIC & Payroll
    {
      category: "PF, ESIC & Payroll",
      icon: "fas fa-users",
      question: "Do you handle PF and ESIC registrations and returns?",
      answer: "Yes. We provide PF & ESIC registration, monthly returns, challans, employee onboarding, and compliance support."
    },

    // Trademark, ISO, FSSAI & Others
    {
      category: "Trademark, ISO, FSSAI & Others",
      icon: "fas fa-trademark",
      question: "Do you provide trademark registration and objection handling?",
      answer: "Yes. We handle trademark search, filing, objection replies, renewal, and assignment."
    },
    {
      category: "Trademark, ISO, FSSAI & Others",
      icon: "fas fa-certificate",
      question: "Do you assist with ISO certification?",
      answer: "Yes. We assist with ISO documentation, audit support, certification, renewal, and upgrades."
    },
    {
      category: "Trademark, ISO, FSSAI & Others",
      icon: "fas fa-utensils",
      question: "Do you provide FSSAI license services?",
      answer: "Yes. We provide Basic, State, and Central FSSAI registration, renewal, and modification."
    },
    {
      category: "Trademark, ISO, FSSAI & Others",
      icon: "fas fa-id-card",
      question: "Do you help with IEC, DSC, and Udyam registration?",
      answer: "Yes. We provide IEC registration, DSC issuance/renewal, and Udyam (MSME) registration & updates."
    },

    // Pricing & Support
    {
      category: "Pricing & Support",
      icon: "fas fa-rupee-sign",
      question: "Are your charges affordable?",
      answer: "Yes. Our pricing is transparent, competitive, and suitable for individuals, startups, and MSMEs."
    },
    {
      category: "Pricing & Support",
      icon: "fas fa-headset",
      question: "Do you provide ongoing support after service completion?",
      answer: "Yes. We provide post-service support, reminders, and guidance for renewals and compliance."
    },
    {
      category: "Pricing & Support",
      icon: "fas fa-phone",
      question: "How can I contact Tax Brothers?",
      answer: "You can contact us via: Phone • WhatsApp • Email • Website contact form. Our team responds promptly."
    },
    {
      category: "Pricing & Support",
      icon: "fas fa-play-circle",
      question: "How do I get started?",
      answer: "Simply click Consult Now, share your requirement, and our expert team will take care of the rest."
    }
  ],

  // ==========================================
  // HOME PAGE CONTENT
  // ==========================================
  home: {
    hero: {
      title: "From Registration to Returns — Everything in One Place",
      subtitle: "End-to-end tax filing, GST, company registration and compliance—done fast, accurate, and completely online.",
      tagline: "Simplifying Tax, Empowering Business",
      image: "images/1.png",
      primaryButton: {
        text: "Consult Now",
        link: "appointment.html"
      },
      secondaryButton: {
        text: "View Services",
        link: "services.html"
      }
    },

    whyChooseUs: [
      {
        icon: "fas fa-star",
        title: "Trusted Expertise",
        description: "With years of experience in taxation, GST, and compliance, we ensure accurate, reliable, and up-to-date solutions for individuals and businesses."
      },
      {
        icon: "fas fa-bolt",
        title: "Fast & Hassle-Free Process",
        description: "From GST registration to income tax filing, we simplify every step—so you save time, avoid confusion, and focus on your business."
      },
      {
        icon: "fas fa-building",
        title: "Complete Compliance Under One Roof",
        description: "Whether it's company registration, accounting, PF/ESI, or return filing—everything is handled by our expert team in one place."
      },
      {
        icon: "fas fa-laptop",
        title: "100% Online & Transparent",
        description: "No hidden fees. No unnecessary documents. Get services done online through a smooth, guided workflow."
      },
      {
        icon: "fas fa-headset",
        title: "Personalized Support",
        description: "You're never alone—our experts assist you personally on call, WhatsApp, or email for quick, real-time support."
      },
      {
        icon: "fas fa-lock",
        title: "Secure & Confidential",
        description: "Your financial data is fully protected with industry-standard security and strict confidentiality."
      },
      {
        icon: "fas fa-indian-rupee-sign",
        title: "Affordable Pricing",
        description: "Professional services at pocket-friendly rates—perfect for startups, small businesses, and individuals."
      }
    ],

    process: [
      {
        step: 1,
        icon: "fas fa-search",
        title: "Consultation",
        description: "We understand your requirement, business type, and compliance needs through call, WhatsApp, or online inquiry."
      },
      {
        step: 2,
        icon: "fas fa-file-upload",
        title: "Document Collection",
        description: "You share documents digitally. We provide a clear checklist to keep everything easy and organized."
      },
      {
        step: 3,
        icon: "fas fa-tasks",
        title: "Expert Review",
        description: "Our experts verify documents, plan compliance, and ensure accuracy before filing."
      },
      {
        step: 4,
        icon: "fas fa-paper-plane",
        title: "Filing & Execution",
        description: "We prepare and file your returns, registrations, or applications accurately and on time."
      },
      {
        step: 5,
        icon: "fas fa-check-circle",
        title: "Confirmation",
        description: "You receive acknowledgements, certificates, or filing confirmations with clear guidance."
      },
      {
        step: 6,
        icon: "fas fa-bell",
        title: "Ongoing Support",
        description: "We provide reminders, renewals, amendments, and assistance for future compliance or notices."
      }
    ],

    processTrust: [
      "100% Online & Paperless",
      "Dedicated Expert Support",
      "Transparent Pricing",
      "Timely Compliance"
    ],

    stats: [
      { number: "1500+", label: "Happy Clients" },
      { number: "10000+", label: "Returns Filed" },
      { number: "10+", label: "Years Experience" },
      { number: "99%", label: "Success Rate" }
    ]
  },

  // ==========================================
  // GOOGLE SHEETS CONFIGURATION
  // ==========================================
  googleSheets: {
    scriptUrl: "https://script.google.com/macros/s/AKfycbwQYmqAGf_o82LP1Esja6DC29ljnWlHcCiT0QYDGIStAlmGbnhY7_EIJUyEyqCYQ3HT/exec",
    sheets: {
      serviceBookings: "ServiceBookings",
      appointments: "Appointments",
      contacts: "Contacts"
    }
  },

  // ==========================================
  // SEO METADATA
  // ==========================================
  seo: {
    home: {
      title: "Tax Brothers | GST, ITR & Tax Consultation Services",
      description: "Expert GST Registration, ITR Filing, Tax Consultation, and Compliance Management services in India. Fast, accurate, and completely online.",
      keywords: "GST registration, ITR filing, tax consultant, financial advisor, India, tax brothers"
    },
    services: {
      title: "Our Services | Tax Brothers",
      description: "Complete range of GST, ITR, Tax Consultation, Business Registration, and Compliance Services.",
      keywords: "GST services, ITR services, tax planning, business registration, compliance"
    },
    appointment: {
      title: "Book Appointment | Tax Brothers",
      description: "Book a consultation with our expert tax and compliance advisors.",
      keywords: "book appointment, tax consultation, compliance consultation"
    },
    contact: {
      title: "Contact Us | Tax Brothers",
      description: "Get in touch with Tax Brothers for all your tax and compliance needs.",
      keywords: "contact, reach us, tax advisor contact"
    }
  }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
