"use client";
import swal from "sweetalert2";
import { AuthContext } from "@/Context/AuthProvider";
import { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
export default function LoginPage() {
  const context = useContext(AuthContext);

  useEffect(() => {
    if (context?.user) {
      redirect("/");
    }
  }, [context?.user]);

  async function handleLogin() {
    try {
      const user = await context?.signInWithGoogle();
      console.log(
        user?.user.displayName,
        user?.user.email,
        user?.user.photoURL
      );
      if (!user?.user) {
        throw new Error("Sign in failed");
      }
      const userData = {
        name: user?.user.displayName,
        email: user?.user.email,
        image: user?.user.photoURL,
        provider: "google",
      };

      await Promise.all([
        await (
          await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/sign-token`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user?.user.email,
            }),
            credentials: "include",
          })
        ).json(),
        await (
          await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/sign-user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
            credentials: "include",
          })
        ).json(),
      ]);

      swal.fire({
        text: "Signed in Successfully",
        icon: "success",
      });
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Authentication failed.Please try again letter.";
      swal.fire({
        text: msg,
        icon: "error",
      });
    }
  }
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className={"flex flex-col gap-6"}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Register</CardTitle>
              <CardDescription>
                Only google sign in for the task
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <FieldGroup>
                  <Field>
                    <Button
                      onClick={handleLogin}
                      variant="outline"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="currentColor"
                        />
                      </svg>
                      Login with Google
                    </Button>
                  </Field>
                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                    Or continue with
                  </FieldSeparator>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <Button type="submit">Login</Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account? <a href="#">Sign up</a>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
