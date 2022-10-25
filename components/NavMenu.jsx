import Link from "next/link";

export default function NavMenu({ label, href, childrens }) {
  return (
    <li>
      {childrens ? (
        <>
          <button
            type="button"
            className="hs-collapse-toggle"
            id="hs-basic-collapse"
            data-hs-collapse={`#hs-basic-collapse-submenu-${label}`}
          >
            {label}
          </button>
          <ul
            className="hs-collapse hidden overflow-hidden transition-[height] duration-300"
            id={`hs-basic-collapse-submenu-${label}`}
            aria-labelledby="hs-basic-collapse"
          >
            {childrens.map((data, index) => (
              <NavMenu key={index} {...data} />
            ))}
          </ul>
        </>
      ) : (
        <Link href={href}>{label}</Link>
      )}
    </li>
  );
}
