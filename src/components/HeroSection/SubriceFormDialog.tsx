"use no memo";

import { Controller, useForm } from "react-hook-form";
import { Dialog, DialogContent } from "../ui/dialog";
import { subscribeSchema, type SubscribeDataType } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Mail, User } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface ISubriceFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubriceFormDialog({
  isOpen,
  onClose,
}: ISubriceFormDialogProps) {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<SubscribeDataType>({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: zodResolver(subscribeSchema),
    mode: "onTouched",
  });

  const handleSubrice = async (value: SubscribeDataType) => {
    setIsPending(true);
    setTimeout(() => {
      console.log(value);
      onClose();
      setIsPending(false);
      form.reset();
      toast("Susscess.");
    }, 1000);
  };

  const handleCloseDialog = (open: boolean) => {
    if (!open) {
      onClose();
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-md">
        {/* Header */}
        <div className="text-center space-y-2 pb-4">
          <h2 className="text-2xl font-bold tracking-tight">Stay Updated</h2>
          <p className="text-sm text-muted-foreground">
            Get notified about Wave75 updates, new colors, and exclusive offers
          </p>
        </div>

        <form onSubmit={form.handleSubmit(handleSubrice)} className="space-y-4">
          <FieldGroup className="space-y-4">
            {/* Name Field */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm font-medium">
                    Full Name
                  </FieldLabel>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <User className="h-4 w-4" />
                    </div>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      aria-invalid={fieldState.invalid}
                      autoComplete="name"
                      className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs mt-1.5"
                    />
                  )}
                </Field>
              )}
            />

            {/* Email Field */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm font-medium">
                    Email Address
                  </FieldLabel>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                    </div>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                      aria-invalid={fieldState.invalid}
                      autoComplete="email"
                      className="pl-10 h-11 transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-xs mt-1.5"
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Submit Button */}
          <Button
            disabled={isPending}
            type="submit"
            className="w-full h-11 text-base font-medium"
          >
            {!isPending ? "subscribe" : <Loader2 className=" animate-spin" />}
          </Button>

          <p className="text-xs text-center text-muted-foreground pt-2">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
