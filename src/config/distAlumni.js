import alumniImage from "../assets/images/DistAlumni/AakashBansal.jpg"
function importAll(r) {
   let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
   return images
  }
  const images = importAll(require.context('../assets/images/DistAlumni', false, /\.(png|jpe?g|svg)$/));
 const image=Object.values(images)

const data = [
    {
    photo: image.filter((img)=>img.includes("Dhruv")),
    name: "John Doe",
    batch: "2021",
    branch: "ECE",
    currentPosition: "SDE",
    company: "Amazon Inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
    photo: alumniImage,
    name: "Jane Smith",
    batch: "2021",
    branch: "ECE",
    currentPosition: "SDE",
    company: "Amazon Inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
    photo: alumniImage,
    name: "Bob Johnson",
    batch: "2021",
    branch: "ECE",
    currentPosition: "SDE",
    company: "Amazon Inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
       photo: alumniImage,
       name: "John Do",
       batch: "2021",
       branch: "ECE",
       currentPosition: "SDE",
       company: "Amazon Inc",
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
       },
       {
       photo: alumniImage,
       name: "Jane Smit",
       batch: "2021",
       branch: "ECE",
       currentPosition: "SDE",
       company: "Amazon Inc",
       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       },
    // more data here
   ];

export default data