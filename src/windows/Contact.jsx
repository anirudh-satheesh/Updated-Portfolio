import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants";
import {WindowControls} from "#components";

const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact"/>
            <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5">
            <img
                src="/images/anirudh.png"
                alt="Anirudh"
                className="w-25 rounded-full"
            />

            <h3>Let's Connect</h3>
            <p>Interested in Tech? Let's talk.</p>
            <p>cjb.anirudhs@gmail.com</p>

            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    link && (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>
                        </li>
                    )
                ))}
            </ul>
        </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact,"contact");

export default ContactWindow;
