import LinkedIn from "../assets/linkedIn";
import Github from "../assets/techStack/github";
import UpArrow from "../assets/upArrow";

const footerLinks = [
    {
        title: <LinkedIn />,
        link: "https://www.linkedin.com/in/jennifer-antonette-tiongson/"
    },
    {
        title: <Github className="fill-white rounded-lg size-7"/>,
        link: "https://github.com/jean1030"
    }
];

export default function Footer() {
    const handleLinkClick = (link: string) => {
        if (link.startsWith("mailto:")) {
            window.location.href = link;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    <div>
        <div className='container mx-auto border-t border-white/5 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between'>
            <div className="text-white/40">&copy; 2026. All rights reserved.</div>

            <nav className="flex flex-row items-center gap-2">
                {footerLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.link}
                                            target={link.link.startsWith("http") ? "_blank" : undefined}
                                            rel={link.link.startsWith("http") ? "noreferrer" : undefined}
                                            onClick={() => handleLinkClick(link.link)}
                                            className="inline-flex items-center gap-1 hover:bg-white/10 hover:text-white transition duration-300 px-3 py-1 rounded-lg"
                                        >
                        {link.title}
                    </a>
                ))}
            </nav>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/10 hover:text-white transition duration-300"
                            aria-label="Back to top"
                        >
                            <UpArrow />
                        </button>
        </div>
    </div>
  )
}
