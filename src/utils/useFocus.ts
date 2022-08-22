import { useRef, useEffect } from "react";

export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current?.focus()
        // this is just to be safe, in this case the ref.current can never be null because useEffect() callback happens after the component is rendered.
    }, [])
    return ref;
}