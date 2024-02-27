"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Made in a Night, Deployed in seconds! Welcome to <span className="underline">Motion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Motion is a place to come together as a team and work on things which matter!
            </h3>
            <Button>
                Get in Motion
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    );
}

