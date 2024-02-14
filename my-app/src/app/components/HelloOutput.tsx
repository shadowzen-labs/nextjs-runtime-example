import { unstable_noStore as noStore } from "next/cache";

export default function HelloOutput() {
    noStore()
    const GREETING_NAME = process.env.GREETING_NAME || "World";
    return (
        <p>Hello, {GREETING_NAME}</p>
    );
}
