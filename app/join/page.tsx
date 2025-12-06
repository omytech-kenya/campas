"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Mail,
    Lock,
    User,
    ArrowRight,
    Github,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function JoinPage() {
    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-background text-foreground overflow-hidden">
            {/* Left Side - Branding & Inspiration (Sticky on Desktop) */}
            <div className="lg:w-1/2 relative overflow-hidden bg-surface lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-border">
                {/* Background Pattern & Gradients */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                </div>

                <div className="relative z-10 fade-in">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-8">
                        <Sparkles className="w-3 h-3" />
                        <span>Join the Revolution</span>
                    </div>

                    <div className="space-y-6 max-w-lg">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
                            {isSignUp ? (
                                <>
                                    Build <span className="text-primary">The Future</span>
                                </>
                            ) : (
                                <>
                                    Welcome <span className="text-primary">Back</span>
                                </>
                            )}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                            {isSignUp
                                ? "Join a community of innovators, creators, and visionaries. Your next big breakthrough starts here."
                                : "Access your dashboard, track your progress, and continue building your legacy."}
                        </p>
                    </div>
                </div>

                {/* Feature List (Only visible on Desktop) */}
                <div className="relative z-10 hidden lg:block mt-12 fade-up delay-200">
                    <ul className="space-y-6">
                        {[
                            { text: "Access to exclusive hackathons", color: "text-primary" },
                            { text: "Connect with mentors and investors", color: "text-accent" },
                            { text: "Showcase your portfolio globally", color: "text-white" },
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-4 group">
                                <div className={`w-8 h-8 flex items-center justify-center border border-border bg-background group-hover:border-primary/50 transition-colors duration-300`}>
                                    <CheckCircle2 className={`w-4 h-4 ${item.color}`} />
                                </div>
                                <span className="text-lg font-light tracking-wide">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Side - Auth Forms */}
            <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 relative">
                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="w-full max-w-md space-y-8 relative z-10 fade-in delay-200">
                    <div className="text-center lg:text-left space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">
                            {isSignUp ? "Create an account" : "Sign in to your account"}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {isSignUp ? "Already have an account? " : "Don't have an account? "}
                            <button
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="font-medium text-primary hover:text-primary-dark transition-colors underline-offset-4 hover:underline"
                            >
                                {isSignUp ? "Sign in" : "Sign up"}
                            </button>
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border border-border bg-surface hover:bg-border/50 hover:border-primary/50 transition-all duration-300 text-sm font-medium group">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            <span>Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 border border-border bg-surface hover:bg-border/50 hover:border-primary/50 transition-all duration-300 text-sm font-medium group">
                            <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span>GitHub</span>
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest">
                            <span className="bg-background px-4 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        {isSignUp && (
                            <div className="space-y-2 group">
                                <label
                                    htmlFor="name"
                                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="JOHN DOE"
                                        className="flex h-11 w-full border border-input bg-surface px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 rounded-none"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2 group">
                            <label
                                htmlFor="email"
                                className="text-xs font-medium uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="M@EXAMPLE.COM"
                                    className="flex h-11 w-full border border-input bg-surface px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 rounded-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors"
                                >
                                    Password
                                </label>
                                {!isSignUp && (
                                    <Link
                                        href="/forgot-password"
                                        className="text-xs font-medium text-primary hover:text-accent transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="flex h-11 w-full border border-input bg-surface px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 rounded-none"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary w-full flex items-center justify-center gap-2 h-11 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-primary/20 group rounded-none mt-6"
                        >
                            {isSignUp ? "Create Account" : "Sign In"}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="px-8 text-center text-xs text-muted-foreground leading-relaxed">
                        By clicking continue, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
