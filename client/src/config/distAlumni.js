function importAll(r) {
   let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
   return images
  }
  const images = importAll(require.context('../assets/images/DistAlumni', false, /\.(png|jpe?g|svg)$/));
 const image=Object.values(images)

const data = [
   {
     "id": 1,
     "name": "SIDDHARTH SHARMA",
     "currentPosition": "Business & Data Analytics Consultant",
     "company": "The Royal Bank of Scotland",
     "image": image.filter((img)=>img.includes("SidharthSharma")),
     "batch": "2006-10, ECE"
   },
   {
     "id": 2,
     "name": "SHREYA MURALIDHAR",
     "currentPosition": "Digital Marketing Consultant for the North America market",
     "company": "Google",
     "image": image.filter((img)=>img.includes("ShreyaMuralidhar")),
     "batch": "2006-10"
   },
   {
     "id": 3,
     "name": "Aakash Bansal",
     "currentPosition": "Ph.D Scholar",
     "company": "Loughborough University, UK",
     "image": image.filter((img)=>img.includes("AakashBansal")),
     "batch": "2014-18, ECE"
   },
   {
     "id": 4,
     "name": "Abhinav Sobti",
     "currentPosition": "Program Manager II",
     "company": "Microsoft India Development Center, Hyderabad",
     "image": image.filter((img)=>img.includes("AbhinavSobti")),
     "batch": "2011-15 (IT)"
   },
   {
     "id": 5,
     "name": "Abhishek Sharma",
     "currentPosition": "R&D Engineer",
     "company": "Synopsys India Pvt Ltd",
     "image": image.filter((img)=>img.includes("AbhishekSharma")),
     "batch": "2012-16 ECE"
   },
   {
     "id": 6,
     "name": "Akansksha Jain",
     "currentPosition": "Senior Manager - Human Resources",
     "company": "Tata Administrative Services (TAS)",
     "image": image.filter((img)=>img.includes("AkanskshaJain")),
     "batch": "2008-12, CSE"
   },
   {
     "id": 7,
     "name": "Akshay Adlakha",
     "currentPosition": "Design Engineer",
     "company": "Synopsys",
     "image": image.filter((img)=>img.includes("AkshayAdlakha")),
     "batch": "2009-13, ECE"
   },
   {
     "id": 8,
     "name": "Anand Purohit",
     "currentPosition": "Senior Engineer, System Software",
     "company": "NVIDIA Corp.",
     "image": image.filter((img)=>img.includes("AnandPurohit")),
     "batch": "2008-12, CSE"
   },
   {
     "id": 9,
     "name": "Debojit Kaushik",
     "currentPosition": "AI Data Scientist",
     "company": "Anthem Inc",
     "image": image.filter((img)=>img.includes("DebojitKaushik")),
     "batch": "2012-16, CSE"
   },
   {
     "id": 10,
     "name": "Deepali Duggal",
     "currentPosition": "Test Analyst",
     "company": "BlackRock",
     "image": image.filter((img)=>img.includes("DeepaliDuggal")),
     "batch": "2012-2016"
   },
   {
     "id": 11,
     "name": "Dhruv Wali",
     "currentPosition": "Engineer",
     "company": "Lenskart",
     "image": image.filter((img)=>img.includes("DhruvWali")),
     "batch": "2006-10, ECE"
   },
   {
     "id": 12,
     "name": "Gaurav Narang",
     "currentPosition": "Design engineer 2",
     "company": "Synopsys",
     "image": image.filter((img)=>img.includes("GauravNarang")),
     "batch": "2009-13, ECE"
   },
   {
     "id": 13,
     "name": "Hament Chawla",
     "currentPosition": "Verification Lead",
     "company": "Cerium Systems (Intel) Malaysia",
     "image": image.filter((img)=>img.includes("HamentChawla")),
     "batch": "2006-10, ECE"
   },
   {
     "id": 14,
     "name": "Harmeet Singh",
     "currentPosition": "CAD Engineer",
     "company": "Intel",
     "image": image.filter((img)=>img.includes("HarmeetSingh")),
     "batch": "2010-2014 ECE"
   },
   {
     "id": 15,
     "name": "Harsh Kaushik",
     "currentPosition": "Senior Product Manager",
     "company": "Dabur",
     "image": image.filter((img)=>img.includes("HarshKaushik")),
     "batch": "2006-10, CSE"
   },
   {
     "id": 16,
     "name": "Lakshay Suri",
     "currentPosition": "Senior Product Owner",
     "company": "Crealogix, a Swiss financial tech company",
     "image": image.filter((img)=>img.includes("LakshaySuri")),
     "batch": "2009-13, ECE"
   },
   {
     "id": 17,
     "name": "Manav Choudhary",
     "currentPosition": "Information Technology Officer",
     "company": "Punjab National Bank",
     "image": image.filter((img)=>img.includes("ManavChoudhary")),
     "batch": "2012-2016"
   },
   {
     "id": 18,
     "name": "Mehek Khera",
     "currentPosition": "Senior Operations Manager",
     "company": "Walmart E-commerce",
     "image": image.filter((img)=>img.includes("MehekKhera")),
     "batch": "2006-10, CSE"
   },
   {
     "id": 19,
     "name": "Neema Arora",
     "currentPosition": "Chief Executive Officer",
     "company": "Zilla Parishad Jalna (IAS, 2014 Batch, Maharashtra Cadre)",
     "image": image.filter((img)=>img.includes("NeemaArora")),
     "batch": "2007-11, CSE"
   },
   {
     "id": 20,
     "name": "Parit Gupta",
     "currentPosition": "Proprietor",
     "company": "ETMEX Overseas",
     "image": image.filter((img)=>img.includes("ParitGupta")),
     "batch": "2004-08, IT"
   },
   {
     "id": 21,
     "name": "Reema Majumdar",
     "currentPosition": "Technica product manager",
     "company": "Somish blockchain solutions",
     "image": image.filter((img)=>img.includes("ReemaMajumdar")),
     "batch": "2005-09, CSE"
   },
   {
     "id": 22,
     "name": "Shelly Mehan",
     "currentPosition": "Product Manager",
     "company": "Intermiles/ Jet Privilege",
     "image": image.filter((img)=>img.includes("ShellyMehan")),
     "batch": "2009-13, CSE"
   },
   {
     "id": 23,
     "name": "Shikhar Jha",
     "currentPosition": "Ernst & Young LLP Canada",
     "company": "Manager, Growth & Digital Strategy Advisory",
     "image": image.filter((img)=>img.includes("ShikharJha")),
     "batch": "2005-2009 (IT)"
   },
   {
     "id": 24,
     "name": "Shivam Ahuja",
     "currentPosition": "ELECTRICAL ENGINEER",
     "company": "SAMSUNG ENGINEERING INDIA (SEI)",
     "image": image.filter((img)=>img.includes("ShivamAhuja")),
     "batch": "2010-2014 (EEE)"
   },
   {
     "id": 25,
     "name": "Shresth Upadhyay",
     "currentPosition": "Assistant Consultant in Richardson&#39; TX",
     "company": "TCS",
     "image": image.filter((img)=>img.includes("ShresthUpadhyay")),
     "batch": "2006-2010 (EEE)"
   },
   {
     "id": 26,
     "name": "Shrey Tondon",
     "currentPosition": "Director Sales",
     "company": "Innovaccer",
     "image": image.filter((img)=>img.includes("ShreyTondon")),
     "batch": "2006-10, CSE"
   },
   {
     "id": 27,
     "name": "Sumit Aggarwal",
     "currentPosition": "Manager",
     "company": "KPMG advisory practice",
     "image": image.filter((img)=>img.includes("SumitAggarwal")),
     "batch": "2006-2010 (EEE)"
   },
   {
     "id": 28,
     "name": "Vikas Lalchandani",
     "currentPosition": "Lead Technical Architect(Data Analytics)",
     "company": "IBM India Private Limited, Bangalore",
     "image": image.filter((img)=>img.includes("VikasLalchandani")),
     "batch": " 2001-05, ECE"
   },
   {
     "id": 29,
     "name": "Hament Saxena",
     "currentPosition": "Senior R&D Engineer",
     "company": "Synopsis India Pvt Ltd",
     "image": image.filter((img)=>img.includes("HamentSaxena")),
     "batch": " 2006-10 ECE"
   }
 ];

export default data