"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z.string().optional(),
  productCategory: z.string().min(1, { message: "Please select a product category" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  termsAccepted: z.boolean().refine((val) => val === true, { message: "You must accept the terms and conditions" }),
})

type FormValues = z.infer<typeof formSchema>

const QuoteRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      productCategory: "",
      message: "",
      termsAccepted: false,
    },
  })

  const termsAccepted = watch("termsAccepted")

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form data submitted:", data)
      setIsSubmitted(true)
      reset()

      toast({
        title: "Quote Request Submitted",
        description: "We will get back to you as soon as possible.",
      })
    } catch (error) {
      console.error("Error submitting form:", error)

      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-green-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Quote</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Interested in our export-quality horticulture products? Fill out the form below and our team will get back
            to you with pricing and availability
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
              >
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
              </motion.div>
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                Thank You!
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Your quote request has been successfully submitted. Our team will review your request and get back to
                you within 24 hours.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button onClick={() => setIsSubmitted(false)} className="transition-transform hover:scale-105">
                  Submit Another Request
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    placeholder="+254 123 456 789"
                    {...register("phone")}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Your Company Ltd" {...register("company")} />
                </motion.div>
              </div>

              <motion.div
                className="space-y-2 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <label htmlFor="productCategory" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Product Category <span className="text-red-500">*</span>
                </label>
                <Select onValueChange={(value) => setValue("productCategory", value)} defaultValue="">
                  <SelectTrigger className={errors.productCategory ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select a product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flowers">Flowers</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="coffee">Coffee</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.productCategory && <p className="text-red-500 text-sm">{errors.productCategory.message}</p>}
              </motion.div>

              <motion.div
                className="space-y-2 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your requirements..."
                  rows={5}
                  {...register("message")}
                  className={errors.message ? "border-red-500" : ""}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </motion.div>

              <motion.div
                className="flex items-start space-x-2 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <Checkbox
                  id="termsAccepted"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setValue("termsAccepted", checked as boolean)}
                  className={errors.termsAccepted ? "border-red-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="termsAccepted"
                    className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions <span className="text-red-500">*</span>
                  </label>
                  {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.01 }}
              >
                <Button type="submit" className="w-full transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Quote Request"
                  )}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}

export default QuoteRequestForm
