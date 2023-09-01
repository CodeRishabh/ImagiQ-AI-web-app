"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("9a3819da-f9f6-47b8-b43e-bbb95eeaa957")
    }, []);

    return null
}