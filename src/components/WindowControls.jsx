import useWindowStore from "#store/window.js";


const WindowControls = ({ target }) => {
    const { closeWindow, toggleMaximizeWindow } = useWindowStore()
    return <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)} />
        <div className="minimize" />
        <div className="maximize" onClick={() => toggleMaximizeWindow(target)} />


    </div>;
};


export default WindowControls;
