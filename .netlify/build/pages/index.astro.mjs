/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, d as renderSlot, e as renderHead, b as addAttribute, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_y4bMj1_Q.mjs';
import 'kleur/colors';
import 'html-escaper';
import { clsx } from 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="My Portfolio"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preload" href="/assets/fonts/karla.woff2" as="font" type="font/woff2" crossorigin="anonymous"><title>', "</title><!-- Theme detection script to prevent flash --><script>\n			(function () {\n				try {\n					const savedTheme = localStorage.getItem('theme');\n					const prefersDark = window.matchMedia(\n						'(prefers-color-scheme: dark)'\n					).matches;\n\n					if (\n						savedTheme === 'dark' ||\n						(!savedTheme && prefersDark)\n					) {\n						document.documentElement.classList.add('dark');\n					} else {\n						document.documentElement.classList.remove(\n							'dark'\n						);\n					}\n				} catch (error) {\n					// Default to light mode if there's an error\n					document.documentElement.classList.remove('dark');\n				}\n			})();\n		<\/script>", '</head> <body class="text-foreground"> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/habbey/Documents/playground/my-website/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const typographyVariants = {
  h1: "scroll-m-20 text-4xl font-semibold tracking-tight",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  inlineCode: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground"
};
const Typography = React.forwardRef(
  ({ className, variant = "p", as, children, ...props }, ref) => {
    const Component = as || (variant === "p" ? "p" : variant);
    return React.createElement(
      Component,
      {
        className: cn(
          typographyVariants[variant],
          className
        ),
        ref,
        ...props
      },
      children
    );
  }
);
Typography.displayName = "Typography";
const H1 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "h1",
      className,
      ...props
    }
  )
);
H1.displayName = "H1";
const H2 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "h2",
      className,
      ...props
    }
  )
);
H2.displayName = "H2";
const H3 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "h3",
      className,
      ...props
    }
  )
);
H3.displayName = "H3";
const H4 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "h4",
      className,
      ...props
    }
  )
);
H4.displayName = "H4";
const H5 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "h5",
      className,
      ...props
    }
  )
);
H5.displayName = "H5";
const H6 = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "h6",
      className,
      ...props
    }
  )
);
H6.displayName = "H6";
const P = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "p",
      className,
      ...props
    }
  )
);
P.displayName = "P";
const Blockquote = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "blockquote",
      className,
      ...props
    }
  )
);
Blockquote.displayName = "Blockquote";
const List = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "list",
      className,
      ...props
    }
  )
);
List.displayName = "List";
const InlineCode = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "inlineCode",
      className,
      ...props
    }
  )
);
InlineCode.displayName = "InlineCode";
const Lead = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "lead",
      className,
      ...props
    }
  )
);
Lead.displayName = "Lead";
const Large = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "large",
      className,
      ...props
    }
  )
);
Large.displayName = "Large";
const Small = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "small",
      className,
      ...props
    }
  )
);
Small.displayName = "Small";
const Muted = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    Typography,
    {
      ref,
      variant: "muted",
      className,
      ...props
    }
  )
);
Muted.displayName = "Muted";

