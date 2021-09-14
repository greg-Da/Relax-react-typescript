import React, { FunctionComponent, ReactNode } from 'react';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';

const Grid: FunctionComponent<
  {
    children: ReactNode;
    xs?: Cols;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    spacing?: Spacing;
    justifyContent?: JustifyContent;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ children, xs, sm, md, lg, spacing, justifyContent, ...props }) => {
  const width = {
    xs: `xs:grid-cols-${xs}`,
    sm: `sm:grid-cols-${sm}`,
    md: `md:grid-cols-${md}`,
    lg: `lg:grid-cols-${lg}`,
  };

  console.log(width.lg);
  const space = {
    xs: `gap-2`,
    sm: `gap-3`,
    md: `gap-4`,
    lg: `gap-5`,
  };

  const justify = {
    'flex-start': `justify-start`,
    center: `justify-center`,
    'flex-end': `justify-end`,
    'space-between': `justify-between`,
    'space-around': `justify-around`,
    'space-evenly': `justify-evenly`,
  };

  return (
    <div
      className={`grid ${xs ? width.xs : ''} ${sm ? width.sm : ''} ${md ? width.md : ''} ${lg ? width.lg : ''} ${
        spacing ? space[spacing] : ''
      } ${justifyContent ? justify[justifyContent] : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;