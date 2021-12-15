// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <First name="Albert Einstein" image="https://th.bing.com/th/id/R.0e3212e428718fc2c90ed2da4a6f031b?rik=qpLzZEAHl2LBeQ&riu=http%3a%2f%2fimages.teamsugar.com%2ffiles%2fusers%2f1%2f13839%2f42_2007%2falbert-einstein-young-1.jpg&ehk=D1csGA6HNKcQ8qRg3ua2B8t8TVWHcNt4rbSTYEGazjo%3d&risl=&pid=ImgRaw&r=0"/>
      
//     </div>
//   );
// }
// function First({name,image}){
//  return (
//    <div className="Photo">
//         <img src={image} alt="einstein"></img>
//          <h1>{name}</h1>
//   </div>
//          );
// }

export default function App() {
  
  const movies =[
  {name:"RRR",
  image:"https://www.filmibeat.com/ph-big/2021/12/rrr_163903031450.jpg",
  rating:9,
  summary:"A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920's."},

  {name:"Bahubhali-2",
  image:"https://wallpapercave.com/dwp2x/wp4027395.jpg",
  rating:8.5,
  summary:"When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom."},

  {name:"Bahubhali-1",
  image:"https://wallpapercave.com/dwp2x/wp1851939.jpg",
  rating:8,
  summary:"In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples."},

  {name:"Naan-E",
  image:"https://wallpapercave.com/wp/wp7489196.jpg",
  rating:7,
  summary:"Since the head of a housefly is made up almost entirely of eye and very little muscle, conveying emotion as the fly was extremely difficult. To overcome this, S.S. Rajamouli used body language - they made Nani cover his head completely in cloth and asked him to perform various emotions just through body language. This data was given to the animation team who then created all the movements and body language for the fly."},

  {name:"Maveeran",
  image:"http://i.indiglamour.com/photogallery/tamil/movies/2011/may10/Maaveeran/wide/Maaveeran_5715.jpg",
  rating:4,
  summary:"A warrior gets reincarnated 400 years later, after trying to save the princess and the kingdom, who also dies along with him. He then sets back again to fight against all odds and win back his love."},
  ];
  
  return (
    <div className="App">
      <div className="head">
       <h1>RAJAMOULI'S</h1>
       <h1>Treat❤️</h1>
       </div>
       {movies.map(({name,image,rating,summary})=><First name={name} image={image} rating={rating} summary={summary}/>)}
    </div>
  );
}
 
function First({name,image,rating,summary}){
  const check=(rating>=8.5)?"green" : (rating>4.5)?"yellow" :"red";
  const style=(check==="green")?{background:"green",color:"white"} : (check==="yellow")? {background:"yellow",color:"black"} :  {background:"red",color:"white"} ;
  const check1=(rating>=8.5)?"👌" : (rating>=4.5)? "👍": "😒" ;
  return (
   <div className="Movies">
     <img src={image} alt={name}/>
     <div className="Text">
     <h2>{name}</h2>
    <p>{check1}<span style={style}>{rating}</span></p>
    </div>
     <p className="rating"><b>Summary - </b>{summary}</p>    
  </div>
         );
}