const DeveloperIllustration = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: "400",
    height: "300",
    viewBox: "0 0 400 300",
    className: "w-full h-auto max-w-md mx-auto animate-fade-in-up animate-delay-300",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "50",
          y: "50",
          width: "300",
          height: "200",
          rx: "10",
          fill: "none",
          stroke: "hsl(var(--muted-foreground))",
          strokeWidth: "2",
          strokeOpacity: "0.3"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "200",
          cy: "120",
          r: "25",
          fill: "none",
          stroke: "hsl(var(--foreground))",
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "185",
          y: "145",
          width: "30",
          height: "40",
          rx: "5",
          fill: "none",
          stroke: "hsl(var(--foreground))",
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "80",
          y: "80",
          width: "60",
          height: "4",
          rx: "2",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.6"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "80",
          y: "90",
          width: "80",
          height: "4",
          rx: "2",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.4"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "80",
          y: "100",
          width: "70",
          height: "4",
          rx: "2",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.5"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "250",
          y: "80",
          width: "100",
          height: "60",
          rx: "5",
          fill: "none",
          stroke: "hsl(var(--foreground))",
          strokeWidth: "2"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "250",
          y: "80",
          width: "100",
          height: "15",
          rx: "5",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.2"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "260",
          cy: "87",
          r: "2",
          fill: "hsl(var(--destructive))"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "270",
          cy: "87",
          r: "2",
          fill: "hsl(var(--warning))"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "280",
          cy: "87",
          r: "2",
          fill: "hsl(var(--success))"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "255",
          y: "105",
          width: "40",
          height: "3",
          rx: "1",
          fill: "hsl(var(--foreground))",
          opacity: "0.7"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "255",
          y: "115",
          width: "60",
          height: "3",
          rx: "1",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.5"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: "255",
          y: "125",
          width: "50",
          height: "3",
          rx: "1",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.4"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "100",
          cy: "200",
          r: "3",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.4"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "300",
          cy: "180",
          r: "2",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.3"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "320",
          cy: "220",
          r: "4",
          fill: "hsl(var(--muted-foreground))",
          opacity: "0.2"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M200 145 L200 200 L150 200",
          stroke: "hsl(var(--muted-foreground))",
          strokeWidth: "1",
          opacity: "0.3",
          fill: "none"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M200 145 L200 200 L250 200",
          stroke: "hsl(var(--muted-foreground))",
          strokeWidth: "1",
          opacity: "0.3",
          fill: "none"
        }
      )
    ]
  }
);
function About() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "about",
      className: "w-full h-auto md:h-[65vh] flex items-center justify-center px-4 md:px-12 py-20",
      children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 md:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx(H1, { className: "text-5xl lg:text-6xl font-bold tracking-tight hover-scale cursor-default", children: "Abbey Kumapayi" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx(Muted, { className: "text-base md:text-xl text-foreground", children: "Product Engineer" }),
              /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-muted-foreground rounded-full" }),
              /* @__PURE__ */ jsx(Muted, { className: "text-base md:text-xl text-foreground", children: "7+ years experience" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Lead, { className: "text-2xl leading-relaxed text-foreground max-w-2xl", children: [
            "I build",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground font-bold", children: "fast, accessible, beautiful" }),
            " ",
            "web experiences and solutions that",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground font-bold", children: "drive impact" }),
            " ",
            "in the real world."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs(Muted, { className: "text-lg leading-8", children: [
              "Product Engineer with extensive experience building software across",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "e-commerce" }),
              ",",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "transportation" }),
              ", and",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "insurance" }),
              " ",
              "industries."
            ] }),
            /* @__PURE__ */ jsxs(Muted, { className: "text-lg leading-8", children: [
              " ",
              "Currently working as a",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "Senior Frontend Developer" }),
              " ",
              "at",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "React Squad" }),
              ", leading frontend development initiatives and building scalable component libraries using",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "React" }),
              ",",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "Next.js" }),
              ", and",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-semibold", children: "TypeScript" }),
              "."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-end order-1 lg:order-2", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(DeveloperIllustration, {}),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-8 h-8 bg-muted-foreground/20 rounded-full animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 w-6 h-6 bg-muted-foreground/15 rounded-full animate-pulse delay-1000" })
        ] }) })
      ] }) })
    }
  );
}

const badgeVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  muted: "bg-muted text-muted-foreground hover:bg-muted/80 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
};
const badgeSizes = {
  sm: "px-2 py-1 text-xs",
  default: "px-2.5 py-0.5 text-sm",
  lg: "px-3 py-1 text-base"
};
const Badge = React.forwardRef(
  ({
    className,
    variant = "default",
    size = "default",
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      "span",
      {
        ref,
        className: cn(
          "inline-flex items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          badgeVariants[variant],
          badgeSizes[size],
          className
        ),
        ...props,
        children
      }
    );
  }
);
Badge.displayName = "Badge";

function ExperienceItem({
  title,
  company,
  location,
  period,
  description,
  tools = []
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 animate-fade-in-up", children: [
    /* @__PURE__ */ jsx(H4, { className: "text-lg font-semibold hover-scale cursor-default", children: title }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(P, { className: "flex flex-wrap items-center gap-2 text-base mt-0", children: [
      /* @__PURE__ */ jsx("span", { className: "font-medium", children: company }),
      /* @__PURE__ */ jsx("span", { children: "•" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: location }),
      /* @__PURE__ */ jsx("span", { children: "•" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: period })
    ] }) }),
    /* @__PURE__ */ jsx(Muted, { className: "text-base leading-8", children: description }),
    tools.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: tools.map((tool, index) => /* @__PURE__ */ jsx(
      Badge,
      {
        variant: "muted",
        size: "sm",
        className: "font-medium hover-scale",
        children: tool
      },
      index
    )) })
  ] });
}

