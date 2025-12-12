import { WindowControls } from "#components";
import { Search } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {locations} from "#constants";
import useLocationStore from "#store/location.js";
import clsx from "clsx";
import useWindowStore from "#store/window.js";

const VALID_DYNAMIC_WINDOW_TYPES = new Set(['txtfile', 'imgfile']);

const Finder = () => {
    const { openWindow, focusWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();

    const openItem = (item) => {
        if (!item) return;

        if (item.fileType === "pdf") return openWindow("resume");
        if (item.kind === "folder") return setActiveLocation(item);
        if (['fig', 'url'].includes(item.fileType) && item.href) {
            const newWindow = window.open(item.href, "_blank");
            if (newWindow) newWindow.opener = null;
            return;
        }

        const { fileType, kind } = item;
        if (typeof fileType === 'string' && fileType && typeof kind === 'string' && kind) {
            const windowType = `${fileType}${kind}`.toLowerCase();
            if (VALID_DYNAMIC_WINDOW_TYPES.has(windowType)) {
                openWindow(windowType, item);
            } else {
                console.warn(`Attempted to open an invalid window type: ${windowType}`);
            }
        }
    };


    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>

            <ul>
                {items.map((item) => (
        <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
                item.id === activeLocation.id ? "active" :
                    "not-active",
            )}
        >
            <img
                src={item.icon} className="w-4" alt={item.name}/>
            <p className="text-sm font-medium truncate">{item.name}</p>
        </li>
    ))}
        </ul>
    </div>
);

   return (
       <>
           <div id="window-header">
               <WindowControls target="finder" />
               <h2>File Manager</h2>
               <Search className="icon"/>
           </div>

           <div className="bg-white flex h-full">
               <div className="sidebar">
                   {renderList('Favorites', Object.values(locations))}
                   {locations.work?.children && renderList('My Projects', locations.work.children)}
               </div>
            <ul className="content">
                {activeLocation.children?.map((item) => (
                    <li key={item.id}
                        className={item.position || ''}
                    >
                        <button 
                            onClick={() => openItem(item)}
                            aria-label={`Open ${item.name}`}
                            className="w-full flex flex-col items-center"
                        >
                            <img src={item.icon} alt={item.name}/>
                            <p>{item.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
           </div>

       </>
   )
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
