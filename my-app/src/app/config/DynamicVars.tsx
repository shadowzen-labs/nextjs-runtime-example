import { unstable_noStore as noStore } from "next/cache";

// Here we are defining the dynamic variables that we want to use in our app.
// We can define a set of keyvalue that we reference in other places and contain
// dynamic values that we want to change without having to recompile the app all in one place.

export default function DynamicVars() {
    noStore()
    const LIKE_INTEREST_FROM_ENV = process.env.LIKE_INTEREST || "movies";

    return {
        LIKE_INTEREST: LIKE_INTEREST_FROM_ENV,
    };
}
