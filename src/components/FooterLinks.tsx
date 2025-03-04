import React from "react";

export interface Link {
  text: string;
  url: string;
}

interface FooterLinksProps {
  title: string;
  links: Link[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="text-base text-gray-400 hover:text-gray-300"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
