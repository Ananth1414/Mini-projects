import React from "react";
import { Bookmark } from 'lucide-react';
import Card from './components/card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/300/300221.png", // Google
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png", // Amazon
      name: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", // Meta
      name: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png", // Apple
      name: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png", // Netflix
      name: "Netflix",
      datePosted: "3 days ago",
      post: "UI/UX Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png", // Microsoft
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Azure Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // NVIDIA
      name: "NVIDIA",
      datePosted: "1 week ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://cdn-icons-png.flaticon.com/512/5968/5968819.png", // Tesla
      name: "Tesla",
      datePosted: "6 days ago",
      post: "Embedded Systems Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hr",
      location: "Mumbai, India",
    },
  ];
  
  console.log(jobOpenings);

  return (

    <div className="parent">

      {jobOpenings.map(function(ele,idx){
      
        return <div key={idx}>
          <Card company={ele.companyName} post={ele.post} date={ele.datePosted}
                tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} image={ele.brandLogo}/>
        </div>
      
      })}

      </div>
)
}

export default App;