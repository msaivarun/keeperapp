import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App(){
  const [notes,setnotes]=useState([]);
  function addNote(newNote){
    setnotes((prevNotes)=>{
      return [...prevNotes,newNote]
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem,index)=>{
          return(
              <Note key={1} 
              id= {index}
              title={noteItem.title}
              content={noteItem.content} />
          )
      })}
      
      <Footer />
    </div>
  );
}
export default App;