import CustomNavBar from "./CustomNavBar";

const Base=({title="welcome to Nikhil",children})=>{
    return(
        <div className="container-fluid p-0 m-0" style={{height:900
            ,backgroundImage: 'url(https://media.istockphoto.com/id/1138930627/photo/fog-background.webp?b=1&s=170667a&w=0&k=20&c=ti9KozVINjnkPQvx6vV7AHvJE-RqQDb7Pf5QnqE42jc=)'
         //,backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeMI_u8zHRrVXL9kT99TY5nPTG9mZ6rAkyj8tHdg&s'
         }}>
            <CustomNavBar />
            {children}
            <h1>This is Footer</h1>
        </div>
    );
};
export default Base;