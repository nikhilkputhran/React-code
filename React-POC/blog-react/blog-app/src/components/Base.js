import CustomNavBar from "./CustomNavBar";

const Base=({title="welcome to Nikhil",children})=>{
    return(
        <div className="container-fluid p-0 m-0">
            <CustomNavBar />
            {children}
            <h1>This is Footer</h1>
        </div>
    );
};
export default Base;