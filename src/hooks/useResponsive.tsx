import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";



export const useResponsive = () => {
    // screen resolutions


    const [state, setState] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    const onResizeHandler = useCallback(() => {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
        const isDesktop = window.innerWidth > 990;

        setState({ isMobile, isTablet, isDesktop });
    }, [])

    // debounce the resize call
    const debouncedCall = useDebounce(onResizeHandler, 500);

    // add event listener
    const Setup = useCallback(() => {
        window.addEventListener("resize", debouncedCall, false);
    }, [debouncedCall])

    // remove the listener
    const Cleanup = useCallback(() => {
        window.removeEventListener("resize", debouncedCall, false);
    }, [debouncedCall])

    // update the state on window resize


    useEffect(() => {
        // update the state on the initial load
        onResizeHandler();

        // assign the event
        Setup();

        return () => {
            // remove the event
            Cleanup();
        };
    }, [Cleanup, Setup, onResizeHandler]);



    return state;
};