import useWindowStore from "#store/window.js";


const WindowControls = ({ target }) => {
    const { closeWindow, toggleMaximizeWindow } = useWindowStore()
    return <div id="window-controls">
        <button type="button" className="close" onClick={() => closeWindow(target)} aria-label="Close window" />
        <button type="button" className="minimize" aria-label="Minimize window" />
        <button type="button" className="maximize" onClick={() => toggleMaximizeWindow(target)} aria-label="Maximize window" />


    </div>;
};


export default WindowControls;