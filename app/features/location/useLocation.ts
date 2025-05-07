import { useEffect, useState } from "react";
import { UseLocationProps } from "@types";

/**
 * A custom hoook that manages the geolocation of the user.
 * @todo #1
 * @param param0 
 * @returns 
 */
export function useLocation({ errorCallback = null }: UseLocationProps) {
    const [location, setLocation] = useState<GeolocationPosition | null>(null);
    const [supported, setSupported] = useState<boolean>(false);

    useEffect(() => {
        if (!navigator.geolocation) {
            setSupported(false);
            return;
        }

        const watchId = navigator.geolocation.watchPosition((position) => {
            setLocation(position);
            setSupported(true);
        }, errorCallback);

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, [errorCallback]);

    return [location, supported];
}