function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "React Squad",
      location: "Remote",
      period: "Dec 2024 — Present",
      description: "Leading frontend development initiatives for cutting-edge web applications. Building scalable component libraries and design systems that enhance developer productivity. Mentoring junior developers and conducting code reviews to maintain high code quality standards.",
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "Component Libraries",
        "Design Systems"
      ]
    },
    {
      title: "Lead Frontend Engineer",
      company: "Datangle",
      location: "London",
      period: "May 2024 — Nov 2024",
      description: "Built a comprehensive pipeline workflow builder for data engineers, enabling visual data processing workflows. Led frontend architecture decisions and mentored junior engineers. Collaborated with cross-functional teams to deliver high-performance applications.",
      tools: [
        "NextJS",
        "TypeScript",
        "React Flow",
        "Frontend Architecture"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Theoremone",
      location: "California",
      period: "Mar 2022 — Nov 2023",
      description: "Built various products for partners using modern web technologies. Contributed to frontend architecture of a title insurance application, focusing on scalability and user experience. Conducted feasibility studies and collaborated with UI designers.",
      tools: [
        "React",
        "VueJS",
        "NodeJS",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript"
      ]
    },
    {
      title: "Senior Frontend Engineer",
      company: "Pangaea Holdings",
      location: "California",
      period: "Jan 2021 — Feb 2022",
      description: "Developed e-commerce solutions for multiple company brands, ensuring optimal UI/UX quality and code standards. Integrated web applications with Shopify API for seamless inventory management. Achieved significant performance improvements by reducing web application load time by 40%.",
      tools: [
        "React",
        "TypeScript",
        "Shopify API",
        "HTML",
        "CSS",
        "Performance Optimization"
      ]
    },
    {
      title: "Lead Software Engineer",
      company: "Enyata",
      location: "Lagos",
      period: "Oct 2019 — Jan 2021",
      description: "Built various products including an anonymous dating app and a vehicle maintenance and inventory app for partners. Mentored junior engineers and conducted code reviews to improve code quality. Set up standard project architectures and translated product requirements to technical specifications.",
      tools: [
        "React",
        "JavaScript",
        "Project Architecture",
        "Code Review",
        "Mentoring"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "experience",
      className: "w-full h-full flex flex-col fade-in gap-12  px-4 md:px-12 py-10 md:py-20",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(H3, { className: "text-2xl md:text-4xl font-bold mb-4", children: "Professional Experience" }) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto w-full", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-12", children: experiences.map((exp, index) => /* @__PURE__ */ jsx(
          ExperienceItem,
          {
            title: exp.title,
            company: exp.company,
            location: exp.location,
            period: exp.period,
            description: exp.description,
            tools: exp.tools
          },
          index
        )) }) })
      ]
    }
  );
}

const Card = React.forwardRef(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "div";
    if (asChild) {
      return /* @__PURE__ */ jsx(React.Fragment, { children: React.cloneElement(children, {
        className: cn(
          "group block bg-transparent border border-border rounded-xl p-6 hover:bg-muted/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:border-muted-foreground/30 hover:-translate-y-1 h-full hover-lift",
          className
        ),
        ref,
        ...props
      }) });
    }
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        className: cn(
          "group block bg-transparent border border-border rounded-xl p-6 hover:bg-muted/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:border-muted-foreground/30 hover:-translate-y-1 h-full hover-lift",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("relative mb-4", className),
      ...props
    }
  )
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
    "h4",
    {
      ref,
      className: cn(
        "text-lg font-semibold text-foreground mb-3 group-hover:text-foreground transition-colors duration-300 pr-8",
        className
      ),
      ...props,
      children
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardIcon = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "svg",
    {
      ref,
      className: cn(
        "w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300",
        "absolute top-0 right-0 z-10",
        className
      ),
      style: {
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: 10
      },
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        }
      )
    }
  )
);
CardIcon.displayName = "CardIcon";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("", className),
      ...props
    }
  )
);
CardContent.displayName = "CardContent";
const CardDescription = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      className: cn(
        "text-sm text-muted-foreground group-hover:text-foreground/80 leading-relaxed mb-4 overflow-hidden transition-colors duration-300",
        className
      ),
      style: {
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical"
      },
      ...props,
      children
    }
  )
);
CardDescription.displayName = "CardDescription";
const CardMeta = React.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 mb-3 transition-colors duration-300",
        className
      ),
      ...props,
      children
    }
  )
);
CardMeta.displayName = "CardMeta";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("flex flex-wrap gap-2", className),
      ...props
    }
  )
);
CardFooter.displayName = "CardFooter";

