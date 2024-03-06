import { unstable_noStore as noStore } from "next/cache";

// Here we are defining a component that uses a dynamic variable loaded from the environment
// at runtime.

export default function HelloOutput() {
    noStore()
    const GREETING_NAME = process.env.GREETING_NAME || "World";
    return (
        <p>Hello, {GREETING_NAME},</p>
    );
}
