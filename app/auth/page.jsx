"use client"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function signUp() {
    const { openSignIn, openSignUp } = useClerk()
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
        return <>
            <div className='text-black dark:text-white py-14 container mx-auto'>
                <h1 className='underline text-center font-bold text-3xl'>Login to Get Started</h1>

                <div className="h-[40vh] flex justify-center items-center gap-10 flex-col sm:flex-row">
                    <div className="flex justify-center items-center flex-col gap-3">
                        <Skeleton className='w-96 h-10' />
                        <Skeleton className='w-36 h-10' />
                    </div>
                    <div className="flex justify-center items-center flex-col gap-3">
                        <Skeleton className='w-96 h-10' />
                        <Skeleton className='w-36 h-10' />
                    </div>
                </div>
            </div>
        </>
    }

    return (
        <>
            <div className='text-black dark:text-white py-14 container mx-auto'>
                <h1 className='underline text-center font-bold text-3xl'>Login to Get Started</h1>

                <SignedIn>
                    <div className="h-[40vh] flex justify-center items-center gap-10 flex-col sm:flex-row">
                        <p className="text-2xl">Signed In Successfully</p>
                        <Link href={`/`}>
                            <Button>
                                Go back to Homepage
                            </Button>
                        </Link>
                    </div>
                </SignedIn>

                <SignedOut>
                    <div className="h-[40vh] flex justify-center items-center gap-10 flex-col sm:flex-row">
                        <div className="flex justify-center items-center flex-col gap-3">
                            <p className="text-2xl">Already have an account?</p>
                            <Button className='px-2' onClick={openSignIn}>Sign In</Button>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-3">
                            <p className="text-2xl">Don’t have an account?</p>
                            <Button className='px-2' onClick={openSignUp}>Sign Up</Button>
                        </div>
                    </div>
                </SignedOut>
            </div>
        </>
    );
}