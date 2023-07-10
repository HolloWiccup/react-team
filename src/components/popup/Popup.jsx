import "./popup.css"


function Popup(props) {
    return(
        <div className="popup">
            <div className="popupFlex">
                <div className="popupBlock">
                    {props.children}
                </div>
            </div>
        </div>
    )
}



export default Popup