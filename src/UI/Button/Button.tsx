import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to?: string };

export default function Button(props: ButtonProps | ButtonLinkProps) {
  const classes = `button ${props.textOnly ? "button--text-only" : ""}`;

  if (isLinkPrps(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link className={classes} {...otherProps}>
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
}

// util
function isLinkPrps(
  props: ButtonProps | ButtonLinkProps,
): props is ButtonLinkProps {
  return "to" in props;
}
