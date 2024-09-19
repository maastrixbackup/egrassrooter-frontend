import { useRouter } from "next/router";
import Link from "next/link";

export { NavLink };


function NavLink({ href, exact = false, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  props.className = props.className || "";

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}