function ProjectItem({
  title,
  description,
  technologies = [],
  githubUrl,
  liveUrl,
  status = "completed",
  index = 0,
  totalItems = 0
}) {
  const projectUrl = liveUrl || githubUrl;
  return /* @__PURE__ */ jsx(Card, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: projectUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { children: title }),
          /* @__PURE__ */ jsx(CardIcon, {})
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { children: description }) }),
        technologies.length > 0 && /* @__PURE__ */ jsxs(CardFooter, { children: [
          technologies.slice(0, 4).map((tech, index2) => /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "muted",
              size: "sm",
              className: "font-medium",
              children: tech
            },
            index2
          )),
          technologies.length > 4 && /* @__PURE__ */ jsxs(
            Badge,
            {
              variant: "outline",
              size: "sm",
              className: "font-medium",
              children: [
                "+",
                technologies.length - 4,
                " more"
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

function Projects() {
  const projects = [
    {
      title: "UX Test Tools",
      description: "A comprehensive suite of user experience testing tools designed to help UX researchers and designers conduct effective usability studies. Features include user testing templates, analytics dashboards, and collaborative feedback systems.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "PostgreSQL"
      ],
      githubUrl: "https://github.com/habbeunik/ux-test-tools",
      liveUrl: "https://uxtesttools.com/",
      status: "completed"
    },
    {
      title: "React Flow Workflow",
      description: "A powerful React hook for building interactive workflow diagrams with React Flow. Features smart layout engine, configurable spacing, and simplified API for creating node-based workflows with automatic layout capabilities.",
      technologies: [
        "React",
        "TypeScript",
        "React Flow",
        "NPM Package",
        "Node.js"
      ],
      githubUrl: "https://github.com/habbeunik/react-flow-workflow",
      liveUrl: "https://www.npmjs.com/package/react-flow-workflow",
      status: "completed"
    },
    {
      title: "Pokemon Flow Visualizer",
      description: "An interactive Pokemon evolution flow visualizer built with React Flow. Demonstrates the power of the react-flow-workflow library with a fun, engaging interface showing Pokemon evolution chains and relationships.",
      technologies: [
        "React",
        "TypeScript",
        "React Flow",
        "Vercel",
        "Tailwind CSS"
      ],
      githubUrl: "https://github.com/habbeunik/pokemon-flow-visualizer",
      liveUrl: "https://pokemon-flow-visualizer-omega.vercel.app/",
      status: "completed"
    },
    {
      title: "Journal App",
      description: "A modern personal journaling application with rich text editing, mood tracking, and data visualization. Features include search functionality, tags, export capabilities, and beautiful UI for daily reflection.",
      technologies: [
        "React",
        "TypeScript",
        "Vercel",
        "Tailwind CSS",
        "Local Storage"
      ],
      githubUrl: "https://github.com/habbeunik/journal-app",
      liveUrl: "https://journ-app.vercel.app/",
      status: "completed"
    },
    {
      title: "Study App",
      description: "An AI-powered study tool designed to enhance learning efficiency and retention. Features intelligent content generation, adaptive quizzes, progress tracking, and personalized study recommendations based on learning patterns.",
      technologies: [
        "React",
        "TypeScript",
        "AI/ML",
        "Node.js",
        "PostgreSQL"
      ],
      githubUrl: "https://github.com/habbeunik/study-app",
      liveUrl: "",
      status: "in-progress"
    }
  ];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "projects",
      className: "w-full h-full flex flex-col fade-in gap-8 md:gap-12 px-4 md:px-12 py-10 md:py-20",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(H3, { className: "text-2xl md:text-4xl font-bold mb-4", children: "Featured Projects" }) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto w-full", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => /* @__PURE__ */ jsx(
          ProjectItem,
          {
            title: project.title,
            description: project.description,
            technologies: project.technologies,
            githubUrl: project.githubUrl,
            liveUrl: project.liveUrl,
            status: project.status
          },
          index
        )) }) })
      ]
    }
  );
}

