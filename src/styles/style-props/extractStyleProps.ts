import type { CustomStyleProps } from '@/styles/types';

export function extractStyleProps<T extends Record<string, unknown>>(
  others: CustomStyleProps & T
): {
  styleProps: CustomStyleProps;
  remainingProps: Omit<T, keyof CustomStyleProps>;
} {
  const {
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    mxs,
    mxe,
    my,
    mys,
    mye,

    p,
    pt,
    pb,
    pl,
    pr,
    px,
    pxs,
    pxe,
    py,
    pys,
    pye,

    bc,
    bw,
    br,
    bg,
    c,
    opacity,

    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    tdc,
    tdl,
    tds,

    w,
    minW,
    maxW,
    h,
    minH,
    maxH,

    pos,
    top,
    left,
    bottom,
    right,
    inset,

    display,
    flex,
    flexDir,
    ...rest
  } = others;

  const styleProps = {
    m,
    mt,
    mb,
    ml,
    mr,
    mx,
    mxs,
    mxe,
    my,
    mys,
    mye,

    p,
    pt,
    pb,
    pl,
    pr,
    px,
    pxs,
    pxe,
    py,
    pys,
    pye,

    bc,
    bw,
    br,
    bg,
    c,
    opacity,

    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    tdc,
    tdl,
    tds,

    w,
    minW,
    maxW,
    h,
    minH,
    maxH,

    pos,
    top,
    left,
    bottom,
    right,
    inset,

    display,
    flex,
    flexDir
  };

  for (const key in styleProps) {
    if ((styleProps as Record<string, unknown>)[key] === undefined) {
      delete (styleProps as Record<string, unknown>)[key];
    }
  }

  return { styleProps, remainingProps: rest };
}
