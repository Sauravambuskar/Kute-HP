export interface ServiceProcedure {
  name: string;
  desc: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceWhyUs {
  title: string;
  desc: string;
}

export interface ServiceExtended {
  procedures?: ServiceProcedure[];
  conditions?: string[];
  stats?: ServiceStat[];
  whyChooseUs?: ServiceWhyUs[];
  extraImages?: string[];
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  image: string;
  extended?: ServiceExtended;
}

export const servicesData: Service[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. EMERGENCY DEPARTMENT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'emergency-department',
    iconName: 'Activity',
    title: 'Emergency Department',
    shortDesc: 'Round-the-clock emergency care with a rapid-response team, advanced trauma bays, and direct access to surgery.',
    fullDesc: 'Our Emergency Department operates 24 hours a day, 365 days a year, with no waiting on life-saving care. From road-traffic accidents and cardiac arrests to acute abdomen, stroke, and poisoning, our trained emergency physicians, trauma nurses, and support staff are always on standby to stabilise and treat patients within the critical golden hour. We maintain dedicated resuscitation bays equipped with cardiac monitors, ventilators, defibrillators, and crash carts. Our seamless integration with the ICU, operation theatre, blood bank, and laboratory ensures that critical patients receive everything they need under one roof — fast.',
    benefits: [
      '24/7 Fully Staffed Emergency',
      'Dedicated Trauma & Resuscitation Bays',
      'On-site Blood Bank & Laboratory',
      'Direct OR & ICU Access',
      'Advanced Life Support (ALS) Ready',
      'Rapid Triage & Assessment'
    ],
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2072&auto=format&fit=crop',
    extended: {
      stats: [
        { value: '24/7', label: 'Always Open' },
        { value: '<10min', label: 'Average Triage Time' },
        { value: '14+', label: 'Years of Experience' },
        { value: '30+', label: 'Insurance Partners' }
      ],
      procedures: [
        {
          name: 'Advanced Trauma Resuscitation',
          desc: 'Immediate stabilisation of polytrauma patients following road accidents, falls, or workplace injuries using ATLS protocols.'
        },
        {
          name: 'Advanced Life Support (ALS)',
          desc: 'Cardiac arrest management with defibrillation, IV drug administration, advanced airway management, and CPR by certified ALS-trained staff.'
        },
        {
          name: 'Emergency Surgical Preparation',
          desc: 'Rapid pre-operative workup, IV access, blood grouping, and direct handover to the operation theatre for time-critical surgical emergencies.'
        },
        {
          name: 'Point-of-Care Diagnostics',
          desc: 'Immediate bedside ECG, blood glucose, ABG, and rapid blood tests available within the emergency bay to guide instant clinical decisions.'
        },
        {
          name: 'Airway Management & Ventilation',
          desc: 'Intubation, bag-valve-mask ventilation, and emergency tracheostomy support for patients with compromised airways or respiratory failure.'
        },
        {
          name: 'Emergency Wound Care & Fracture Splinting',
          desc: 'Immediate wound irrigation, debridement, closure, and temporary fracture splinting to prevent further injury before definitive care.'
        }
      ],
      conditions: [
        'Road Traffic Accidents & Polytrauma',
        'Cardiac Arrest & Acute Chest Pain',
        'Stroke & Neurological Emergencies',
        'Respiratory Failure & Breathlessness',
        'Acute Abdomen & Intestinal Obstruction',
        'Severe Burns & Blast Injuries',
        'Poisoning & Drug Overdose',
        'Septic Shock & Multi-Organ Failure',
        'Severe Head & Spinal Injuries',
        'Obstetric & Paediatric Emergencies',
        'Diabetic Emergencies (DKA / Hypoglycaemia)',
        'Anaphylaxis & Allergic Reactions'
      ],
      whyChooseUs: [
        {
          title: 'Always Open, Always Ready',
          desc: 'Our emergency team never closes. Physicians, nurses, and technicians are on-site 24/7 — not just on-call — ensuring immediate response with no delays.'
        },
        {
          title: 'Fully Equipped Trauma Bays',
          desc: 'Dedicated bays fitted with cardiac monitors, defibrillators, ventilators, and all emergency medications so resuscitation begins the moment a patient arrives.'
        },
        {
          title: 'Seamless In-Hospital Integration',
          desc: 'Direct elevator access to the operation theatre, ICU, and blood bank removes critical delays when a patient needs emergency surgery or transfusion.'
        },
        {
          title: 'Cashless Emergency Care',
          desc: 'We work with 30+ insurance TPA providers so financial barriers never delay life-saving treatment for eligible patients.'
        }
      ],
      extraImages: [
        'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1579154491781-5e199df316aa?q=80&w=800&auto=format&fit=crop'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 2. LAPAROSCOPIC SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    id: 'laparoscopic-surgery',
    iconName: 'Scissors',
    title: 'Laparoscopic Surgery',
    shortDesc: 'Expert minimally invasive keyhole surgery delivering faster recovery, less pain, and minimal scarring.',
    fullDesc: 'Kute Hospital is the region\'s leading centre for advanced laparoscopic (keyhole) surgery, with Dr. Pradeep Kute performing a wide spectrum of abdominal and general surgical procedures through tiny incisions using a high-definition camera and precision instruments. Unlike traditional open surgery, laparoscopy dramatically reduces trauma to surrounding tissues, cutting postoperative pain by up to 60%, hospital stays from weeks to days, and return-to-work time from months to weeks. Our state-of-the-art laparoscopic tower, ultrasonic dissectors, and advanced haemostatic instruments place complex surgical capabilities previously available only in large city hospitals right here in Sangamner.',
    benefits: [
      'Minimal Scarring (3–5 tiny cuts)',
      'Significantly Faster Recovery',
      'Reduced Post-op Pain',
      'Shorter Hospital Stay',
      'Lower Risk of Infection',
      'Earlier Return to Daily Activity'
    ],
    image: 'https://images.unsplash.com/photo-1579154491781-5e199df316aa?q=80&w=2069&auto=format&fit=crop',
    extended: {
      stats: [
        { value: '500+', label: 'Laparoscopic Procedures' },
        { value: '1–2 days', label: 'Average Hospital Stay' },
        { value: '14+', label: 'Years Surgical Experience' },
        { value: '99%', label: 'Patient Satisfaction' }
      ],
      procedures: [
        {
          name: 'Laparoscopic Cholecystectomy',
          desc: 'Keyhole removal of the gallbladder for gallstones or cholecystitis — the most commonly performed laparoscopic procedure worldwide, done as a day surgery.'
        },
        {
          name: 'Laparoscopic Appendectomy',
          desc: 'Minimally invasive removal of an inflamed appendix, reducing risk of complications and allowing discharge within 24–48 hours.'
        },
        {
          name: 'Laparoscopic Hernia Repair (TEP/TAPP)',
          desc: 'Mesh-based repair of inguinal, umbilical, and incisional hernias with the lowest recurrence rates and fastest return to normal activity.'
        },
        {
          name: 'Laparoscopic Colorectal Surgery',
          desc: 'Resection of segments of the colon or rectum for cancer, diverticulitis, or inflammatory bowel disease with superior cosmetic and functional outcomes.'
        },
        {
          name: 'Laparoscopic Splenectomy',
          desc: 'Keyhole removal of the spleen for haematological conditions, trauma, or splenic tumours — avoiding the large flank incision of open surgery.'
        },
        {
          name: 'Diagnostic Laparoscopy',
          desc: 'A definitive minimally invasive exploration of the abdominal cavity to diagnose unexplained pain, infertility causes, adhesions, or suspected malignancy.'
        }
      ],
      conditions: [
        'Gallstones & Acute Cholecystitis',
        'Acute & Chronic Appendicitis',
        'Inguinal, Umbilical & Incisional Hernias',
        'Colorectal Cancer & Polyps',
        'Diverticular Disease',
        'Splenic Disorders & Hypersplenism',
        'Peritoneal Adhesions & Chronic Pelvic Pain',
        'Ovarian Cysts & Gynaecological Conditions',
        'Gastrointestinal Bleeding (diagnostic)',
        'Unexplained Abdominal Pain'
      ],
      whyChooseUs: [
        {
          title: 'Expert Laparoscopic Surgeon',
          desc: 'Dr. Pradeep Kute has performed over 500 laparoscopic procedures with excellent outcomes, bringing city-level surgical expertise to Sangamner.'
        },
        {
          title: 'HD Laparoscopic Tower & Precision Instruments',
          desc: 'Our dedicated laparoscopic suite features a high-definition 4K camera stack, ultrasonic dissectors, and advanced energy devices for safe, precise surgery.'
        },
        {
          title: 'Day Surgery Options',
          desc: 'Many laparoscopic procedures — cholecystectomy, appendectomy, hernia repair — are performed as day surgeries so patients return home the same day.'
        },
        {
          title: 'Comprehensive Pre & Post-op Care',
          desc: 'Detailed pre-operative evaluation, anaesthesia consultation, and structured post-operative follow-up ensure a smooth, complication-free recovery.'
        }
      ],
      extraImages: [
        'https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 3. PLASTIC SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    id: 'plastic-surgery',
    iconName: 'Sparkles',
    title: 'Plastic & Reconstructive Surgery',
    shortDesc: 'Restoring form, function, and confidence through expert reconstructive and aesthetic surgical care.',
    fullDesc: 'Our Plastic and Reconstructive Surgery department is dedicated to helping patients recover appearance, function, and self-confidence following injuries, burns, disease, or previous surgeries. Led by visiting expert plastic surgeons, we offer a full spectrum of reconstructive procedures — from acute burn management and skin grafting to complex flap reconstructions, scar revisions, and wound closures. Our approach is always patient-centred: we combine surgical precision with an artistic eye to deliver results that are as natural-looking as possible. Whether you need reconstruction after cancer surgery, management of a severe burn, or correction of a traumatic deformity, our team is here to guide you every step of the way.',
    benefits: [
      'Scar Revision & Keloid Treatment',
      'Burn Reconstruction & Skin Grafting',
      'Post-Surgical Reconstruction',
      'Wound Closure & Flap Surgery',
      'Trauma Deformity Correction',
      'Congenital Anomaly Management'
    ],
    image: 'https://images.unsplash.com/photo-1703809047424-ec4ea5fb6339?q=80&w=2072&auto=format&fit=crop',
    extended: {
      stats: [
        { value: '14+', label: 'Years of Excellence' },
        { value: 'Expert', label: 'Visiting Plastic Surgeons' },
        { value: '30+', label: 'Insurance Partners' },
        { value: '100%', label: 'Patient-Centred Care' }
      ],
      procedures: [
        {
          name: 'Scar Revision Surgery',
          desc: 'Surgical reshaping or excision of unsightly, painful, or functionally limiting scars resulting from previous surgeries, injuries, or burns.'
        },
        {
          name: 'Skin Grafting',
          desc: 'Transfer of healthy skin from a donor site to cover areas of skin loss caused by burns, deep wounds, or surgical excision of tumours or infected tissue.'
        },
        {
          name: 'Burn Reconstruction',
          desc: 'Multi-stage surgical management of burn contractures and deformities including release of tight scar bands limiting joint movement and function.'
        },
        {
          name: 'Flap Surgery (Local & Regional)',
          desc: 'Transfer of tissue — skin, fat, and blood vessels — from a nearby area to reconstruct complex defects following trauma or cancer surgery.'
        },
        {
          name: 'Keloid & Hypertrophic Scar Treatment',
          desc: 'Combined surgical excision and adjuvant therapy (steroid injections or pressure therapy) for raised, thickened, or itchy scar tissue.'
        },
        {
          name: 'Wound Care & Debridement',
          desc: 'Expert surgical and conservative management of chronic, infected, or non-healing wounds including diabetic foot ulcers and pressure sores.'
        }
      ],
      conditions: [
        'Burns (Thermal, Chemical & Electrical)',
        'Post-Traumatic Scarring & Deformities',
        'Keloids & Hypertrophic Scars',
        'Post-Surgical Wound Complications',
        'Diabetic Foot Ulcers & Chronic Wounds',
        'Contractures Limiting Joint Movement',
        'Skin Defects After Tumour Excision',
        'Cleft Lip & Palate (Congenital)',
        'Pressure Sores & Skin Breakdown',
        'Congenital Skin & Soft-Tissue Anomalies'
      ],
      whyChooseUs: [
        {
          title: 'Visiting Expert Plastic Surgeons',
          desc: 'Dr. Lalit Darle, an experienced plastic surgeon, visits every Saturday — delivering specialist-level reconstructive care in Sangamner without city travel.'
        },
        {
          title: 'Comprehensive Burn Care',
          desc: 'We manage burns from initial resuscitation through wound care, skin grafting, and long-term reconstructive surgery for contracture release.'
        },
        {
          title: 'Natural, Functional Results',
          desc: 'Our plastic surgeons combine technical precision with aesthetic judgement to restore not just appearance but also function and quality of life.'
        },
        {
          title: 'Integrated Multi-Specialty Support',
          desc: 'Complex cases — such as head-and-neck cancer reconstruction or post-orthopaedic soft-tissue coverage — are managed collaboratively across departments.'
        }
      ],
      extraImages: [
        'https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=800&auto=format&fit=crop'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 4. CANCER SURGERY
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cancer-surgery',
    iconName: 'Stethoscope',
    title: 'Cancer Surgery',
    shortDesc: 'Specialised surgical oncology with a multidisciplinary approach for the best possible cancer outcomes.',
    fullDesc: 'Cancer surgery at Kute Hospital is delivered by a dedicated team of surgical oncologists and visiting specialists who work within a multidisciplinary framework. We believe that every cancer patient deserves a personalised, evidence-based treatment plan — not a one-size-fits-all approach. Our surgical team performs curative, staging, and palliative procedures for a wide range of cancers, from solid tumours of the breast, colon, and thyroid to complex abdominal and retroperitoneal malignancies. We integrate surgery with pathology, radiology, and medical oncology consultations so that each patient receives the full benefit of modern cancer care, closer to home. Early detection, precise surgical technique, and compassionate post-operative support are the pillars of our oncology programme.',
    benefits: [
      'Curative & Palliative Tumour Excision',
      'Biopsy & Histopathology',
      'Multidisciplinary Tumour Board Review',
      'Minimally Invasive Oncological Surgery',
      'Lymph Node Assessment & Dissection',
      'Post-op Oncology Follow-up'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
    extended: {
      stats: [
        { value: '10+', label: 'Cancer Types Treated' },
        { value: 'MDT', label: 'Tumour Board Approach' },
        { value: '14+', label: 'Years of Experience' },
        { value: '30+', label: 'Insurance Partners' }
      ],
      procedures: [
        {
          name: 'Tumour Excision (Wide Local Excision)',
          desc: 'Surgical removal of the tumour along with a margin of healthy surrounding tissue to achieve clear histological margins and reduce recurrence risk.'
        },
        {
          name: 'Biopsy (Excisional & Core Needle)',
          desc: 'Tissue sampling for definitive histopathological diagnosis — the essential first step before any cancer treatment decision is made.'
        },
        {
          name: 'Mastectomy & Breast Conservation',
          desc: 'Complete or partial breast removal for breast cancer, with options for immediate or delayed reconstruction in consultation with plastic surgery.'
        },
        {
          name: 'Colectomy & Colorectal Resection',
          desc: 'Laparoscopic or open removal of cancerous segments of the large bowel with lymph node clearance and bowel reconstruction.'
        },
        {
          name: 'Thyroidectomy',
          desc: 'Partial or total removal of the thyroid gland for differentiated thyroid carcinoma with central compartment lymph node dissection as required.'
        },
        {
          name: 'Sentinel Lymph Node Biopsy',
          desc: 'Minimally invasive technique to identify and assess the first lymph nodes draining a tumour, guiding the extent of lymph node surgery needed.'
        }
      ],
      conditions: [
        'Breast Cancer',
        'Colorectal & Colon Cancer',
        'Thyroid Cancer (Papillary & Follicular)',
        'Stomach & Gastric Cancer',
        'Liver & Gallbladder Malignancies',
        'Skin Cancer (Melanoma & SCC)',
        'Soft Tissue Sarcomas',
        'Lymphoma (Surgical Staging)',
        'Abdominal & Retroperitoneal Tumours',
        'Metastatic Disease (Palliative Surgery)'
      ],
      whyChooseUs: [
        {
          title: 'Multidisciplinary Tumour Board',
          desc: 'Every cancer case is reviewed by a team of surgeons, radiologists, and pathologists together, ensuring no treatment decision is made in isolation.'
        },
        {
          title: 'Visiting Surgical Oncologist',
          desc: 'Dr. Vinayak Shenge, a specialist cancer surgeon, provides expert oncological surgical opinions and performs complex procedures on call.'
        },
        {
          title: 'Early Detection & Rapid Workup',
          desc: 'On-site biopsy, histopathology referral, and imaging services allow rapid cancer staging so treatment can begin without delay.'
        },
        {
          title: 'Compassionate Patient Support',
          desc: 'We understand a cancer diagnosis is frightening. Our team offers clear communication, honest prognosis counselling, and continuous emotional support.'
        }
      ],
      extraImages: [
        'https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1579154491781-5e199df316aa?q=80&w=800&auto=format&fit=crop'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 5. ORTHOPAEDIC & TRAUMA
  // ─────────────────────────────────────────────────────────────
  {
    id: 'orthopaedic-trauma',
    iconName: 'Bone',
    title: 'Orthopaedic & Trauma',
    shortDesc: 'Advanced care for fractures, joint conditions, sports injuries, and spinal disorders by expert orthopaedic surgeons.',
    fullDesc: 'Our Orthopaedic and Trauma Surgery department provides comprehensive care for the full range of musculoskeletal injuries and degenerative conditions. Whether you arrive with an acute fracture from a road accident or a chronic joint condition built up over years, our visiting orthopaedic specialists and in-house surgical team deliver evidence-based treatment using the latest implants, arthroscopic equipment, and rehabilitation protocols. We manage everything from complex intra-articular fractures and ligament reconstructions to joint replacements and spinal decompression. Our on-call availability ensures trauma patients — the most time-sensitive orthopaedic cases — are assessed and taken to surgery without unnecessary delay. Post-operatively, our physiotherapy and rehabilitation guidance helps patients regain mobility and return to their pre-injury activity level as quickly and safely as possible.',
    benefits: [
      'Joint Replacement (Hip, Knee, Shoulder)',
      'Complex Fracture Fixation (ORIF)',
      'Arthroscopic Surgery',
      'Spinal Decompression & Fusion',
      'Sports Injury Management',
      'Physiotherapy & Rehabilitation Guidance'
    ],
    image: 'https://images.unsplash.com/photo-1631651365457-d52b7b3a7e79?q=80&w=2064&auto=format&fit=crop',
    extended: {
      stats: [
        { value: '24/7', label: 'Trauma Emergency Coverage' },
        { value: '10+', label: 'Visiting Orthopaedic Specialists' },
        { value: '14+', label: 'Years of Experience' },
        { value: '30+', label: 'Insurance Partners' }
      ],
      procedures: [
        {
          name: 'Open Reduction & Internal Fixation (ORIF)',
          desc: 'Surgical realignment and stabilisation of complex fractures using plates, screws, intramedullary nails, or wires for precise anatomical restoration.'
        },
        {
          name: 'Total Knee & Hip Replacement',
          desc: 'Replacement of severely arthritic or damaged knee and hip joints with precision-engineered prostheses, eliminating pain and restoring mobility.'
        },
        {
          name: 'Arthroscopic Surgery',
          desc: 'Minimally invasive keyhole surgery inside joints for meniscal tears, ACL reconstruction, rotator cuff repair, and joint debridement with rapid recovery.'
        },
        {
          name: 'Spinal Decompression & Disc Surgery',
          desc: 'Surgical relief of nerve compression from herniated discs, spinal stenosis, or spondylolisthesis causing chronic back or leg pain and neurological symptoms.'
        },
        {
          name: 'External Fixation for Open Fractures',
          desc: 'Emergency stabilisation of severely contaminated or complex open fractures using external fixator frames to maintain alignment while managing infection risk.'
        },
        {
          name: 'Ligament & Tendon Reconstruction',
          desc: 'Surgical repair or reconstruction of ruptured ligaments (ACL, PCL, collateral) and tendons (Achilles, rotator cuff) to restore joint stability and function.'
        }
      ],
      conditions: [
        'Road Traffic Accident Fractures (Polytrauma)',
        'Osteoarthritis of Knee, Hip & Shoulder',
        'ACL, PCL & Meniscal Tears (Sports Injuries)',
        'Intervertebral Disc Herniation & Sciatica',
        'Spinal Stenosis & Spondylolisthesis',
        'Shoulder Dislocation & Rotator Cuff Tears',
        'Ankle & Wrist Fractures & Dislocations',
        'Bone Infections (Osteomyelitis)',
        'Bone Tumours (Primary & Metastatic)',
        'Congenital Limb Deformities',
        'Avascular Necrosis of the Femoral Head',
        'Tendinitis & Chronic Overuse Injuries'
      ],
      whyChooseUs: [
        {
          title: '24/7 Trauma Readiness',
          desc: 'Road traffic accidents and fractures are time-critical. Our round-the-clock trauma team ensures emergency orthopaedic surgery is never delayed.'
        },
        {
          title: 'Visiting Specialist Orthopaedic Surgeon',
          desc: 'Dr. Nikhil Rahangdale, an experienced orthopaedic surgeon, provides specialist consultations and complex procedures on call, bringing tertiary-level expertise to Sangamner.'
        },
        {
          title: 'Modern Implants & Arthroscopy Suite',
          desc: 'We use premium orthopaedic implants and a dedicated arthroscopy tower enabling minimally invasive joint surgery with the same outcomes as major city centres.'
        },
        {
          title: 'Integrated Rehabilitation',
          desc: 'Surgery is only half the journey. Our structured physiotherapy protocols and follow-up ensure patients achieve the maximum possible functional recovery.'
        }
      ],
      extraImages: [
        'https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516069677018-378515003435?q=80&w=800&auto=format&fit=crop'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // 6. CARDIOLOGY
  // ─────────────────────────────────────────────────────────────
  {
    id: 'cardiology',
    iconName: 'Heart',
    title: 'Cardiology',
    shortDesc: 'Comprehensive heart care, diagnostics, and super-specialty interventions for all cardiac conditions.',
    fullDesc: 'Our Cardiology department provides expert, compassionate care for all heart-related conditions. Equipped with advanced diagnostic technology and staffed by experienced visiting super-specialists, we offer a complete spectrum of cardiac services — from routine check-ups and ECGs to the management of complex coronary artery disease and heart failure. We are committed to promoting long-term cardiovascular health while delivering life-saving interventions when every second counts.',
    benefits: [
      'ECG & 2D Echocardiography',
      'Treadmill Stress Test (TMT)',
      'Heart Failure Management',
      'Preventive Cardiology',
      'Arrhythmia Diagnosis & Treatment',
      'Hypertension Management'
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2072&auto=format&fit=crop',
    extended: {
      stats: [
        { value: '24/7', label: 'Cardiac Emergency Care' },
        { value: '14+', label: 'Years of Excellence' },
        { value: '30+', label: 'Insurance Partners' },
        { value: '10+', label: 'Visiting Specialists' }
      ],
      procedures: [
        {
          name: 'ECG (Electrocardiogram)',
          desc: 'A quick, painless recording of the heart\'s electrical activity used to detect rhythm disorders, ischemia, and prior heart attacks.'
        },
        {
          name: '2D Echocardiography',
          desc: 'High-resolution ultrasound imaging of the heart\'s chambers, valves, and pumping function for accurate structural assessment.'
        },
        {
          name: 'Treadmill Stress Test (TMT)',
          desc: 'Evaluates how the heart performs under controlled physical stress to identify blockages and coronary artery disease.'
        },
        {
          name: 'Holter Monitoring',
          desc: '24–48 hour continuous ECG recording worn by the patient to detect intermittent arrhythmias not visible on a resting ECG.'
        },
        {
          name: 'Hypertension Management',
          desc: 'Personalised treatment plans combining medication, dietary guidance, and lifestyle interventions for sustained blood pressure control.'
        },
        {
          name: 'Cardiac Consultation',
          desc: 'Detailed evaluation by visiting super-specialist cardiologists with evidence-based, personalised treatment plans.'
        }
      ],
      conditions: [
        'Coronary Artery Disease (CAD)',
        'Heart Failure & Cardiomyopathy',
        'Arrhythmias (Irregular Heartbeat)',
        'Hypertension (High Blood Pressure)',
        'Heart Valve Disorders',
        'Myocardial Infarction (Heart Attack)',
        'Unstable Angina & Chest Pain',
        'Pericarditis & Myocarditis',
        'Peripheral Artery Disease',
        'Congenital Heart Defects'
      ],
      whyChooseUs: [
        {
          title: 'Visiting Super-Specialists',
          desc: 'Expert cardiologists from leading tertiary care centres visit regularly, bringing advanced expertise directly to Sangamner.'
        },
        {
          title: 'Complete Diagnostics Under One Roof',
          desc: 'ECG, 2D Echo, TMT, and Holter monitoring available in-house — no need to travel to a city hospital for basic cardiac workup.'
        },
        {
          title: 'Cashless Insurance Coverage',
          desc: 'We are empanelled with 30+ TPA and private insurance providers, ensuring cashless cardiac care for eligible patients.'
        },
        {
          title: '24/7 Emergency Response',
          desc: 'Our emergency team is always on standby to rapidly stabilise cardiac emergencies, reducing critical delays in treatment.'
        }
      ],
      extraImages: [
        'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&auto=format&fit=crop'
      ]
    }
  }
];
