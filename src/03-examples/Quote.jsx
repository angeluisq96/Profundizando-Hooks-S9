import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {

    const sizeRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { width, height } = sizeRef.current.getBoundingClientRect();
        setBoxSize({ width, height })
    }, [quote])

    return (
        <>
            <blockquote className='bloquote text-end' style={{ display: 'flex' }} >
                <h3 className='mb-1' ref={ sizeRef } >{ quote }</h3>
                <br />
                <footer className='blockquote-footer' > {author} </footer>
            </blockquote>
            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}
