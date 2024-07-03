import React, { FunctionComponent, ImgHTMLAttributes } from 'react';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement>{}

type SlideProps = Pick<ImgProps, "src" | "alt" | "onClick" | "className" | "width" | "height">;

export const Icon: FunctionComponent<SlideProps> = (props: ImgProps) => {
    const {
        src,
        alt,
        onClick,
        className,
        width,
        height,
    } = props

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={onClick}
            className={className}
        />
    );
};
