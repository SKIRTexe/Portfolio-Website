import "./Header.css"
function Header(){
    return <div className="header">
        <div className="icon-wrapper" style={{opacity: 0}}>
            <img className="header-logo" src="linkedin-logo.svg" alt="linked in logo"/>    
            <img className="header-logo mail-logo" src="Mail-Icon.svg" alt="mail logo"/>
        </div> 
        <div className="header-name">Shrey Abert</div>
        <div className="icon-wrapper" >
            <img className="header-logo" src="linkedin-logo.svg" alt="linked in logo"/>    
            <img className="header-logo mail-logo" src="Mail-Icon.svg" alt="mail logo"/>
        </div>       
    </div>
}
export default Header