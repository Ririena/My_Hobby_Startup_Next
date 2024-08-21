import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Button as Buttons } from "@/components/ui/button";
import { ModeToggle } from "@/components/Mode-Toggle";
export default function Home() {
    return (
        <main>
           <ModeToggle/>
        </main>
    );
}
