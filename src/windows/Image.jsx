import useWindowStore from "#store/window.js";
import {WindowControls} from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";


const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl} = data;
    const isMaximized = windows.imgfile?.isMaximized;

    return(
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className={`p-5 bg-gray-800 ${isMaximized ? "flex-1 flex justify-center items-center h-full" : ""}`}>
                {imageUrl ? (
                    <div className="w-full flex justify-center items-center h-full">
                        <img
                            src={imageUrl}
                            alt={name}
                            className={`w-full object-contain rounded ${isMaximized ? "h-full max-h-none" : "h-auto max-h-[70vh]"}`}
                        />
                    </div>
                ): null}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");

export default ImageWindow;