import Link from 'next/link';
import React from 'react';

const linkStyle = {
  textDecoration: 'none',
  padding: '16px'    
}

const StyledLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a href={href} style={linkStyle} onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})

export const Links = ({publicId}) => {
  return <>
    <div style={{ display: 'flex' }}>
      <Link style={linkStyle}
        key={`top-site-${publicId}`}
        href={'/top-site/[publicId]'}
        as={`/top-site/${publicId}`}
        passHref
      >
        <StyledLink>Request time rendered</StyledLink>
      </Link>
      <Link style={linkStyle}
        key={`top-site-dynamic-${publicId}`}
        href={'/top-site-dynamic/[publicId]'}
        as={`/top-site-dynamic/${publicId}`}
        passHref
      >
        <StyledLink>Static Dynamic generated</StyledLink>
      </Link>
      <Link style={linkStyle}
        key={`top-site-dynamic-blocking-${publicId}`}
        href={'/top-site-dynamic-blocking/[publicId]'}
        as={`/top-site-dynamic-blocking/${publicId}`}
        passHref
      >
        <StyledLink>Static Dynamic generated blocking</StyledLink>
      </Link>
      <Link style={linkStyle}
        key={`top-site-full-static-${publicId}`}
        href={'/top-site-full-static/[publicId]'}
        as={`/top-site-full-static/${publicId}`}
        passHref
      >
        <StyledLink>Build time generated</StyledLink>
      </Link>
    </div>
  </>;
}


