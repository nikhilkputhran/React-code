import CustomNavBar from "./CustomNavBar";

const Base=({title="welcome to Nikhil",children})=>{
    return(
        <div className="container-fluid p-0 m-0" style={{height:900, backgroundImage: 'url(https://thumbs.dreamstime.com/z/cool-wallpapers-backgrounds-check-out-our-68126782.jpg?w=992)'}}>
            <CustomNavBar />
            {children}
            <h1>This is Footer</h1>
        </div>
    );
};
export default Base;