function BlogItem({
  title,
  description,
  tags = [],
  url,
  date,
  readTime
}) {
  return /* @__PURE__ */ jsx(Card, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: title }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs(CardMeta, { children: [
            /* @__PURE__ */ jsx("span", { children: date }),
            /* @__PURE__ */ jsx("span", { children: "•" }),
            /* @__PURE__ */ jsx("span", { children: readTime })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: description })
        ] })
      ]
    }
  ) });
}

function Blog() {
  const blogPosts = [
    {
      title: "Writing a Custom REST API Hook",
      description: "Learn how to create reusable custom hooks for REST API interactions in React applications. This comprehensive guide covers error handling, loading states, caching strategies, and best practices for building maintainable API integration patterns.",
      tags: [
        "React",
        "Custom Hooks",
        "REST API",
        "JavaScript"
      ],
      url: "https://medium.com/@Habbeyunik/writing-a-custom-rest-api-hook-e31a3218f512",
      date: "Dec 2024",
      readTime: "8 min read"
    },
    {
      title: "Can AI Learn Like Humans? Exploring World Models in Artificial Intelligence",
      description: "Dive deep into the fascinating world of AI learning mechanisms and how they compare to human cognition. Explore world models, neural networks, and the future of artificial intelligence as we examine whether machines can truly learn like humans.",
      tags: [
        "Artificial Intelligence",
        "Machine Learning",
        "World Models",
        "Neural Networks"
      ],
      url: "https://medium.com/@Habbeyunik/can-ai-learn-like-humans-exploring-world-models-in-artificial-intelligence-d9b6483d541e",
      date: "Dec 2024",
      readTime: "12 min read"
    },
    {
      title: "Building Modern Web Applications with React and TypeScript",
      description: "A comprehensive guide to building scalable web applications using React and TypeScript. Learn about component architecture, type safety, state management, and best practices for creating maintainable and performant applications.",
      tags: [
        "React",
        "TypeScript",
        "Web Development",
        "Architecture"
      ],
      url: "https://medium.com/@Habbeyunik/building-modern-web-applications-react-typescript",
      date: "Dec 2024",
      readTime: "10 min read"
    }
  ];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "blog",
      className: "w-full h-full flex flex-col fade-in gap-8 md:gap-12 px-4 md:px-12 py-10 md:py-20",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(H3, { className: "text-2xl md:text-4xl font-bold mb-4", children: "Latest Articles" }) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto w-full", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPosts.map((post, index) => /* @__PURE__ */ jsx(
          BlogItem,
          {
            title: post.title,
            description: post.description,
            tags: post.tags,
            url: post.url,
            date: post.date,
            readTime: post.readTime
          },
          index
        )) }) })
      ]
    }
  );
}

function ChatWithMe() {
  const [copiedHandle, setCopiedHandle] = useState(null);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "chat-with-me",
      className: "w-full h-full flex flex-col fade-in gap-8 md:gap-12 px-4 md:px-12 py-10 md:py-20",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsx(H3, { className: "text-2xl md:text-4xl font-bold mb-4", children: "Let's Work Together" }),
          /* @__PURE__ */ jsx(Lead, { className: "text-base md:text-xl text-muted-foreground", children: "Ready to bring your ideas to life? I offer consultation services and love collaborating on exciting projects." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: [
          /* @__PURE__ */ jsxs(Card, { className: "text-center hover:bg-transparent hover:translate-y-0", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "justify-center", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl text-center", children: "Web Development" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "text-base leading-relaxed", children: "Full-stack development with modern technologies like React, Node.js, and cloud platforms." }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "text-center hover:bg-transparent hover:translate-y-0", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "justify-center", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl text-center", children: "UI/UX Design" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "text-base leading-relaxed", children: "User-centered design solutions that create engaging and intuitive digital experiences." }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "text-center hover:bg-transparent hover:translate-y-0", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "justify-center", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl text-center", children: "Technical Strategy" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "text-base leading-relaxed", children: "Architecture planning, technology selection, and scaling strategies for growing businesses." }) })
          ] })
        ] }) })
      ]
    }
  );
}

function Fun() {
  return /* @__PURE__ */ jsx(ChatWithMe, {});
}

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains(
        "dark"
      );
    }
    return false;
  });
  useEffect(() => {
    const currentIsDark = document.documentElement.classList.contains("dark");
    setIsDark(currentIsDark);
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          setIsDark(true);
          document.documentElement.classList.add("dark");
        } else {
          setIsDark(false);
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener(
      "change",
      handleChange
    );
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: toggleTheme,
      className: "relative p-2 rounded-lg border border-border hover:bg-muted/30 transition-all duration-300 hover:border-muted-foreground/30 hover-lift group",
      "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-6 h-6", children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: `absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out ${isDark ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
                /* @__PURE__ */ jsx("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap", children: isDark ? "Light mode" : "Dark mode" })
      ]
    }
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/abbeykumapayi.pdf";
    link.download = "Abbey-Kumapayi-CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#chat-with-me", label: "Contact" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-center h-full px-4 md:px-12 animate-slide-in-top", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold text-foreground hover-scale cursor-pointer", children: "AK" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-8", children: navigationLinks.map((link) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: link.href,
            className: "nav-link relative text-lg hover:text-foreground active:text-foreground transition-all duration-200 cursor-pointer group",
            children: [
              /* @__PURE__ */ jsx(Muted, { className: "text-muted-foreground group-hover:text-foreground group-active:text-foreground active:text-foreground transition-colors duration-200", children: link.label }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 active:opacity-100 transition-opacity duration-200" })
            ]
          },
          link.href
        )) }),
        /* @__PURE__ */ jsx(DarkModeToggle, {}),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleDownloadCV,
            className: "bg-transparent border border-border rounded-lg px-4 py-2 hover:bg-muted/30 transition-all duration-300 hover:border-muted-foreground/30 hover:-translate-y-0.5 hover-lift",
            children: /* @__PURE__ */ jsx(Muted, { className: "text-foreground font-medium text-sm", children: "Download CV" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex md:hidden items-center gap-4", children: [
        /* @__PURE__ */ jsx(DarkModeToggle, {}),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleMobileMenu,
            className: "p-2 rounded-lg border border-border hover:bg-muted/30 transition-all duration-300",
            "aria-label": "Toggle mobile menu",
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4 6h16M4 12h16M4 18h16"
                  }
                )
              }
            )
          }
        )
      ] })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "mobile-overlay open",
        onClick: closeMobileMenu
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `mobile-menu ${isMobileMenuOpen ? "open" : ""}`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-4 border-b border-border", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold text-foreground", children: "AK" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: closeMobileMenu,
                className: "p-2 rounded-lg hover:bg-muted/30 transition-all duration-300",
                "aria-label": "Close mobile menu",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "flex-1 p-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6", children: navigationLinks.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              onClick: closeMobileMenu,
              className: "nav-link text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors duration-200",
              children: link.label
            },
            link.href
          )) }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-border", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                handleDownloadCV();
                closeMobileMenu();
              },
              className: "w-full bg-transparent border border-border rounded-lg px-4 py-3 hover:bg-muted/30 transition-all duration-300",
              children: /* @__PURE__ */ jsx(Muted, { className: "text-foreground font-medium", children: "Download CV" })
            }
          ) })
        ] })
      }
    )
  ] });
}

function Socials() {
  return /* @__PURE__ */ jsx("div", { className: " h-full flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-col gap-4 max-md:flex-row max-md:gap-2", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://github.com/Habbeunik",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "p-3 bg-background text-muted-foreground hover:text-text-foreground dark:text-apple-dark-text-primary hover:bg-apple-background-tertiary dark:bg-apple-dark-background-tertiary transition-all duration-200 scale-in",
        "aria-label": "GitHub",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.linkedin.com/in/abbey-kumapayi-45699b140/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "p-3 bg-background text-muted-foreground hover:text-text-foreground dark:text-apple-dark-text-primary hover:bg-apple-background-tertiary dark:bg-apple-dark-background-tertiary transition-all duration-200 scale-in",
        "aria-label": "LinkedIn",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://x.com/AbbeyKumap27186",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "p-3 bg-background text-muted-foreground hover:text-text-foreground dark:text-apple-dark-text-primary hover:bg-apple-background-tertiary dark:bg-apple-dark-background-tertiary transition-all duration-200 scale-in",
        "aria-label": "X (Twitter)",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "mailto:abbeykumapayi@gmail.com",
        className: "p-3 bg-background text-muted-foreground hover:text-text-foreground dark:text-apple-dark-text-primary hover:bg-apple-background-tertiary dark:bg-apple-dark-background-tertiary transition-all duration-200 scale-in",
        "aria-label": "Email",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", { d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z" })
          }
        )
      }
    )
  ] }) });
}

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen relative flex flex-col max-w-7xl mx-auto"> <!-- Header Section --> <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[40px_1fr_40px] mobile-grid h-[60px] md:h-[70px] bg-background z-10 sticky top-0"> <div class="border-b border-r border-border h-full desktop-only"></div> <div class="border-b border-r border-border h-full"> ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/habbey/Documents/playground/my-website/src/components/Header.jsx", "client:component-export": "default" })} </div> <div class="border-b border-border h-full desktop-only"></div> </div> <!-- Mobile Socials Section --> <!-- <div class="mobile-only p-4 border-b border-border">
			<div class="flex justify-center">
				<Socials />
			</div>
		</div> --> <!-- About Section --> <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[40px_1fr_40px] mobile-grid"> <div class="border-b border-r border-border h-full desktop-only"></div> <div class="border-b border-r border-border h-full"> <section id="about" class="animate-fade-in-up animate-delay-100 mobile-section"> ${renderComponent($$result2, "About", About, {})} </section> </div> <div class="border-b border-border h-full relative desktop-only"> <div class="h-full absolute top-0 right-0 bottom-0 w-[80px] animate-fade-in-left animate-delay-200"> ${renderComponent($$result2, "Socials", Socials, {})} </div> </div> </div> <!-- Experience Section --> <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[40px_1fr_40px] mobile-grid"> <div class="border-r border-border h-full desktop-only"></div> <div class="border-r border-border h-full"> <section id="experience" class="animate-fade-in-up animate-delay-200 mobile-section"> ${renderComponent($$result2, "Experience", Experience, {})} </section> </div> <div class="border-border h-full desktop-only"></div> </div> <!-- Projects Section --> <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[40px_1fr_40px] mobile-grid flex-1"> <div class="border-r border-border h-full desktop-only"></div> <div class="border-r border-border h-full pt-4 md:pt-10"> <section id="projects" class="animate-fade-in-up animate-delay-300 mobile-section"> ${renderComponent($$result2, "Projects", Projects, {})} </section> </div> <div class="border-border h-full desktop-only"></div> </div> <!-- Blog Section --> <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[40px_1fr_40px] mobile-grid"> <div class="border-r border-border desktop-only"></div> <div class="border-r border-border h-full pt-4 md:pt-10"> <section id="blog" class="animate-fade-in-up animate-delay-400 mobile-section"> ${renderComponent($$result2, "Blog", Blog, {})} </section> </div> <div class="border-border h-full desktop-only"></div> </div> <!-- Contact Section --> <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[40px_1fr_40px] mobile-grid flex-1"> <div class="border-r border-border h-full desktop-only"></div> <div class="border-r border-border h-full pt-4 md:pt-10"> <section id="chat-with-me" class="animate-fade-in-up animate-delay-500 mobile-section"> ${renderComponent($$result2, "Fun", Fun, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/habbey/Documents/playground/my-website/src/components/Fun.jsx", "client:component-export": "default" })} </section> </div> <div class="border-border h-full relative desktop-only"> <div class="h-full absolute top-0 right-0 bottom-0 w-[80px] animate-fade-in-left animate-delay-200"> ${renderComponent($$result2, "Socials", Socials, {})} </div> </div> </div> <!-- Mobile Socials Section --> <div class="mobile-only p-4 border-b border-border"> <div class="flex justify-center"> ${renderComponent($$result2, "Socials", Socials, {})} </div> </div> <!-- Footer Section --> <div class="grid grid-cols-[40px_1fr_40px] md:grid-cols-[40px_1fr_40px] mobile-grid h-[100px]"> <div class="border-r border-t border-border h-full desktop-only"></div> <div class="border-t border-r border-border h-full"> <footer class="px-4 md:px-12 py-8 border-border"> <div class="flex flex-col sm:flex-row items-center justify-between gap-4"> <p class="text-sm text-muted-foreground">
© 2025 Abbey Kumapayi
</p> </div> </footer> </div> <div class="border-t border-border h-full desktop-only"></div> </div> </main> ` })}`;
}, "/Users/habbey/Documents/playground/my-website/src/pages/index.astro", void 0);

const $$file = "/Users/habbey/Documents/playground/my-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
